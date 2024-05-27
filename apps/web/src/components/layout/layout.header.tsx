import { type HTMLAttributes, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { LinkAnchor } from "../common";

const MotionImage = motion(Image);

const LayoutHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setIsScrolled(y > 0);
  });

  const heightVariants = {
    initial: {
      height: 115,
    },
    top: {
      height: 115,
    },
    scrolled: {
      height: 50,
    },
  };

  const imageVariants = {
    initial: {
      scaleX: 1,
    },
    top: {
      scaleX: 1,
    },
    scrolled: {
      scaleX: 1.2,
    },
  };

  return (
    <motion.header
      animate={isScrolled ? "scrolled" : "top"}
      className={clsx(
        "bg-off-white fixed top-0 z-50 w-full py-3",
        isScrolled ? "shadow-md" : "shadow-none",
      )}
    >
      <nav className="container flex flex-wrap items-baseline justify-between gap-3">
        <Link href="/">
          <motion.div
            variants={heightVariants}
            className="relative w-72 sm:w-[581px]"
          >
            <MotionImage
              src="/images/ali-woods-logo.svg"
              alt="Ali Woods"
              objectFit="contain"
              fill
              objectPosition="left"
              transition={{ type: "spring" }}
              className="origin-left sm:max-w-full"
              variants={imageVariants}
            />
          </motion.div>
        </Link>
        <div className="xl:text-2xls flex min-w-fit max-w-xl basis-1/3 justify-between gap-8 text-xl font-bold sm:gap-16">
          <LinkAnchor hasUnderline={false} href="/#gigs">
            Live Shows
          </LinkAnchor>
          <LinkAnchor hasUnderline={false} href="/#newsletter">
            Newsletter
          </LinkAnchor>
          <LinkAnchor hasUnderline={false} href="/#videos">
            Videos
          </LinkAnchor>
        </div>
        {props.children}
      </nav>
    </motion.header>
  );
};

export default LayoutHeader;
