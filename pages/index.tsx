import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/elements/Footer";
import Header from "../components/elements/Header";
import Hero from "../components/elements/Hero";
import MainListPreview from "../components/elements/MainListPreview";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Subsuke - サブスクを管理する | Subsuke</title>
        <meta name="description" content="サブスクを管理する | Subsuke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <MainListPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
