import { Layout } from "../../components/Layout/Layout";

import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Post } from "../../components/Post/Post";
import { createClient, EntryCollection } from "contentful";
import { PostFields } from "../../types/types";
import { ReactNode } from "react";

const index = ({ post }: { children: ReactNode; post: PostFields }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <Post post={post} />
      </Layout>
    </>
  );
};

const client = createClient({
  space: "zvw0mscfqu8v",
  accessToken: "fe0SSR81dKdxZ3i455mSyWyoMbmHEg6Tn2qs02hGTWA",
});

export const getStaticPaths: GetStaticPaths = async () => {
  const res: EntryCollection<PostFields> = await client.getEntries({
    content_type: "post",
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params!.slug,
  });

  return {
    props: {
      post: items[0].fields,
    },
  };
};

export default index;
