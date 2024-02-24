import { NextSeo } from "next-seo";
import About from "@/components/about";
import Gigs from "@/components/gigs";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Press from "@/components/press";
import Videos from "@/components/videos";

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

export default function Home() {
  return (
    <>
      <HomeSeo />
      <Hero />
      <Gigs />
      <Newsletter />
      <About />
      <Press />
      <Videos />
    </>
  );
}
