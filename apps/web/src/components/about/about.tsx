import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const animateBackground = useTransform(
    scrollYProgress,
    [0, 1],
    ["#146efd", "#fdd003"],
  );
  const aliTranslate = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div className="bg-blue" ref={containerRef}>
      <div className="container flex flex-col-reverse items-center gap-12 py-16 md:gap-28 lg:flex-row">
        <div className="flex-1 text-copy">
          <h2 className="text-heading text-white-light">About</h2>
          <p className="my-8 text-white">{`Ali Woods is a half-English, half-Scottish comedian, podcaster and content creator. 
          After a second sell-out Edinburgh Fringe run in 2023,
          Ali is a refreshing mix of the ‘every man’ and the ‘modern man’, 
          whose sensitivity and genuine interest in men’s mental health gives him a great perspective 
          on the modern ‘lad’ culture which often features in his comedy. 
          Ali is that wonderful blend of comedy with a heart, speaking on topics such as football, 
          the environment, and many social causes close to his heart.`}</p>
          <Link href="https://gagreflex.co.uk/acts/ali-woods/" target="_blank">
            <button className="bg-pink bold hover:bg-pink/90 border-4 px-5 py-4 font-bold uppercase transition-transform">
              Learn More
            </button>
          </Link>
        </div>
        <motion.div className="relative">
          <motion.div
            className="absolute -bottom-4 -right-4 left-4 top-4 rounded-t-full border-4"
            style={{ backgroundColor: animateBackground }}
          />
          <motion.div
            className="relative overflow-hidden rounded-t-full border-4"
            style={{ translateY: aliTranslate }}
          >
            <Image
              src="/images/ali-woods-horse.png"
              alt="Ali Woods"
              width={410}
              height={652}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
