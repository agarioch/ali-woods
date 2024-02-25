import { createClient, type ClientConfig } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION;

console.log({ projectId, dataset, apiVersion });

const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  useCdn: false, // not required since using static rendering
  apiVersion: apiVersion,
};
const client = createClient(config);

export default client;
