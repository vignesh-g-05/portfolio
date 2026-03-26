import Logo from "./components/logo";
import MobileNavigation from "./components/mobile-navigation";
import Navigation from "./components/navigation";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-transparent px-6 py-3 backdrop-blur-3xl">
      <div className="mx-auto flex max-w-275 items-center justify-between px-5 md:px-8 lg:px-10">
        <Logo />
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
