import React from "react";
import Articles from "../blogComponents/articles";
import { fetchAPI } from "../lib/api";
import Navigationbar from "./Navigationbar";
import Layout from '../blogComponents/layout';

const Blog = ({ articles, categories }) => {
  return (
    <>
      <Navigationbar/>
      <Layout categories={categories}>
        <div>
          <div className="uk-container uk-container-large">
            <Articles articles={articles} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { articles, categories },
    revalidate: 1,
  };
}

export default Blog;
