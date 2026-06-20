// src/data/dataLinksNavbar.tsx

import { FaHome, FaUser, FaMedal, FaFolder,  } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import type { NavLink } from '../../../../common/interfaces/components/shared/Navbar';

export const dataLinksNavbar: NavLink[] = [
  {
    href: {en:'/',es:'/'},
    icon: <FaHome className="mr-2" size={18} />,
    title: { en: 'Home', es: 'Inicio' },
  },
  {
    href: {en:'/about',es:'/acerca'},
    icon: <FaUser className="mr-2" size={18} />,
    title: { en: 'About', es: 'Acerca' },
  },
  {
    href: {en:'/experience', es:'/experiencia'},
    icon: <FaMedal className="mr-2" size={18} />,
    title: { en: 'Experience', es: 'Experiencia' },
  },
  {
    href: {en:'/projects',es:'/proyectos'},
    icon: <FaFolder className="mr-2" size={18} />,
    title: { en: 'Projects', es: 'Proyectos' },
  },
  {
    href: {en:'/skills',es:'/habilidades'},
    icon: <FaGear className="mr-2" size={18} />,
    title: { en: 'Skills', es: 'Habilidades' },
  },
];