import Head from 'next/head'
import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fumble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="root">
        <Card/>
      </div>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      
      #root {
        text-align: center;
        display: flex;
        justify-content: center;
        min-height: 100vh;
        background: #0f0a3a;
      }
      `}</style>
    </div>
  )
}
