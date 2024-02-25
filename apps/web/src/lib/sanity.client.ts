import { createClient, type ClientConfig } from "next-sanity";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION;

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  useCdn: false, // not required since using static rendering
  apiVersion: apiVersion,
};
const client = createClient(config);

export default client;