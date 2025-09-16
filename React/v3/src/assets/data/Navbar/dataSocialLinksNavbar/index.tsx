// src/data/dataSocialLinksNavbar.tsx
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { IoIosDocument } from 'react-icons/io';

export const getDataSocialLinksNavbar = (lang: 'en' | 'es') => {
  return [
    {
      icon: <FaEnvelope className="mr-2" size={16} />,
      title: {
        en: 'Contact',
        es: 'Contacto',
      },
      onClick: () => {
        const user = 'ingrauladolfo.torresvargas';
        const domain = 'gmail.com';
        window.location.href = `mailto:${user}@${domain}`;
      },
    },
    {
      href: 'https://linkedin.com/in/ingrauladolfotorresvargas',
      icon: <FaLinkedin className="mr-2" size={16} />,
      title: {
        en: 'LinkedIn',
        es: 'Linkedin',
      },
    },
    {
      href: 'https://github.com/ingrauladolfo',
      icon: <FaGithub className="mr-2" size={16} />,
      title: {
        en: 'GitHub',
        es: 'Github',
      },
    },
    {
      href: lang === 'en' ? '/cv/english/Resume - Raúl Adolfo Torres Vargas.pdf' : '/cv/spanish/CV - Raúl Adolfo Torres Vargas.pdf',
      icon: <IoIosDocument className="mr-2" size={16} />,
      title: {
        en: 'Resume',
        es: 'CV',
      },
      isCV: true,
    },
  ];
};
