import Head from "next/head";
import React from "react";
import Airtable from "airtable";

import FactCards from "../components/FactCards";
import shuffleArray from "../components/utils/suffleArray";

export default function App({ cards }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://d3tbpaf5tfzpa.cloudfront.net/buenos-aires.css"
        />

        <link
          rel="stylesheet"
          href="https://d3tbpaf5tfzpa.cloudfront.net/source-sans-pro.css"
        />
        <title>Fumble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <FactCards cards={cards} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base(process.env.AIRTABLE_BASE_KEY)("Cards")
    .select({
      fields: ["CardTitle", "CardDescription"],
    })
    .all();

  const cards = await records.map((product) => {
    return {
      cardTitle: product.get("CardTitle"),
      cardDescription: product.get("CardDescription"),
    };
  });

  return {
    props: {
      cards,
    },
  };
}
