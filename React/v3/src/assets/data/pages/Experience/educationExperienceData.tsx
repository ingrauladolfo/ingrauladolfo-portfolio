import type { Education } from '../../../../common/interfaces/data/pages/Experience';

const educationExperienceData: Education[] = [
  {
    educationId: 1,
    educationType: { university: true },
    educationTypeTitle: { university: { es: "Universidad", en: "University" } },
    educationDateRange: { university: { startDate: { es: "08/08/2016", en: "08/08/2016" }, finishDate: { es: "10/12/2020", en: "12/10/2020" } } },
    educationName: { university: { es: "Universidad Vasco de Quiroga campus Santa María (Morelia)", en: "Vasco de Quiroga University Santa María Campus (Morelia)" } },
    educationCourseName: { university: { es: "Ing. en Sistemas Computacionales", en: "Computer Systems Eng." } },
    educationStatus: { university: { es: "Pasante o Graduado", en: "Intern or graduate" } },
    educationDescription: { university: { es: "Actividades y grupos: Apoyo en el desarrollo de una aplicación de donación de sangre. Planeación de una aplicación de registro de horarios. Apoyo en el desarrollo del aplicativo para el departamento EmprendeUVAQ de la Universidad Vasco de Quiroga. Desarrollo de aplicativo para restaurantes basado en SaaS", en: "Activities and Societies: Support in the development of a blood donation app. Planning a time tracking app. Support in the development of an app for the Emprende UVAQ department at Vasco de Quiroga University. Development of a SaaS-based restaurant app." } },
    educationLinks: { university: [{ id: 1, href: "https://www.uvaq.edu.mx/ing-en-sistemas/", name: { es: "Universidad Vasco de Quiroga (UVAQ)", en: "Vasco de Quiroga University (UVAQ)" } }] }
  },
  {
    educationId: 2,
    educationType: { bootcamp: true },
    educationTypeTitle: { bootcamp: { es: "Bootcamp", en: "Bootcamp" } },
    educationDateRange: { bootcamp: { startDate: { es: "01/11/2021", en: "11/01/2021" }, finishDate: { es: "01/02/2022", en: "02/01/2022" } } },
    educationName: { bootcamp: { es: "TzuzulCode", en: "TzuzulCode" } },
    educationCourseName: { bootcamp: { es: "Desarrollador NodeJS y Frontend", en: "NodeJS and Frontend Developer" } },
    educationStatus: { bootcamp: { es: "Finalizado", en: "Completed" } },
    educationDescription: { bootcamp: { es: "Un bootcamp enfocado en el desarrollo de aplicaciones utilizando Node.js y tecnologías frontend.", en: "A bootcamp focused on application development using Node.js and frontend technologies." } },
    educationLinks: { bootcamp: [{ id: 1, href: "https://tzuzulcode.com", name: { es: "TzuzulCode", en: "TzuzulCode" } }] }
  },
  {
    educationId: 3,
    educationType: { bootcamp: true },
    educationTypeTitle: { bootcamp: { es: "Bootcamp", en: "Bootcamp" } },
    educationDateRange: { bootcamp: { startDate: { es: "01/03/2021", en: "03/01/2021" }, finishDate: { es: "01/02/2022", en: "02/01/2022" } } },
    educationName: { bootcamp: { es: "ACADEMLO", en: "ACADEMLO" } },
    educationCourseName: { bootcamp: { es: "Desarrollo Web Full-Stack y Ciencias de la Computación", en: "Full-Stack Web Development and Computer Science" } },
    educationStatus: { bootcamp: { es: "Finalizado", en: "Completed" } },
    educationDescription: { bootcamp: { es: "Un bootcamp integral que cubre tanto el desarrollo web full-stack como conceptos clave de ciencias de la computación.", en: "A comprehensive bootcamp covering both full-stack web development and key concepts of computer science." } },
    educationLinks: { bootcamp: [{ id: 1, href: "https://www.academlo.com/curso-programacion-web-full-stack", name: { es: "ACADEMLO", en: "ACADEMLO" } }] }
  }
];

export default educationExperienceData;
