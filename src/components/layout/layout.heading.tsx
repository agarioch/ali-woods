import Link from "next/link";
import { HTMLAttributes } from "react";

const LayoutHeading = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className="bg-gray-dark py-3" {...props}>
      <nav className="container flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="text-4xl">Ali Woods</h1>
        <div className="flex min-w-fit max-w-xl basis-1/3 justify-between gap-8 text-xl sm:gap-16 xl:text-2xl">
          <a href="#gigs">Live Shows</a>
          <a href="#newsletter">Newsletter</a>
          <a href="#videos">Videos</a>
        </div>
        {props.children}
      </nav>
    </header>
  );
};

export default LayoutHeading;
