import Link from "next/link";

type LinkAnchorProps = {
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkAnchor = ({ href, children, ...props }: LinkAnchorProps) => {
  return (
    <Link
      href={href}
      className="underline decoration-white-light decoration-2 hover:text-yellow-light"
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkAnchor;
