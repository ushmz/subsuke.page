import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/elements/footer";
import Hero from "../components/elements/hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>サブスクを管理する | Subsuke</title>
        <meta name="description" content="サブスクを管理する | Subsuke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
