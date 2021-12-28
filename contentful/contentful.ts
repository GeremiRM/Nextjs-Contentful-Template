import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

// All the categories of your posts
export const CATEGORIES = [
  "technology",
  "culture",
  "politics",
  "health",
  "economy",
];
