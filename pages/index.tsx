import type { GetStaticProps } from "next";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/Home/Home";
import Head from "next/head";
import { createClient, Entry } from "contentful";
import { ReactNode } from "react";
import { PostFields } from "../types/types";

const index = ({
  posts,
}: {
  children: ReactNode;
  posts: Entry<PostFields>[];
}) => {
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
  const client = createClient({
    accessToken: "fe0SSR81dKdxZ3i455mSyWyoMbmHEg6Tn2qs02hGTWA",
    space: "zvw0mscfqu8v",
  });

  const res = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      posts: res.items,
    },
  };
};

export default index;
