import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <link rel="stylesheet" href="https://use.typekit.net/ork1mfl.css"></link>
      <Head />
      <body className="font-body antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
