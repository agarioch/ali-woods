import { Gig } from "@/types";
import client from "./sanity.client";

export async function getGigs(): Promise<Gig[]> {
  const response = await client.fetch(`*[_type == "gig"] | order(date asc)`);
  return response;
}
