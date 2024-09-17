import { useState } from "react";
import NavbarLink from "./NavbarLink";
import NavbarLogo from "./NavbarLogo";
import NavbarMobile from "./NavbarMobile";
import data from "../../config/structure.pt.json";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("menu-open");
      return;
    }
    document.body.classList.remove("menu-open");
  };

  return (
    <header className="py-5 px-5 shadow-lg bg-white w-full lg:px-0 fixed top-0 z-50">
      <div className="container lg:py-4 items-center flex justify-between xl:gap-x-6 gap-x-2 lg:p-0 p-4r">
        <NavbarLogo isOpened={isMenuOpen} />
        <NavbarLink links={data.navlinks} isOpened={isMenuOpen} />
        <NavbarMobile
          isOpened={isMenuOpen}
          action={toggleMenu}
          links={data.navlinks}
        />
      </div>
    </header>
  );
};

export default Navbar;
