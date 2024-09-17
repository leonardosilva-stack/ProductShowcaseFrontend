import PropTypes from "prop-types";
import { Link } from "react-scroll";

const NavbarMobile = ({ isOpened, action, links }) => {
  return (
    <>
      <button
        className={`menu-toggle focus:outline-none flex lg:hidden ${
          isOpened && "menu-toggle-active"
        }`}
        onClick={action}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`${isOpened ? "menu-active" : ""} menu bg-[#111] z-10 `}>
        <div className="w-full">
          <ul className="mt-24 pt-2 flex flex-col gap-5 px-6 border-t-2 border-white lg:border-none">
            {links &&
              links.map((item, index) => (
                <li key={index}>
                  <Link
                    className="cursor-pointer link-list text-white"
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
        </div>
      </nav>
    </>
  );
};

NavbarMobile.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default NavbarMobile;
