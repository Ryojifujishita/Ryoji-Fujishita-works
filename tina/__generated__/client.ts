import { createClient } from "tinacms/dist/client";
import { queries } from "./types";

console.log("TINA_API_URL:", process.env.NEXT_PUBLIC_TINA_API_URL);

const apiURL = process.env.NEXT_PUBLIC_TINA_API_URL || 'http://localhost:4001/graphql';
const token = process.env.TINA_TOKEN || '';

export const client = createClient({ 
  url: apiURL, 
  token,
  queries 
});

export default client;
  