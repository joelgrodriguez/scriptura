import PostLayout from "@layouts/post";
import { getProductBySlug, getAllProducts } from "@api";

export default function Post(props) {
  return <PostLayout title={props.title} content={props.content} />;
}

export async function getStaticProps(context) {
  return {
    props: await getProductBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllProducts();
  paths = paths.map((product) => ({
    params: { slug: product.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
