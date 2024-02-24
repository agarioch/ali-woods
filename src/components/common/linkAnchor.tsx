import clsx from "clsx";
import Link from "next/link";

type LinkAnchorProps = {
  href: string;
  children: React.ReactNode;
  hasUnderline?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkAnchor = ({
  href,
  children,
  hasUnderline = true,
  ...props
}: LinkAnchorProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "decoration-white-light decoration-2 transition-colors hover:text-yellow-light",
        hasUnderline && "underline",
      )}
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkAnchor;
