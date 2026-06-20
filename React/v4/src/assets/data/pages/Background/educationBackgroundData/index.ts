import type { EducationDataInterface } from "@/common/interfaces";
export const educationBackgroundData: EducationDataInterface[] = [
  {
    educationId: 1,
    educationType: { bootcamp: true },
    educationTypeName: { es: "Curso", en: "Bootcamp" },
    educationBuildingName: { es: "Escuela Pública de Código (EPC)", en: "Escuela Pública de Código (EPC)" },
    educationStartDate: { es: "30/05/2025", en: "05/30/2025" },
    educationFinishDate: { es: "26/06/2025", en: "06/26/2025" },
    educationCourseName: { es: "Fundamentos de Desarrollo de Software", en: "Fundamentals of Software Development" },
    educationStatus: { es: "Finalizado", en: "Completed" },
    educationStatusCompleted: true,
    educationMode: { es: 'Remoto', en: 'Remote' },
    educationDescription: { es: "Introducción al desarrollo de software: programación, estructuras de datos, algoritmos y más. Ideal para principiantes.", en: "Introduction to software development: programming, data structures, algorithms, and more. Ideal for beginners." },
    educationLinks: [{ id: 1, href: "https://www.epc.gob.mx/jovenes/fundamentos-de-desarrollo-de-software/", name: { es: "Escuela Pública de Código (EPC)", en: "Escuela Pública de Código (EPC)" } }]
  },
  {
    educationId: 2,
    educationType: { bootcamp: true },
    educationTypeName: { es: "Curso", en: "Bootcamp" },
    educationBuildingName: { es: "ACADEMLO", en: "ACADEMLO" },
    educationStartDate: { es: "01/03/2021", en: "03/01/2021" },
    educationFinishDate: { es: "01/02/2022", en: "02/01/2022" },
    educationCourseName: { es: "Fundamentos de Desarrollo de Software", en: "Fundamentals of Software Development" },
    educationStatus: { es: "Finalizado", en: "Completed" },
    educationStatusCompleted: true,
    educationMode: { es: 'Remoto', en: 'Remote' },
    educationDescription: { es: "Un bootcamp integral que cubre tanto el desarrollo web full-stack como conceptos clave de ciencias de la computación.", en: "A comprehensive bootcamp covering both full-stack web development and key concepts of computer science." },
    educationLinks: [{ id: 1, href: "https://www.academlo.com/curso-programacion-web-full-stack", name: { es: "ACADEMLO", en: "ACADEMLO" } }]
  },
  {
    educationId: 3,
    educationType: { bootcamp: true },
    educationTypeName: { es: "Curso", en: "Bootcamp" },
    educationBuildingName: { es: "TzuzulCode", en: "TzuzulCode" },
    educationStartDate: { es: "01/11/2021", en: "11/01/2021" },
    educationFinishDate: { es: "01/02/2022", en: "02/01/2022" },
    educationCourseName: { es: "Desarrollador NodeJS y Frontend", en: "NodeJS and Frontend Developer" },
    educationStatus: { es: "Finalizado", en: "Completed" },
    educationStatusCompleted: true,
    educationMode: { es: 'Remoto', en: 'Remote' },
    educationDescription: { es: "Un bootcamp enfocado en el desarrollo de aplicaciones utilizando Node.js y tecnologías frontend.", en: "A bootcamp focused on application development using Node.js and frontend technologies." },
    educationLinks: [{ id: 1, href: "https://www.youtube.com/tzuzulcode", name: { es: "TzuzulCode", en: "TzuzulCode" } }]
  },
  {
    educationId: 4,
    educationType: { university: true },
    educationTypeName: { es: "Universidad", en: "University" },
    educationBuildingName: { es: "Universidad Vasco de Quiroga (UVAQ)", en: "Vasco de Quiroga University (UVAQ)" },
    educationStartDate: { es: "08/08/2016", en: "08/08/2016" },
    educationFinishDate: { es: "10/12/2020", en: "12/10/2020" },
    educationCourseName: { es: "Ing. en Sistemas Computacionales", en: "Computer Systems Engineering." },
    educationStatus: { es: "Finalizado", en: "Completed" },
    educationStatusCompleted: true,
    educationMode: { es: 'Presencial', en: 'On site' },
    educationDescription: { es: "Actividades y grupos: Apoyo en el desarrollo de una aplicación de donación de sangre. Planeación de una aplicación de registro de horarios. Apoyo en el desarrollo del aplicativo para el departamento EmprendeUVAQ de la Universidad Vasco de Quiroga. Desarrollo de aplicativo para restaurantes basado en SaaS", en: "Activities and Societies: Support in the development of a blood donation app. Planning a time tracking app. Support in the development of an app for the Emprende UVAQ department at Vasco de Quiroga University. Development of a SaaS-based restaurant app." },
    educationLinks: [{ id: 1, href: "https://www.uvaq.edu.mx/ing-en-sistemas/", name: { es: "Universidad Vasco de Quiroga (UVAQ)", en: "Vasco de Quiroga University (UVAQ)" } }]
  },
]