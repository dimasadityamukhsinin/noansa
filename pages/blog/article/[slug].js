import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../../lib/api";
import Layout from "../../../blogComponents/layout";
import Image from "../../../blogComponents/image";
import { getStrapiMedia } from "../../../lib/media";
import Navigationbar from "../../Navigationbar";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const MyImage = props => {
    return (
      <img
        className="img-fluid"
        alt={props.alt}
        src={props.src}
      />
    );
  };

      //ReactMarkdown accepts custom renderers
    const renderers = {
        //This custom renderer changes how images are rendered
        //we use it to constrain the max width of an image to its container
        image: MyImage
    };

  return (
    <>
        <Navigationbar/>
        <Layout categories={categories}>
        <div
            id="banner"
            className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
            data-src={imageUrl}
            data-srcset={imageUrl}
            data-uk-img
        >
            <h1>{article.title}</h1>
        </div>
        <div className="uk-section">
            <div className="uk-container uk-container-small">
            <ReactMarkdown source={article.content} escapeHtml={false} />
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                {article.author.picture && (
                    <Image
                    image={article.author.picture}
                    style={{
                        position: "static",
                        borderRadius: "50%",
                        height: 30,
                    }}
                    />
                )}
                </div>
                <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                    By {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
                </div>
            </div>
            </div>
        </div>
        </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
