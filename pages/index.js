import Head from "next/head";
import React from "react";
import AirTable from "airtable";

import FactCards from "../components/FactCards";

export default function App({ cards }) {
  return (
    <div>
      <Head>
        <title>Fumble</title>
      </Head>
      <main>
        <FactCards cards={cards} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const airTable = new AirTable({
    apiKey: process.env.AIRTABLE_API_KEY,
  });

  const records = await airTable
    .base(process.env.AIRTABLE_BASE_KEY)("Table 1")
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
