import Link from "next/link";
import { HTMLAttributes } from "react";

const LayoutHeading = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className="bg-gray-dark py-3" {...props}>
      <nav className="container flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="text-4xl">Ali Woods</h1>
        <div className="flex min-w-fit max-w-xl basis-1/3 justify-between gap-8 text-xl sm:gap-16 xl:text-2xl">
          <Link href="#live-shows">Live Shows</Link>
          <Link href="#newsletter">Newsletter</Link>
          <Link href="#videos">Videos</Link>
        </div>
        {props.children}
      </nav>
    </header>
  );
};

export default LayoutHeading;
