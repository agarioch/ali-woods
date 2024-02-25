import { Html, Head, Main, NextScript } from "next/document";

// TODO: replace adobe typekit with actual font files
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.svg" />
      <link rel="preconnect" href="https://use.typekit.net" />
      <link rel="stylesheet" href="https://use.typekit.net/ork1mfl.css"></link>
      <Head />
      <body className="font-body antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}