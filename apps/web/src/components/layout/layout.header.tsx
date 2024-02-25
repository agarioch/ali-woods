import { type HTMLAttributes, useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { LinkAnchor } from "../common";

const LayoutHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setIsScrolled(y > 0);
  });

  return (
    <header
      className={clsx(
        "bg-gray-dark py-3",
        isScrolled ? "sticky top-0 z-50" : "",
      )}
      {...props}
    >
      <nav className="container flex flex-wrap items-baseline justify-between gap-3">
        <Link href="/">
          <h1 className="text-4xl">Ali Woods</h1>
        </Link>
        <div className="flex min-w-fit max-w-xl basis-1/3 justify-between gap-8 text-xl sm:gap-16 xl:text-2xl">
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
    </header>
  );
};

export default LayoutHeader;
