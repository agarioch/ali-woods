import LayoutHeading from "./layout.heading";
import LayoutFooter from "./layout.footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <LayoutHeading />
      <main className="bg-gray-dark grow">{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
