import type { Work } from "../../../../common/interfaces/data/pages/Experience"

const workExperienceData: Work[] = [
  {
    id: 1,
    startDate: { es: "05/01/2019", en: "01/05/2019" },
    title: {
      es: "Desarrollador y Programador Freelance, y Fundador",
      en: "Freelance Developer and Programmer, and Founder",
    },
    company: {
      es: "Easy Software Design México",
      en: "Easy Software Design México",
    },
    description: {
      es: "Como freelancer, lidero un equipo de desarrolladores web mientras busco nuevos proyectos.",
      en: "As a freelancer, I lead a team of web developers while seeking new projects.",
    },
    workHere: true,
    typeWork: {
      es: "Remoto",
      en: "Remote",
    },
  },
  {
    id: 2,
    startDate: { es: "23/09/2022", en: "09/23/2022" },
    endDate: { es: "16/05/2025", en: "05/16/2025" },
    typeWork: { es: "En oficina", en: "On-site" },
    title: {
      es: "Desarrollador de nuevas tecnologías",
      en: "New Technologies Developer",
    },
    company: {
      es: "Grupo Salinas",
      en: "Grupo Salinas",
    },
    description: {
      es: "Encargado de mantener proyectos como CoinPro y Elektravales; también de la creación del proyecto llamado Tienda de Monedas, se hizo el portal web que es el configurador de la app móvil.",
      en: "In charge of maintaining projects like CoinPro and Elektravales; also developed the 'Tienda de Monedas' project, creating the web portal for configuring the mobile app.",
    },
    reasonLeaving: {
      es: "Culminación de contrato",
      en: "Contract completion",
    },
    workHere: false,
    links: [
      {
        id: 1,
        href: "https://tienda-monedas-dev.admin-proyectocoinpro.com:80/portal-configuracion/",
        alt: { es: "Tienda de Monedas", en: "Tienda de Monedas" },
      },
      {
        id: 2,
        href: "https://portal.elektravales.com.mx/",
        alt: { es: "Elektra Vales", en: "Elektra Vales" },
      },
      {
        id: 3,
        href: "https://coin-pro.com.mx/",
        alt: { es: "Coin Pro", en: "Coin Pro" },
      },
    ],
  },
  {
    id: 3,
    startDate: { es: "23/09/2022", en: "09/23/2022" },
    endDate: { es: "09/04/2025", en: "04/09/2025" },
    typeWork: { es: "Remoto", en: "Remote" },
    title: {
      es: "Consultor y desarrollador Microsoft",
      en: "Microsoft Consultant and Developer",
    },
    company: { es: "Teia Consultoría", en: "Teia Consultoría" },
    description: {
      es: "Mantenimiento de proyectos relacionados con declaraciones anuales de personas, tanto físicas como morales, acorde a las modificaciones que el cliente mencione; además de tomar cursos para la obtención de certificaciones en Azure y DataBricks.",
      en: "Maintenance of projects related to annual declarations of individuals and businesses, according to client updates; also participated in Azure and Databricks certification training.",
    },
    reasonLeaving: {
      es: "Culminación de contrato",
      en: "Contract completion",
    },
    workHere: false,
  },
  {
    id: 4,
    startDate: { es: "09/08/2022", en: "08/09/2022" },
    endDate: { es: "16/08/2022", en: "08/16/2022" },
    title: {
      es: "Desarrollador React",
      en: "React Developer",
    },
    company: {
      es: "Promo Espacio (externo traído por THTech)",
      en: "Promo Espacio (external, brought in by THTech)",
    },
    description: {
      es: "Desarrollé el módulo 'Bitácora' para exportar a Excel los spots y anuncios realizados durante el mes para diversos clientes y sus sucursales.",
      en: "Developed the 'Bitácora' module to export to Excel the monthly spots and ads for various clients and their branches.",
    },
    reasonLeaving: {
      es: "El proyecto fue cancelado por falta de presupuesto",
      en: "The project was canceled due to lack of budget",
    },
    workHere: false,
    typeWork: { es: "En oficina", en: "On-site" },
    links: [
      {
        id: 1,
        href: "https://promoespacio.com.mx/sac/Login_local2.asp",
        alt: { es: "Promo Espacio", en: "Promo Espacio" },
      },
    ],
  },
  {
    id: 5,
    startDate: { es: "11/01/2022", en: "01/11/2022" },
    endDate: { es: "30/06/2022", en: "06/30/2022" },
    title: { es: "Desarrollador React", en: "React Developer" },
    company: { es: "ONIBEX", en: "ONIBEX" },
    description: {
      es: "Durante mi estancia de 5 meses y medio en la empresa, contribuí en la búsqueda de tecnologías frontend para la primera fase de Fleter (anteriormente Plug & Deliver). Además, desarrollé módulos con conexión a API REST para esta herramienta web y móvil, que facilita la gestión y localización de pedidos enviados por fletes.",
      en: "During my 5.5 months at the company, I contributed to researching frontend technologies for the first phase of Fleter (formerly Plug & Deliver). I also developed modules with REST API connections for this web and mobile tool that helps manage and track freight deliveries.",
    },
    reasonLeaving: {
      es: "Finalizó la primera fase del proyecto y mi contrato",
      en: "The first project phase and my contract ended",
    },
    workHere: false,
    typeWork: { es: "Remoto", en: "Remote" },
    links: [
      {
        id: 1,
        href: "https://www.onibex.com/content/39-plug-deliver",
        alt: { es: "Fleter / Plug & Develiver", en: "Fleter / Plug & Deliver" },
      },
    ],
  },
  {
    id: 6,
    startDate: { es: "02/06/2021", en: "06/02/2021" },
    endDate: { es: "14/01/2022", en: "01/14/2022" },
    title: { es: "Desarrollador JavaScript", en: "JavaScript Developer" },
    company: { es: "Softwareland", en: "Softwareland" },
    description: {
      es: "Me encargué del desarrollo y mantenimiento del CRM, incluyendo la creación de nuevas funcionalidades y un 'Coming soon' para RS Viajes. Proporcioné soporte técnico y desarrollé nuevas características para los CRM y sitios web de varios clientes de la empresa",
      en: "I was in charge of CRM development and maintenance, including new features and a 'Coming Soon' page for RS Viajes. Provided tech support and developed new features for various client CRMs and websites.",
    },
    reasonLeaving: {
      es: "Me trasladé a una nueva empresa por una oferta laboral más atractiva económicamente.",
      en: "I moved to a new company for a more attractive job offer.",
    },
    workHere: false,
    typeWork: { es: "Híbrido", en: "Hybrid" },
    links: [
      {
        id: 1,
        href: "https://rsviajes.com/",
        alt: { es: "RS Viajes", en: "RS Viajes" },
      },
    ],
  },
  {
    id: 7,
    startDate: { es: "22/07/2020", en: "07/22/2020" },
    endDate: { es: "14/05/2021", en: "05/14/2021" },
    title: {
      es: "Desarrollador y Programador Web",
      en: "Web Developer and Programmer",
    },
    company: {
      es: "Rompopes y Bebidas Mexicanas (ROBEMEX)",
      en: "Rompopes y Bebidas Mexicanas (ROBEMEX)",
    },
    description: {
      es: "Creé y mantuve sitios web de marcas propias, brindando soporte técnico a los colaboradores.",
      en: "Created and maintained websites for in-house brands, providing technical support to staff.",
    },
    reasonLeaving: {
      es: "Finalización del contrato",
      en: "Contract completion",
    },
    workHere: false,
    typeWork: { es: "Híbrido", en: "Hybrid" },
    links: [
      {
        id: 1,
        href: "https://rompopecarmelita.com/",
        alt: { es: "Rompope Carmelita", en: "Rompope Carmelita" },
      },
      {
        id: 2,
        href: "https://robemex.com/",
        alt: { es: "ROBEMEX", en: "ROBEMEX" },
      },
    ],
  },
  {
    id: 8,
    startDate: { es: "16/04/2020", en: "04/16/2020" },
    endDate: { es: "16/06/2020", en: "06/16/2020" },
    title: {
      es: "Docente en Lenguaje de Programación Python",
      en: "Python Programming Language Instructor",
    },
    company: { es: "LatCode", en: "LatCode" },
    description: {
      es: "Impartí clases de Python en YouTube para trainees en la industria 4.0.",
      en: "Taught Python classes on YouTube for trainees in Industry 4.0.",
    },
    reasonLeaving: {
      es: "El proyecto concluyó inesperadamente sin clarificación.",
      en: "The project ended unexpectedly without clarification.",
    },
    workHere: false,
    typeWork: { es: "Remoto", en: "Remote" },
  },
  {
    id: 9,
    startDate: { es: "06/05/2019", en: "05/06/2019" },
    endDate: { es: "31/07/2019", en: "07/31/2019" },
    title: {
      es: "Desarrollador y Programador Web (practicante)",
      en: "Web Developer and Programmer (Intern)",
    },
    company: {
      es: "rNet - Soluciones informáticas",
      en: "rNet - IT Solutions",
    },
    description: {
      es: "Como practicante, realicé mantenimiento, creación y rediseño de sitios web para clientes.",
      en: "As an intern, I performed maintenance, created, and redesigned websites for clients.",
    },
    reasonLeaving: {
      es: "Dejé mi posición para realizar mi servicio social en el SAT.",
      en: "I left the position to complete my social service at the SAT.",
    },
    workHere: false,
    typeWork: { es: "En oficina", en: "On-site" },
    links: [
      {
        id: 1,
        href: "http://www.gagsa.mx/",
        alt: { es: "GAGSA", en: "GAGSA" },
      },
      {
        id: 2,
        href: "https://www.comoplast.com.mx/",
        alt: { es: "COMOPLAST", en: "COMOPLAST" },
      },
    ],
  },
  {
    id: 10,
    startDate: { es: "05/01/2019", en: "01/05/2019" },
    endDate: { es: "28/03/2019", en: "03/28/2019" },
    title: {
      es: "Desarrollador y Programador Web (practicante)",
      en: "Web Developer and Programmer (Intern)",
    },
    company: {
      es: "Revista Tourista Vive México",
      en: "Revista Tourista Vive México",
    },
    description: {
      es: "Aprendí a diseñar sitios web mientras trabajaba como practicante para el cliente 'Mendoza's Restaurant'.",
      en: "I learned to design websites while interning for the client 'Mendoza's Restaurant'.",
    },
    reasonLeaving: {
      es: "Me mudé a una nueva empresa debido a una oferta laboral más atractiva económicamente, mientras continuaba mi práctica profesional.",
      en: "I moved to a new company for a better offer while continuing my internship.",
    },
    workHere: false,
    typeWork: { es: "En oficina", en: "On-site" },
    links: [
      {
        id: 1,
        href: "https://mendozasrestaurant.com/",
        alt: { es: "Mendozas Restaurant", en: "Mendozas Restaurant" },
      },
    ],
  },
]

export { workExperienceData }
