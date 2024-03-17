import { postEmail } from "@/lib/sanity.queries";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const response = await postEmail(email);

    if (response?.email === email) {
      res.status(200).json({ message: "Successfully signed up!" });
    } else {
      res.status(500).json({ message: "Error submitting email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
