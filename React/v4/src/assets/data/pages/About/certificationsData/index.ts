// Datos de ejemplo para cursos y certificaciones

import type { certificationsDataInterface } from "@/common/interfaces/";
import { PiStudent } from "react-icons/pi";
// (puedes importarlos desde otro archivo si lo prefieres)
export const certificationsData: certificationsDataInterface[] = [
    {
        certificationsId: 1,
        certificationsTitle: { es: 'Programador en C#', en: 'C# Developer' },
        certificationsBuildingName: { es: 'Fundación Carlos Slim', en: 'Fundación Carlos Slim' },
        certificationsStartDate: { es: '23/12/2019', en: '12/23/2019' },
        certificationsFinishDate: { es: '01/01/2020', en: '01/01/2020' },
        certificationsType: { es: 'Curso', en: 'Course' },
        certificationsPdfUrl: 'assets/certifications/b1b1c0cd-0a3c-4e2d-b3d4-0e27e63290bc_certificado.pdf',
        certificationsIcon: PiStudent
    },
    {
        certificationsId: 2,
        certificationsTitle: { es: 'Introducción a la programación', en: 'Introduction to Programming' },
        certificationsBuildingName: { es: 'Fundación Carlos Slim', en: 'Fundación Carlos Slim' },
        certificationsStartDate: { es: '25/12/2019', en: '12/25/2019' },
        certificationsFinishDate: { es: '25/12/2019', en: '12/25/2019' },
        certificationsType: { es: 'Curso', en: 'Course' },
        certificationsPdfUrl: 'assets/certifications/b1fc140c-4b48-4978-91c6-81e733222d45_certificado.pdf',
        certificationsIcon: PiStudent
    },
    {
        certificationsId: 3,
        certificationsTitle: { es: 'Cómputo básico', en: 'Basic computer skills' },
        certificationsBuildingName: { es: 'Fundación Carlos Slim', en: 'Fundación Carlos Slim' },
        certificationsStartDate: { es: '29/12/2019', en: '12/29/2019' },
        certificationsFinishDate: { es: '01/01/2020', en: '01/01/2020' },
        certificationsType: { es: 'Curso', en: 'Course' },
        certificationsPdfUrl: 'assets/certifications/44fe2aed-6829-4726-8bbe-52b33174f89c_certificado.pdf',
        certificationsIcon: PiStudent
    },
    {
        certificationsId: 4,
        certificationsTitle: { es: 'Prácticas de ofimática', en: 'Office Skills Practicum' },
        certificationsBuildingName: { es: 'Fundación Carlos Slim', en: 'Fundación Carlos Slim' },
        certificationsStartDate: { es: '01/01/2020', en: '01/01/2020' },
        certificationsFinishDate: { es: '07/01/2020', en: '01/07/2020' },
        certificationsType: { es: 'Curso', en: 'Course' },
        certificationsPdfUrl: 'assets/certifications/6a4c14ed-a9b4-4317-b57e-0ff676700e46_certificado.pdf',
        certificationsIcon: PiStudent
    },
    {
        certificationsId: 5,
        certificationsTitle: { es: 'JavaScript 2020: Curso desde Principiante hasta Profesional (JavaScript Full- Curso desde Principiante hasta Profesional)', en: 'JavaScript 2020: Course from Beginner to Professional (JavaScript Full - Course from Beginner to Professional)' },
        certificationsBuildingName: { es: 'Grover Vásquez - Udemy', en: 'Grover Vásquez - Udemy' },
        certificationsStartDate: { es: '16/05/2020', en: '05/16/2020' },
        certificationsFinishDate: { es: '29/06/2020', en: '06/29/2020' },
        certificationsType: { es: 'Curso', en: 'Course' },
        certificationsPdfUrl: 'assets/certifications/UC-5a9dc067-8dd6-440a-b9de-05cf75dc91c7.pdf',
        certificationsIcon: PiStudent
    },
    {
        certificationsId: 6,
        certificationsTitle: { es: 'JavaScript Curso Gratis 2020', en: 'Free JavaScript Course 2020' },
        certificationsBuildingName: { es: 'Elio Marcano - Udemy', en: 'Elio Marcano - Udemy' },
        certificationsStartDate: { es: '19/03/2020', en: '03/19/2020' },
        certificationsFinishDate: { es: '19/03/2020', en: '03/19/2020' },
        certificationsType: { es: 'Curso', en: 'Course' },
        certificationsPdfUrl: 'assets/certifications/UC-09846913-b334-404a-9f8f-38babc647603.pdf',
        certificationsIcon: PiStudent
    },
    {
        certificationsId: 7,
        certificationsTitle: { es: 'Aprende a programar usando JavaScript - Curso en español', en: 'Learn to program using JavaScript - Course in Spanish' },
        certificationsBuildingName: { es: 'Rick Lennie - Udemy', en: 'Rick Lennie - Udemy' },
        certificationsStartDate: { es: '20/03/2020', en: '03/20/2020' },
        certificationsFinishDate: { es: '29/03/2020', en: '03/29/2020' },
        certificationsType: { es: 'Curso', en: 'Course' },
        certificationsPdfUrl: 'assets/certifications/UC-65d5606f-6055-4216-8461-5168ca1846f6.pdf',
        certificationsIcon: PiStudent
    },
];