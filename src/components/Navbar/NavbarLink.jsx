import PropTypes from "prop-types";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";

const NavbarLink = ({ links, isOpened }) => {
  const location = useLocation();

  return (
    <ul className={`${isOpened ? "hidden" : "hidden lg:flex gap-x-5"}`}>
      {links &&
        links.map((item, index) => (
          <li key={index}>
            <Link
              className={`cursor-pointer text-[#000] font-semibold hover:text-primary text-lg relative ${
                location.pathname === item.url
                  ? "border-b-2 border-primary"
                  : "link-border-fill"
              }`}
              to={item.url.replace("#", "")} // Remove "#" para corresponder ao id da seção
              spy={true}
              smooth={true}
              duration={100}
              offset={-98}
              key={item.url}
            >
              {item.text}
            </Link>
          </li>
        ))}
    </ul>
  );
};

NavbarLink.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  isOpened: PropTypes.bool.isRequired,
};

export default NavbarLink;
