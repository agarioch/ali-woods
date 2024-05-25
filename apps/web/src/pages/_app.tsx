import { GoogleAnalytics } from "@next/third-parties/google";
import { Space_Grotesk } from "next/font/google";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/layout";

const space = Space_Grotesk({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${space.className} ${space.variable}`}>
      <Component {...pageProps} />
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
      />
    </Layout>
  );
}
