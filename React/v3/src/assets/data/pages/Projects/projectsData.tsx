import type { Projects } from "../../../../common/interfaces/data/pages/Projects";

const projectsData: Projects[] = [
  {
    projectId: 1,
    projectTitle: { es: "IMYS (Sitio Web oficial)", en: "IMYS (Official Website)" },
    projectCategory: { es: 'Proyecto Freelancer', en: 'Freelancer project' },
    projectDescription: { es: "Descubre nuestro último proyecto para Grupo IMYS: un sitio web moderno y eficiente desarrollado con Astro, TypeScript y CSS. Con sede en La Pedrera, Tamaulipas, Grupo IMYS se dedica a ofrecer materiales y servicios de alta calidad a precios competitivos. Conoce cómo nuestras soluciones digitales pueden potenciar tu negocio, al igual que lo hicimos con ellos.", en: "Explore our latest project for Grupo IMYS: a modern and efficient website developed with Astro, TypeScript, and CSS. Based in La Pedrera, Tamaulipas, Grupo IMYS is dedicated to offering high-quality materials and services at competitive prices. Learn how our digital solutions can empower your business, just like we did for them" },
    projectDevYear: { es: "28/05/2024", en: "05/28/2024" },
    projectImages: { projectImageFront: { projectImageFrontHref: "img/projects/freelancerESDMX/IMYS/cover/imys-portada.webp", projectImageFrontAlt: { es: "IMYS (Sitio Web oficial)", en: "IMYS (Official Website)" } }, projectImagesBack: [{ projectImagesBackId: 1, projectImagesBackHref: "img/projects/freelancerESDMX/IMYS/images/IMYS-1.webp", projectImagesBackAlt: { es: "IMYS (Sitio Web oficial) - Imagen 1", en: "IMYS (Official Website) - Image 1" } }, { projectImagesBackId: 2, projectImagesBackHref: "img/projects/freelancerESDMX/IMYS/images/IMYS-2.webp", projectImagesBackAlt: { es: "IMYS (Sitio Web oficial) - Imagen 2", en: "IMYS (Official Website) - Image 2" } }, { projectImagesBackId: 3, projectImagesBackHref: "img/projects/freelancerESDMX/IMYS/images/IMYS-3.webp", projectImagesBackAlt: { es: "IMYS (Sitio Web oficial) - Imagen 3", en: "IMYS (Official Website) - Image 3" } }, { projectImagesBackId: 4, projectImagesBackHref: "img/projects/freelancerESDMX/IMYS/images/IMYS-4.webp", projectImagesBackAlt: { es: "IMYS (Sitio Web oficial) - Imagen 4", en: "IMYS (Official Website) - Image 4" } }] },
    projectTechStack: ["astro", "typeScript", "css"],
    projectsURL: [{ projectsURLId: 1, projectsURLGithubRepo: "https://github.com/ingrauladolfo/imys-official-website", projectsURLWebsiteDeploy: "https://www.imys.mx/" }, { projectsURLId: 2, projectsURLWebsiteDeploy: "https://imys.vercel.app/" }]
  },
  {
    projectId:2 ,
    projectTitle: { es: "Grupo Aznar (Sitio Web oficial)", en: "Grupo Aznar (Official Website)" },
    projectCategory: { es: 'Proyecto Freelancer', en: 'Freelancer project' },
    projectDescription: { es: "Descubre nuestro proyecto más reciente para Grupo Aznar: un sitio web desarrollado con React, Vite y Styled-Components. Grupo Aznar, con sede en la Ciudad de México, ofrece soluciones digitales personalizadas que se ajustan a las necesidades específicas de cada cliente. ¡Déjanos mostrarte cómo podemos crear una experiencia digital única para ti también!", en: "Discover our latest project for Grupo Aznar: a website developed with React, Vite, and Styled-Components. Grupo Aznar, based in Mexico City, offers customized digital solutions tailored to the specific needs of each client. Let us show you how we can create a unique digital experience for you as well!" },
    projectDevYear: { es: "06/03/2024", en: "03/06/2024" },
    projectImages: {
      projectImageFront: {
        projectImageFrontHref: "img/projects/freelancerESDMX/grupoAznar/cover/grupoAznar-portada.webp",
        projectImageFrontAlt: {es: "Grupo Aznar (Sitio Web oficial)", en: "Grupo Aznar (Official Website)" }
      },
      projectImagesBack: [
        { projectImagesBackId: 1, projectImagesBackHref: "img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-1.webp", projectImagesBackAlt: {es:"Grupo Aznar (Sitio Web oficial) - Imagen 1", en:'Grupo Aznar (Official Website) - Image 1'} },
        { projectImagesBackId: 2, projectImagesBackHref: "img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-2.webp", projectImagesBackAlt: {es:"Grupo Aznar (Sitio Web oficial) - Imagen 2", en:'Grupo Aznar (Official Website) - Image 2'} },
        { projectImagesBackId: 3, projectImagesBackHref: "img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-3.webp", projectImagesBackAlt: {es:"Grupo Aznar (Sitio Web oficial) - Imagen 3", en:'Grupo Aznar (Official Website) - Image 3'}},
        { projectImagesBackId: 4, projectImagesBackHref: "img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-4.webp", projectImagesBackAlt: {es:"Grupo Aznar (Sitio Web oficial) - Imagen 4", en:'Grupo Aznar (Official Website) - Image 4'} },
        { projectImagesBackId: 5, projectImagesBackHref: "img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-5.webp", projectImagesBackAlt: {es:"Grupo Aznar (Sitio Web oficial) - Imagen 5", en:'Grupo Aznar (Official Website) - Image 5'} },
      ],

     },
    projectTechStack: ["react", "vite", "styledComponents"],
    projectsURL: [{ projectsURLId: 1, projectsURLGithubRepo: "https://github.com/ingrauladolfo/imys-official-website", projectsURLWebsiteDeploy: "https://www.imys.mx/" }, { projectsURLId: 2, projectsURLWebsiteDeploy: "https://imys.vercel.app/" }]
  },
]
export { projectsData };
