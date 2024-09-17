import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { getConfig } from "../../services/api";

const NavbarLogo = () => {
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await getConfig();
        setLogoUrl(response.data.logo);
      } catch (error) {
        console.error("Error fetching configuration:", error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <Link
      className="cursor-pointer relative z-20"
      to={"/"}
      spy={true}
      smooth={true}
      duration={100}
      offset={-98}
    >
      <img
        src={`http://127.0.0.1:8000/storage/${logoUrl}`}
        alt="Logo Header"
        className="object-contain w-[214px] h-[60px] lg:px-0"
      />
    </Link>
  );
};

export default NavbarLogo;
