import Head from "next/head";
import { Heading } from "@chakra-ui/react";

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
      <Heading>Welcome to TOHacks!</Heading>
      {/* CONTENT */}
    </>
  );
}
