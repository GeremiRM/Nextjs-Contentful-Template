import { Layout } from "../../components/Layout/Layout";

import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Post } from "../../components/Post/Post";
import { createClient, EntryCollection, Entry } from "contentful";
import { PostFields } from "../../types/types";
import { ReactNode } from "react";
import { Articles } from "../../components/Shared/Articles";

interface Props {
  children: ReactNode;
  post: PostFields;
  moreArticles: Entry<PostFields>[];
}

const index = ({ post, moreArticles }: Props) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <Post post={post} />
        {moreArticles.length > 2 && (
          <Articles posts={moreArticles.slice(0, 4)} />
        )}
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
  const { items }: { items: Entry<PostFields>[] } = await client.getEntries({
    content_type: "post",
    "fields.slug": params!.slug,
  });

  const { items: moreArticles } = await client.getEntries({
    content_type: "post",
    "fields.category": items[0].fields.category,
  });

  return {
    props: {
      post: items[0].fields,
      moreArticles,
    },
  };
};

export default index;
