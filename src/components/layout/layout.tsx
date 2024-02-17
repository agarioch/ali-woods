import LayoutHeading from "./layout.heading";
import LayoutFooter from "./layout.footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <LayoutHeading />
      <main className="bg-purple-dark px-4 sm:px-6 md:px-8 grow"></main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
