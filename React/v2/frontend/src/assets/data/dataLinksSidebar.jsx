import { FaFolder, FaHome, FaMedal, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
const linksData = [
    {
      href: "/",
      icon: <FaHome className="mr-2" size={18} />,
      title: "Inicio",
    },
    {
      href: "/about",
      icon: <FaUser className="mr-2" size={18} />,
      title: "Acerca",
    },
    {
      href: "/experience",
      icon: <FaMedal className="mr-2" size={18} />,
      title: "Experiencia",
    },
    {
      href: "/projects",
      icon: <FaFolder className="mr-2" size={18} />,
      title: "Proyectos",
    },
    {
      href: "/stack",
      icon: <FaGear className="mr-2" size={18} />,
      title: "Stack",
    }
  ];
  
  export default linksData;
  