import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "../../components/elements/footer";
import { getPrivacyPolicy } from "../../libs/api";
import markdownToHtml from "../../libs/markdownToHtml";

type Props = {
  [key: string]: string;
  content: string;
};

const PrivacyPolicy: NextPage<Props> = ({ content }) => {
  return (
    <div>
      <Head>
        <title>プライバシーポリシー | Subsuke</title>
        <meta name="description" content="プライバシーポリシー | Subsuke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-3/4 mx-auto my-32">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

export async function getStaticProps() {
  const doc = getPrivacyPolicy();
  const { content } = await markdownToHtml(doc.content);

  return {
    props: {
      ...doc,
      content,
    },
  };
}
