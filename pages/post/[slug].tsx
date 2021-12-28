import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode } from "react";
import { client } from "../../contentful/contentful";

import { Layout } from "../../components/Layout/Layout";
import { Post } from "../../components/Post/Post";
import { Articles } from "../../components/Shared/Articles";

import { IPost } from "../../types/types";

interface Props {
  children: ReactNode;
  post: IPost;
  moreArticles: IPost[];
}

const index = ({ post, moreArticles }: Props) => {
  return (
    <>
      <Head>
        <title>{post.fields.title}</title>
      </Head>
      <Layout>
        <Post post={post.fields} />
        {moreArticles.length > 2 && (
          <Articles posts={moreArticles.slice(0, 4)} />
        )}
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: { items: IPost[] } = await client.getEntries({
    content_type: "post",
  });

  const paths = items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items }: { items: IPost[] } = await client.getEntries({
    content_type: "post",
    "fields.slug": params!.slug,
  });

  const { items: moreArticles } = await client.getEntries({
    content_type: "post",
    "fields.category": items[0].fields.category,
    "fields.slug[ne]": items[0].fields.slug,
    limit: 4,
  });

  return {
    props: {
      post: items[0],
      moreArticles,
    },
  };
};

export default index;
