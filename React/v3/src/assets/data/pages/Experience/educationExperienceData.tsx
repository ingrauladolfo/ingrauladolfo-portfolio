import type { Education } from "../../../../common/interfaces/data/pages/Experience";

const educationExperienceData: Education[] = [
  {
    id: 1,
    startDate: { es: "08/08/2016", en: "08/08/2016" },
    finishDate: { es: "10/12/2020", en: "12/10/2020" },
    status: {
      es: "Pasante (Graduado)",
      en: "Graduate"
    },
    title: {
      es: "Ingeniería en Sistemas Computacionales",
      en: "Computer Systems Engineering"
    },
    bootcamp: false,
    type: {
      es: "Universidad",
      en: "University"
    },
    name: {
      es: "Universidad Vasco de Quiroga campus Santa María (Morelia)",
      en: "Vasco de Quiroga University Santa María Campus (Morelia)"
    },
    links: [
      {
        id: 1,
        href: "https://www.uvaq.edu.mx/ing-en-sistemas/",
        name: {
          es: "UVAQ",
          en: "UVAQ"
        }
      }
    ]
  },
  {
    id: 2,
    startDate: { es: "01/11/2021", en: "11/01/2021" },
    finishDate: { es: "01/02/2022", en: "02/01/2022" },
    title: {
      es: "Desarrollador NodeJS y Frontend",
      en: "NodeJS and Frontend Developer"
    },
    name: {
      es: "TzuzulCode",
      en: "TzuzulCode"
    },
    bootcamp: true,
    type: {
      es: "Bootcamp",
      en: "Bootcamp"
    },
    links: [
      {
        id: 1,
        href: "https://tzuzulcode.com",
        name: {
          es: "TzuzulCode",
          en: "TzuzulCode"
        }
      }
    ]
  },
  {
    id: 3,
    startDate: { es: "01/03/2021", en: "03/01/2021" },
    finishDate: { es: "01/02/2022", en: "02/01/2022" },
    title: {
      es: "Desarrollo Web Full-Stack y Ciencias de la Computación",
      en: "Full-Stack Web Development and Computer Science"
    },
    name: {
      es: "ACADEMLO",
      en: "ACADEMLO"
    },
    bootcamp: true,
    type: {
      es: "Bootcamp",
      en: "Bootcamp"
    },
    links: [
      {
        id: 1,
        href: "https://www.academlo.com/curso-programacion-web-full-stack",
        name: {
          es: "ACADEMLO",
          en: "ACADEMLO"
        }
      }
    ]
  }
];

export { educationExperienceData };
