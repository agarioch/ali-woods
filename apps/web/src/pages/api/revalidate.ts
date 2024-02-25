import { NextApiRequest, NextApiResponse } from "next";
import { parseBody } from "next-sanity/webhook";

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body, isValidSignature } = await parseBody(
    req.body,
    process.env.SANITY_WEBHOOK_SECRET ?? "",
  );

  console.log("Received revalidate request", body);

  if (!isValidSignature) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }
  if (!body || !body._type) {
    res.status(400).json({ success: false, message: "Invalid request" });
    return;
  }

  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
