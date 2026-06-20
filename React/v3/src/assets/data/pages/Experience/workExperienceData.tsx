import type { Work } from "../../../../common/interfaces/data/pages/Experience";

const workExperienceData: Work[] = [
  {
    workId: 1,
    workDateRange: { startDate: { es: "05/01/2019", en: "01/05/2019" } },
    workPositionRole: { company: { es: "Desarrollador y Programador Freelance, y Fundador", en: "Freelance Developer and Programmer, and Founder" } },
    workCompanyName: { es: "Easy Software Design México", en: "Easy Software Design México" },
    workDescription: { es: "Como freelancer, lidero un equipo de desarrolladores web mientras busco nuevos proyectos.", en: "As a freelancer, I lead a team of web developers while seeking new projects." },
    workHere: true,
    workMode: { freelancer: { es: "Remoto", en: "Remote" } },
    workLinks: []
  },
  {
    workId: 2,
    workDateRange: { company: { startDate: { es: "23/08/2024", en: "08/23/2022" }, finishDate: { es: "16/05/2025", en: "05/16/2025" } } },
    workPositionRole: { company: { es: "Desarrollador de nuevas tecnologías", en: "New Technologies Developer" } },
    workCompanyName: { company: { es: "Grupo Salinas - Contrato directo", en: "Grupo Salinas - Contrato directo" } },
    workDescription: { company: { es: "Encargado de mantener proyectos como CoinPro y Elektravales; también de la creación del proyecto llamado Tienda de Monedas, se hizo el portal web que es el configurador de la app móvil.", en: "In charge of maintaining projects like CoinPro and Elektravales; also developed the 'Tienda de Monedas' project, creating the web portal for configuring the mobile app." } },
    workReasonLeaving: { es: "Culminación de contrato", en: "Contract completion" },
    workHere: false,
    workMode: { company: { es: "Remoto", en: "Remote" } },
    workLinks: [{ company: [{ id: 1, href: "https://tienda-monedas-dev.admin-proyectocoinpro.com:80/portal-configuracion/", name: { es: "Tienda de Monedas", en: "Tienda de Monedas" } }, { id: 2, href: "https://portal.elektravales.com.mx/", name: { es: "Elektra Vales", en: "Elektra Vales" } }, { id: 3, href: "https://coin-pro.com.mx/", name: { es: "Coin Pro", en: "Coin Pro" } }] }]
  },

  {
    workId: 3,
    workDateRange: { company: { startDate: { es: "23/09/2022", en: "09/23/2022" }, finishDate: { es: "16/04/2025", en: "04/16/2025" } } },
    workPositionRole: { company: { es: "Consultor .Net", en: ".Net Consultant" } },
    workCompanyName: { company: { es: "Teia Consultoría", en: "Teia Consultoría" } },
    workDescription: { company: { es: "Mantenimiento de proyectos relacionados con declaraciones anuales de personas, tanto físicas como morales, acorde a las modificaciones que el cliente mencione; además de tomar cursos para la obtención de certificaciones en Azure y DataBricks.", en: "Maintenance of projects related to annual declarations of individuals and businesses, according to client updates; also participated in Azure and Databricks certification training.", } },
    workReasonLeaving: { es: "Culminación de contrato", en: "Contract completion" },
    workHere: false,
    workMode: { company: { es: "Remoto", en: "Remote" } },
  },

  {
    workId: 4,
    workDateRange: { company: { startDate: { es: "09/08/2022", en: "08/09/2022" }, finishDate: { es: "16/08/2022", en: "08/16/2022" } } },
    workPositionRole: { company: { es: "Desarrollador React / Desarrollador .Net", en: "React Developer / .Net Developer" } },
    workCompanyName: { company: { es: "Promo Espacio (Grupo Salinas) - Asignado por THTech como consultor", en: "Promo Espacio (Grupo Salinas) - Assigned by THTech as a consultant" } },
    workDescription: { company: { es: "Desarrollé el módulo 'Bitácora' para exportar a Excel los spots y anuncios realizados durante el mes para diversos clientes y sus sucursales.", en: "Developed the 'Bitácora' module to export to Excel the monthly spots and ads for various clients and their branches." } },
    workReasonLeaving: { es: "El proyecto fue cancelado por falta de presupuesto", en: "The project was canceled due to lack of budget" },
    workHere: false,
    workMode: { company: { es: "En oficina", en: "On-site" } },
    workLinks: [{ company: [{ id: 1, href: "https://promoespacio.com.mx/sac/Login_local2.asp", name: { es: "Promo Espacio", en: "Promo Espacio" } }] }]
  },
  {
    workId: 5,
    workDateRange: { company: { startDate: { es: "11/01/2022", en: "01/11/2022" }, finishDate: { es: "30/06/2022", en: "06/30/2022" } } },
    workPositionRole: { company: { es: "Desarrollador React", en: "React Developer" } },
    workCompanyName: { company: { es: "ONIBEX", en: "ONIBEX" } },
    workDescription: { company: { es: "Durante mi estancia de 5 meses y medio en la empresa, contribuí en la búsqueda de tecnologías frontend para la primera fase de Fleter (anteriormente Plug & Deliver). Además, desarrollé módulos con conexión a API REST para esta herramienta web y móvil, que facilita la gestión y localización de pedidos enviados por fletes.", en: "During my 5.5 months at the company, I contributed to researching frontend technologies for the first phase of Fleter (formerly Plug & Deliver). I also developed modules with REST API connections for this web and mobile tool that helps manage and track freight deliveries." } },
    workReasonLeaving: { es: "Finalizó la primera fase del proyecto y mi contrato", en: "The first project phase and my contract ended" },
    workHere: false,
    workMode: { company: { es: "Remoto", en: "Remote" } },
    workLinks: [{ company: [{ id: 1, href: "https://www.onibex.com/content/39-plug-deliver", name: { es: "Fleter / Plug & Develiver", en: "Fleter / Plug & Deliver" }, }] }]
  },
  {
    workId: 6,
    workDateRange: { company: { startDate: { es: "01/10/2021", en: "10/01/2021" }, finishDate: { es: "01/01/2022", en: "01/01/2022" } } },
    workPositionRole: { company: { es: "Ingeniero de software", en: "Software engineer" } },
    workCompanyName: { company: { es: "Hobbio Inc.", en: "Hobbio Inc." } },
    workDescription: { company: { es: "Encargado de desarrollar nuevos módulos y funcionalidades a la web Fenicia; además de dar mantenimiento a la aplicación administrativa web de Sport City", en: "Responsible for developing new modules and features for the Fenicia website; as well as maintaining the Sport City web administrative application." } },
    workReasonLeaving: { es: "Encontré nueva posibilidad de proyecto económico", en: "I found a new possibility for an economic project." },
    workHere: false,
    workMode: { company: { es: "Remoto", en: "Remote" } },
    workLinks: [{ company: [{ id: 1, href: "https://hobbio.co/", name: { es: "Fenicia", en: "Fenicia" }, }] }]
  },
  {
    workId: 7,
    workDateRange: { company: { startDate: { es: "01/10/2021", en: "10/01/2021" }, finishDate: { es: "27/10/2022", en: "10/27/2022" } } },
    workPositionRole: { company: { es: "Practicante de desarrollador web", en: "Web Developer Intern" } },
    workCompanyName: { company: { es: "Cantera Digital", en: "Cantera Digital" } },
    workDescription: { company: { es: "Encargado de desarrollar nuevas funcionalidades, tanto frontend como backend, así como mantenimiento del CRM para una empresa de agencia de viajes.", en: "Responsible for developing new features, both front-end and back-end, as well as maintaining the CRM for a travel agency." } },
    workReasonLeaving: { es: "Encontré nueva posibilidad de proyecto económico", en: "I found a new possibility for an economic project." },
    workHere: false,
    workMode: { company: { es: "Remoto", en: "Remote" } },
  },
  {
    workId: 8,
    workDateRange: { company: { startDate: { es: "02/06/2021", en: "06/02/2021" }, finishDate: { es: "14/01/2022", en: "01/14/2022" } } },
    workPositionRole: { company: { es: "Desarrollador JavaScript", en: "JavaScript Developer" } },
    workCompanyName: { company: { es: "Softwareland", en: "Softwareland" } },
    workDescription: { company: { es: "Me encargué del desarrollo y mantenimiento del CRM, incluyendo la creación de nuevas funcionalidades y un 'Coming soon' para RS Viajes. Proporcioné soporte técnico y desarrollé nuevas características para los CRM y sitios web de varios clientes de la empresa", en: "I was in charge of CRM development and maintenance, including new features and a 'Coming Soon' page for RS Viajes. Provided tech support and developed new features for various client CRMs and websites." } },
    workReasonLeaving: { es: "Me trasladé a una nueva empresa por una oferta laboral más atractiva económicamente.", en: "I moved to a new company for a more attractive job offer." },
    workHere: false,
    workMode: { company: { es: "Híbrido (pandemia) / Presencial (post-pandemia)", en: "Hybrid (pandemic) / On site (post-pandemic)" } },
    workLinks: [{ company: [{ id: 1, href: "https://rsviajes.com/", name: { es: "RS Viajes", en: "RS Viajes" } }] }]
  },
  {
    workId: 9,
    workDateRange: { company: { startDate: { es: "22/07/2020", en: "07/22/2020" }, finishDate: { es: "14/05/2021", en: "05/14/2021" } } },
    workPositionRole: { company: { es: "Desarrollador y Programador Web", en: "Web Developer and Programmer" } },
    workCompanyName: { company: { es: "Rompopes y Bebidas Mexicanas (ROBEMEX)", en: "Rompopes y Bebidas Mexicanas (ROBEMEX)" } },
    workDescription: { company: { es: "Creé y mantuve sitios web de marcas propias, brindando soporte técnico a los colaboradores.", en: "Created and maintained websites for in-house brands, providing technical support to staff." } },
    workReasonLeaving: { es: "Finalización del contrato", en: "Contract completion" },
    workHere: false,
    workMode: { company: { es: "Híbrido", en: "Hybrid" } },
    workLinks: [{ company: [{ id: 1, href: "https://rompopecarmelita.com/", name: { es: "Rompope Carmelita", en: "Rompope Carmelita" } }, { id: 2, href: "https://robemex.com/", name: { es: "ROBEMEX", en: "ROBEMEX" } }] }]
  },
  {
    workId: 10,
    workDateRange: { company: { startDate: { es: "16/04/2020", en: "04/16/2020" }, finishDate: { es: "16/06/2020", en: "06/16/2020" } } },
    workPositionRole: { company: { es: "Docente en Lenguaje de Programación Python", en: "Python Programming Language Instructor" } },
    workCompanyName: { company: { es: "LatCode", en: "LatCode" } },
    workDescription: { company: { es: "Impartí clases de Python en YouTube para trainees en la industria 4.0.", en: "Taught Python classes on YouTube for trainees in Industry 4.0." } },
    workReasonLeaving: { es: "El proyecto concluyó inesperadamente sin clarificación.", en: "The project ended unexpectedly without clarification." },
    workHere: false,
    workMode: { company: { es: "Remoto", en: "Remote" } },
  },
  {
    workId: 11,
    workDateRange: { company: { startDate: { es: "22/07/2020", en: "07/22/2020" }, finishDate: { es: "14/05/2021", en: "05/14/2021" } } },
    workPositionRole: { company: { es: "Desarrollador y Programador Web", en: "Web Developer and Programmer" } },
    workCompanyName: { company: { es: "Rompopes y Bebidas Mexicanas (ROBEMEX)", en: "Rompopes y Bebidas Mexicanas (ROBEMEX)" } },
    workDescription: { company: { es: "Creé y mantuve sitios web de marcas propias, brindando soporte técnico a los colaboradores.", en: "Created and maintained websites for in-house brands, providing technical support to staff." } },
    workReasonLeaving: { es: "Finalización del contrato", en: "Contract completion" },
    workHere: false,
    workMode: { company: { es: "Híbrido", en: "Hybrid" } },
    workLinks: [{ company: [{ id: 1, href: "https://rompopecarmelita.com/", name: { es: "Rompope Carmelita", en: "Rompope Carmelita" } }, { id: 2, href: "https://robemex.com/", name: { es: "ROBEMEX", en: "ROBEMEX" } }] }]
  },
  {
    workId: 12,
    workDateRange: { company: { startDate: { es: "16/04/2020", en: "04/16/2020" }, finishDate: { es: "16/06/2020", en: "06/16/2020" } } },
    workPositionRole: { company: { es: "Docente en Lenguaje de Programación Python", en: "Python Programming Language Instructor" } },
    workCompanyName: { company: { es: "LatCode", en: "LatCode" } },
    workDescription: { company: { es: "Impartí clases de Python en YouTube para trainees en la industria 4.0.", en: "Taught Python classes on YouTube for trainees in Industry 4.0." } },
    workReasonLeaving: { es: "El proyecto concluyó inesperadamente sin clarificación.", en: "The project ended unexpectedly without clarification." },
    workHere: false,
    workMode: { company: { es: "Remoto", en: "Remote" } },
  },
  {
    workId: 13,
    workDateRange: { company: { startDate: { es: "06/05/2019", en: "05/06/2019" }, finishDate: { es: "31/07/2019", en: "07/31/2019" } } },
    workPositionRole: { company: { es: "Desarrollador y Programador Web (practicante)", en: "Web Developer and Programmer (Intern)" } },
    workCompanyName: { company: { es: "rNet - Soluciones informáticas", en: "rNet - IT Solutions" } },
    workDescription: { company: { es: "Como practicante, realicé mantenimiento, creación y rediseño de sitios web para clientes.", en: "As an intern, I performed maintenance, created, and redesigned websites for clients." } },
    workReasonLeaving: { es: "Dejé mi posición para realizar mi servicio social en el SAT.", en: "I left the position to complete my social service at the SAT." },
    workHere: false,
    workMode: { company: { es: "En oficina", en: "On-site" } },
    workLinks: [{ company: [{ id: 1, href: "http://www.gagsa.mx/", name: { es: "GAGSA", en: "GAGSA" } }, { id: 2, href: "https://www.comoplast.com.mx/", name: { es: "COMOPLAST", en: "COMOPLAST" } }] }]
  },
  {
    workId: 14,
    workDateRange: { company: {  startDate: { es: "05/01/2019", en: "01/05/2019" },    finishDate: { es: "28/03/2019", en: "03/28/2019" } } },
    workPositionRole: { company: { es: "Desarrollador y Programador Web (practicante)",      en: "Web Developer and Programmer (Intern)" } },
    workCompanyName: { company: { es: "Revista Tourista Vive México",      en: "Revista Tourista Vive México" } },
    workDescription: { company: { es: "Como practicante, realicé mantenimiento, creación y rediseño de sitios web para clientes.", en: "As an intern, I performed maintenance, created, and redesigned websites for clients." } },
    workReasonLeaving: {es: "Aprendí a diseñar sitios web mientras trabajaba como practicante para el cliente 'Mendoza's Restaurant'.",en: "I learned to design websites while interning for the client 'Mendoza's Restaurant'." },
    workHere: false,
    workMode: { company: { es: "En oficina", en: "On-site" } },
    workLinks: [{ company: [{ id: 1, href: "http://www.gagsa.mx/", name: { es: "GAGSA", en: "GAGSA" } }, { id: 2, href: "https://www.comoplast.com.mx/", name: { es: "COMOPLAST", en: "COMOPLAST" } }] }]
  },

];

export default workExperienceData;
