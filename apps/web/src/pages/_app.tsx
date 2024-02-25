import { GoogleAnalytics } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID ?? ""} />
    </Layout>
  );
}
