import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./index.css";

const WhatsAppButton = () => {
  const screenWidth = window.innerWidth;

  const whatsappUrl =
    screenWidth > 991
      ? "https://web.whatsapp.com/send?phone=+5513992095589"
      : "https://api.whatsapp.com/send?phone=+5513992095589";

  return (
    <>
      <div>
        <Link to={whatsappUrl} target="_blank" className="button-whats">
          <FaWhatsapp className="text-3xl" />{" "}
        </Link>
      </div>
    </>
  );
};

export default WhatsAppButton;
