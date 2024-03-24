import { GoogleAnalytics } from "@next/third-parties/google";
import { Rubik } from "next/font/google";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/layout";

const rubik = Rubik({
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${rubik.className} ${rubik.variable}`}>
      <Component {...pageProps} />
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
      />
    </Layout>
  );
}
