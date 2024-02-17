import Link from "next/link";
import { HTMLAttributes } from "react";

const LayoutHeading = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <header className="bg-gray-dark py-3" {...props}>
      <nav className="flex justify-between items-baseline container flex-wrap gap-3">
        <h1 className="text-4xl">Ali Woods</h1>
        <div className="flex justify-between basis-1/2 min-w-fit max-w-xl gap-8 sm:gap-16 text-xl xl:text-2xl">
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
