import { HTMLProps } from "react";
import clsx from "clsx";
import LayoutHeader from "./layout.header";
import LayoutFooter from "./layout.footer";

type LayoutProps = {
  children: React.ReactNode;
} & HTMLProps<HTMLDivElement>;

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={clsx("flex min-h-screen flex-col", className)}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute">
        Skip to main content
      </a>
      <LayoutHeader />
      <main className="grow bg-gray-dark" id="main">
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
