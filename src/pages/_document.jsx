import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Tech Optimum Hackathon 2023" />
        <meta
          name="keywords"
          content="TOHacks, Tech Optimum, Hackathon, 2023, Collaboration, Prizes, Major League Hacking, MLH, Programming, Software Engineering, Computer Science, Technology, Coding, Hack, Hackers, Hackathon, Hackathons, Hackers, "
        />
        <link
          rel="icon"
          href="/TOFavicon(Dblue).ico"
          media="(prefers-color-scheme:dark)"
        />
        <link
          rel="icon"
          href="/TOFavicon(lblue).ico"
          media="(prefers-color-scheme:light)"
        />
        <link rel="apple-touch-icon" href="/TOFavicon(lblue).ico" />
        <meta name="author" content="Tech Optimum" />
        <meta name="robot" content="index, follow" />
        <meta name="og:title" content="Tech Optimum | Hackathon" />
        <meta name="og:description" content="Tech Optimum Hackathon 2023" />
        <meta name="og:image" content="/TOFavicon(lblue).ico" />
        <meta name="og:url" content="https://hacks.techoptimum.com/" />
        <meta name="og:site_name" content="Tech Optimum Hackathon 2023" />
        <meta name="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
