import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { HTMLAttributes, ReactElement } from "react";

type LinkIconProps = {
  href: string;
} & HTMLAttributes<HTMLAnchorElement>;

const LinkIcon = ({ href, children, className, ...props }: LinkIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={clsx(
        "opacity-80 transition-opacity hover:opacity-100",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkIcon;
