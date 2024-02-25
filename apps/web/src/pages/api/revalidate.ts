import { NextApiRequest, NextApiResponse } from "next";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

type StaleRoutesByType = {
  [key: string]: string[];
};

/**
 * Define the routes that should be revalidated when a document of a certain type is published
 */
const staleRoutesByType: StaleRoutesByType = {
  gig: ["/"],
  video: ["/"],
};

async function readBody(readable: any) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  if (typeof signature !== "string") {
    const missingSignature = "Missing signature";
    console.log(missingSignature, true);
    return res.status(400).json({ message: missingSignature });
  }

  const body = await readBody(req); // Read the body into a string
  if (
    !isValidSignature(
      body,
      signature,
      process.env.SANITY_WEBHOOK_SECRET?.trim() ?? "",
    )
  ) {
    const invalidSignature = "Invalid signature";
    console.log(invalidSignature, true);
    res.status(401).json({ success: false, message: invalidSignature });
    return;
  }

  const jsonBody = JSON.parse(body);
  const { _type } = jsonBody;
  if (typeof _type !== "string" || !_type) {
    const invalidId = "Invalid _type";
    console.log(invalidId, true);
    return res.status(400).json({ message: invalidId });
  }

  const staleRoutes = staleRoutesByType[_type];

  if (!staleRoutes) {
    const noRoutes = `No routes defined for type ${_type}`;
    console.log(noRoutes, true);
    return res.status(400).json({ message: noRoutes });
  }

  try {
    await Promise.all(staleRoutes.map((route) => res.revalidate(route)));
    const updatedRoutes = `Updated routes: ${staleRoutes.join(", ")}`;
    console.log(updatedRoutes);
    return res.status(200).json({ message: updatedRoutes });
  } catch (err) {
    let errorMessage = "Error revalidating routes";
    if (err instanceof Error) {
      errorMessage = `${errorMessage}: ${err.message}`;
    }
    console.log(errorMessage, true);
    return res.status(500).json({ message: errorMessage });
  }
}
