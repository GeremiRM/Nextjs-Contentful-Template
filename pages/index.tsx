import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/Home/Home";

const index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default index;
