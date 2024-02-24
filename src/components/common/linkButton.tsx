import Link from "next/link";
import Button, { ButtonProps } from "./button";

type LinkButtonProps = ButtonProps & {
  href: string;
};

const LinkButton = ({ href, children, ...props }: LinkButtonProps) => {
  return (
    <Link href={href} target="_blank">
      <Button {...props}>{children}</Button>
    </Link>
  );
};

export default LinkButton;
