import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
const linksData = [
  {
    href: "mailto:ingrauladolfo.torresvargas@gmail.com",
    icon: <FaEnvelope className="mr-2" size={16} />,
    title: "Correo",
  },
  {
    href: "https://linkedin.com/in/ingrauladolfotorresvargas",
    icon: <FaLinkedin className="mr-2" size={16} />,
    title: "Linkedin",
  },
  {
    href: "https://github.com/ingrauladolfo",
    icon: <FaGithub className="mr-2" size={16} />,
    title: "Github",
  },
  {
    href: "/cv/RATV.pdf",
    icon: <IoIosDocument className="mr-2" size={16} />,
    title: "CV",
  }
];

export default linksData;
