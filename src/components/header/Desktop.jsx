import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import data from "../../config/structure.pt.json";
import "./desktop.css";

const Desktop = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <section className="py-5 px-5 shadow-lg bg-primary w-full lg:px-0 fixed top-0 z-50">
        <div className="container">
          <div className="flex gap-5 items-center justify-between">
            <ScrollLink
              className="cursor-pointer hidden "
              to={data.navlinks[0].url.substring(1)}
              spy={true}
              smooth={true}
              duration={100}
              offset={-98}
              key={data.navlinks[0].url}
            >
              <img
                src={data.images.logo}
                alt="Logo Header"
                className="object-cover  w-[150px] lg:px-0"
              />
            </ScrollLink>

            <nav className="hidden xl:flex  justify-center items-center">
              <ul className="flex gap-3 lg:gap-6 items-center">
                {data.navlinks.map((link, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={link.url.substring(1)}
                      spy={true}
                      smooth={true}
                      duration={100}
                      offset={-98}
                      className="linha"
                    >
                      {link.text}
                    </ScrollLink>
                  </li>
                ))}
                <div className="flex gap-x-2">
                  <Link
                    to={data.navlinks[4].url}
                    target="_blank"
                    className="bg-secondary text-white font-semibold text-base px-6 py-2 duration-300 rounded-md cursor-pointer"
                  >
                    {data.navlinks[4].text}
                  </Link>
                </div>
              </ul>
            </nav>

            <button className="lg:hidden block" onClick={toggleMobileMenu}>
              <img className="h-[30px]" src={data.images.logo} alt="" />
            </button>

            <button
              className="xl:hidden px-2 text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <IoMdClose size={30} />
              ) : (
                <IoMenu size={30} />
              )}
            </button>
          </div>
        </div>
      </section>
      {isMobileMenuOpen && (
        <nav className="mobile-nav w-full h-full mt-[90px] xl:hidden top-[-10px] bg-primary py-6 px-7 fixed z-50">
          <ul className="items-center">
            {data.navlinks.map((link, index) => (
              <li
                className={`py-2 ${
                  index === data.navlinks.length - 1
                    ? "text-white font-semibold text-base text-center px-1 py-2 my-5 duration-300 rounded-md cursor-pointer"
                    : ""
                }`}
                key={index}
              >
                <ScrollLink
                  to={link.url.substring(1)}
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-98}
                >
                  {link.text}
                </ScrollLink>
              </li>
            ))}
            <li className="py-2 bg-secondary my-2 rounded-md px-1 font-semibold text-center">
              <ScrollLink
                to={data.navlinks[4].url.substring(1)}
                spy={true}
                smooth={true}
                duration={100}
                offset={-98}
              >
                {parse(data.navlinks[4].text)}
              </ScrollLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Desktop;
