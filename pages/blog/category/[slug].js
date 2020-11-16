import { fetchAPI } from "../../../lib/api";
import Layout from "../../../blogComponents/layout";
import Articles from "../../../blogComponents/articles";
import Navigationbar from "../../Navigationbar";

const Category = ({ category, categories }) => {

  return (
    <>
        <Navigationbar/>
        <Layout categories={categories}>
            <div>
                <div className="uk-container uk-container-large">
                    <Articles articles={category.articles} />
                </div>
            </div>
        </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;
