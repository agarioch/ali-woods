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
        "font-medium decoration-white decoration-2 transition-colors hover:decoration-yellow",
        hasUnderline && "underline",
      )}
      target={href.startsWith("http") ? "_blank" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkAnchor;
