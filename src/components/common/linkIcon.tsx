import Image, { type ImageProps } from "next/image";
import Link from "next/link";

type LinkIconProps = {
  href: string;
} & ImageProps;

const LinkIcon = ({ href, alt, src, ...props }: LinkIconProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="opacity-80 transition-opacity hover:opacity-100"
    >
      <Image alt={alt} src={src} {...props} />
    </Link>
  );
};

export default LinkIcon;
