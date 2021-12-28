import { Asset, RichTextContent, Entry } from "contentful";

export interface IAuthor extends Entry<AuthorFields> {}

export interface AuthorFields {
  avatar: Asset;
  name: string;
  slug: string;
  bio: string;
}

export interface IPost extends Entry<PostFields> {}

export interface PostFields {
  title: string;
  slug: string;
  category: string;
  description: string;
  content: RichTextContent;
  author: IAuthor;
  featuredImage: Asset;
}
