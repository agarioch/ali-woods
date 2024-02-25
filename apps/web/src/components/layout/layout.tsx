import LayoutHeader from "./layout.header";
import LayoutFooter from "./layout.footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
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
