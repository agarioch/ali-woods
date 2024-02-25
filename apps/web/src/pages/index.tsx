import { GetStaticProps } from "next";
import client from "@/lib/sanity.client";
import { NextSeo } from "next-seo";

import About from "@/components/about";
import Gigs from "@/components/gigs";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Press from "@/components/press";
import Videos from "@/components/videos";
import { Gig } from "@/types";
import { getGigs } from "@/lib/sanity.queries";

const pageDescription =
  "Ali Woods is an award winning stand-up comedian, podcaster, content-creator and ginger. View upcoming gigs, videos and exclusive content.";

const HomeSeo = () => (
  <NextSeo
    title="Ali Woods | Comedian"
    description={pageDescription}
    openGraph={{
      title: "Ali Woods | Comedian",
      type: "website",
      description: pageDescription,
      images: [
        {
          url: "https://www.aliwoodsgigs.com/images/ali-woods-splits.png",
          width: 4096,
          height: 1224,
          alt: "Ali Woods",
        },
      ],
    }}
  />
);

export const getStaticProps: GetStaticProps = async () => {
  const gigs = await getGigs();
  return {
    props: { gigs },
  };
};

type HomeProps = {
  gigs: Gig[];
};

export default function Home({ gigs }: HomeProps) {
  return (
    <>
      <HomeSeo />
      <Hero />
      <Gigs gigs={gigs} />
      <Newsletter />
      <About />
      <Press />
      <Videos />
      <pre>{JSON.stringify({ gigs }, null, 2)}</pre>
    </>
  );
}
