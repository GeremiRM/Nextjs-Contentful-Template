import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode } from "react";
import { client } from "../../contentful/contentful";

import { useRouter } from "next/router";

import { Layout } from "../../components/Layout/Layout";
import { IPost } from "../../types/types";

import { Category } from "../../components/Category/Category";
import { shuffleArray } from "../../utils/utils";

interface Props {
  children: ReactNode;
  posts: IPost[];
}

// All the categories of your posts
const CATEGORIES = ["technology", "culture", "politics", "health", "economy"];

const Index = ({ posts }: Props) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>
          {category![0].toLocaleUpperCase() + category!.slice(1)} | Mundana
        </title>
      </Head>
      <Layout>
        <Category posts={posts} category={category as string} />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CATEGORIES.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items }: { items: IPost[] } = await client.getEntries({
    content_type: "post",
    // Replace with this line to get the posts from your categories
    // "fields.category": params!.category,
    "fields.category": "technology",
  });

  // The array is shuffled only for the purposes of the demo
  // you should NOT use this.
  return {
    props: {
      posts: shuffleArray(items),
    },
  };
};

export default Index;
