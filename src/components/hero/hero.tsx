import Image from "next/image";
import HeroSocials from "./hero.socials";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// TODO: add nextgen image formats to improve loading speed
const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const aliTranslate = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      className="h-100 bg-green-dark bg-hero-pattern bg-cover"
      ref={containerRef}
    >
      <section className="container flex justify-between">
        <motion.div
          className="relative max-h-screen sm:-ml-16"
          style={{ translateY: aliTranslate }}
        >
          <Image
            src="/images/hero-ali-woods.png"
            alt="Ali Woods"
            priority
            width={1358}
            height={1224}
            className="pointer-events-none max-w-full md:-mb-12 md:max-w-xl md:-translate-y-12 lg:max-w-3xl xl:max-w-4xl"
          />
          <div className="absolute left-3/4 top-1/4 ml-[5vw] hidden w-max font-heading md:block">
            <p className="text-3xl italic lg:text-4xl xl:text-5xl">
              {"In a world of wannabes,"}
              <br />
              {"Woods is the real deal"}
            </p>
            <p className="mt-4 text-yellow-light lg:text-xl">
              Evening Standard
            </p>
          </div>
        </motion.div>
        <HeroSocials />
      </section>
    </div>
  );
};

export default Hero;
