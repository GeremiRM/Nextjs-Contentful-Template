import { Asset, RichTextContent, Entry } from "contentful";

export type Author = {
  avatar: Asset;
  name: string;
  slug: string;
};

export interface PostFields {
  title: string;
  slug: string;
  category: string;
  description: string;
  content: RichTextContent;
  author: Entry<Author>;
  featuredImage: Asset;
}
