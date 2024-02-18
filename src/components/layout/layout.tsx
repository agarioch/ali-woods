import LayoutHeading from "./layout.heading";
import LayoutFooter from "./layout.footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <LayoutHeading />
      <main className="grow bg-gray-dark">{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
