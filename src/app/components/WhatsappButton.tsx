import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "2348183798473";

  const message = "Hello, i'm interested in your service.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="z-50 fixed bottom-17 right-10 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-400 flex items-center justify-center border-none "
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;
