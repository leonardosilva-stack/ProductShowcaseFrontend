import PropTypes from "prop-types";
import { Link } from "react-scroll";

const NavbarLink = ({ links, isOpened }) => {
  return (
    <ul className={`${isOpened ? "hidden" : "hidden lg:flex gap-x-5"}`}>
      {links &&
        links.map((item, index) => (
          <li key={index}>
            <Link
              className="cursor-pointer"
              to={item.url}
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
