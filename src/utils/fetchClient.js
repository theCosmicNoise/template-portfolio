import { createClient } from "contentful";

export const client = createClient({
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  });