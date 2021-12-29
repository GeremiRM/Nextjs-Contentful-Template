import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode } from "react";

import { Layout } from "../../components/Layout/Layout";

import { IPost, IAuthor } from "../../types/types";
import { Author } from "../../components/Author/Author";
import { client } from "../../contentful/contentful";

interface Props {
  children: ReactNode;
  author: IAuthor;
  posts: IPost[];
}

const index = ({ author, posts }: Props) => {
  if (!author)
    return (
      <Layout>
        <div style={{ height: "80vh" }}></div>
      </Layout>
    );

  return (
    <>
      <Head>
        <title>{author.fields.name} posts</title>
      </Head>
      <Layout>
        <Author author={author} posts={posts} />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: { items: IAuthor[] } = await client.getEntries({
    content_type: "author",
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
  const { items }: { items: IAuthor[] } = await client.getEntries({
    content_type: "author",
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

  const { items: posts } = await client.getEntries({
    content_type: "post",
    select: "fields",
    "fields.author.sys.contentType.sys.id": "author",
    "fields.author.fields.slug": items[0].fields.slug,
  });

  return {
    props: {
      author: items[0],
      posts,
    },
    revalidate: 1,
  };
};

export default index;
