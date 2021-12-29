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
  morePosts: IPost[];
}

const index = ({ post, morePosts }: Props) => {
  if (!post)
    return (
      <Layout>
        <div style={{ height: "80vh" }}></div>
      </Layout>
    );

  return (
    <>
      <Head>
        <title>{post.fields.title}</title>
      </Head>
      <Layout>
        <Post post={post.fields} />
        {morePosts.length > 2 && <Articles posts={morePosts.slice(0, 4)} />}
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items }: { items: IPost[] } = await client.getEntries({
    content_type: "post",
    "fields.slug": params!.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { items: morePosts } = await client.getEntries({
    content_type: "post",
    "fields.category": items[0].fields.category,
    "fields.slug[ne]": items[0].fields.slug,
    limit: 4,
  });

  return {
    props: {
      post: items[0],
      morePosts,
    },
    revalidate: 1,
  };
};

export default index;
