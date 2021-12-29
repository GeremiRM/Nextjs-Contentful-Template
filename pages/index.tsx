import type { GetStaticProps } from "next";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/Home/Home";
import Head from "next/head";
import { ReactNode } from "react";
import { IPost } from "../types/types";

import { client } from "../contentful/contentful";

const index = ({ posts }: { children: ReactNode; posts: IPost[] }) => {
  return (
    <>
      <Head>
        <title>Mundana | The home of your news</title>
      </Head>
      <Layout>
        <Home posts={posts} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1,
  };
};

export default index;
