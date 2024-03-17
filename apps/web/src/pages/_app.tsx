import { GoogleAnalytics } from "@next/third-parties/google";
import { Rubik } from "next/font/google";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/layout";

const rubik = Rubik({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={rubik.className}>
      <Component {...pageProps} />
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
      />
    </Layout>
  );
}
