import Head from "next/head";
import { Button } from "@nextui-org/react";
import Header from "../components/layout/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Optimum Hacks | 2023</title>
        <meta
          name="description"
          content="2023 TO hacks hosted by Tech Optimum"
        />
        <link rel="icon" href="/TOFavicon(Dblue).ico" />
      </Head>

      {/* CONTENT */}

      <Header />
    </>
  );
}
