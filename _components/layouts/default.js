import Head from "next/head";
import Header from "_components/includes/header";
import Footer from "_components/includes/footer";

export default function DefaultLayout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
