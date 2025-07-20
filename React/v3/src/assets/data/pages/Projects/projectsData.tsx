import type { Project } from "../../../../common/interfaces/data/pages/Projects";

const projectsData: Project[] = [
    {
        id: 1,
        title: { es: 'IMYS - Sitio Web oficial', en: 'IMYS - Official Website' },
        description: {
            es: "Explora nuestro último proyecto para Grupo IMYS: un sitio web desarrollado en Astro, TypeScript y CSS. Con sede en La Pedrera, Tamaulipas. Grupo Imys es una empresa comprometida con nuestros clientes, la cual ofrece servicios y materiales de calidad a un excelente precio.​¡Descubre cómo podemos hacer lo mismo por ti!",
            en: "Explore our latest project for Grupo IMYS: a website developed in Astro, TypeScript, and CSS. Based in La Pedrera, Tamaulipas, Grupo Imys is a company committed to our customers, offering quality services and materials at an excellent price. Discover how we can do the same for you!"
        },
        typeProject: 'Freelancer (ESDMX)',
        year: { es: '28/05/2024', en: '05/28/2024' },
        image: {
            cover: { href: 'img/projects/freelancerESDMX/IMYS/cover/imys-portada.webp', alt: "Imys - Sitio Web oficial" },
            images: [
                { id: 1, href: 'img/projects/freelancerESDMX/IMYS/images/IMYS-1.webp', alt: 'IMYS - Imagen 1' },
                { id: 2, href: 'img/projects/freelancerESDMX/IMYS/images/IMYS-2.webp', alt: 'IMYS - Imagen 2' },
                { id: 3, href: 'img/projects/freelancerESDMX/IMYS/images/IMYS-3.webp', alt: 'IMYS - Imagen 3' },
                { id: 4, href: 'img/projects/freelancerESDMX/IMYS/images/IMYS-4.webp', alt: 'IMYS - Imagen 4' }
            ]
        },
        tags: ["astro", "typeScript", "css"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/imys-official-website", website: "https://www.imys.mx/" },
            { id: 2, website: "https://imys.vercel.app/" }
        ]
    },
    {
        id: 2,
        title: { es: "Grupo Aznar - Sitio web oficial", en: "Grupo Aznar - Official Website" },
        description: {
            es: "Explora nuestro último proyecto para Grupo Aznar: un sitio web desarrollado en React/Vite y styled-components. Con sede en la Ciudad de México, Grupo Aznar es un grupo dedicado a crear soluciones a la medida dependiendo de las necesidades confió en nosotros para una experiencia digital personalizada. ¡Descubre cómo podemos hacer lo mismo por ti!",
            en: "Explore our latest project for Grupo Aznar: a website developed in React/Vite and styled-components. Based in Mexico City, Grupo Aznar is a group dedicated to creating customized solutions based on needs. They trusted us with a personalized digital experience. Discover how we can do the same for you!"
        },
        typeProject: 'Freelancer (ESDMX)',
        year: { es: '06/03/2024', en: '03/06/2024' },
        image: {
            cover: { href: 'img/projects/freelancerESDMX/grupoAznar/cover/grupoAznar-portada.webp', alt: "Imys - Sitio Web oficial" },
            images: [
                { id: 1, href: 'img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-1.webp', alt: 'grupoAznar - Imagen 1' },
                { id: 2, href: 'img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-2.webp', alt: 'grupoAznar - Imagen 2' },
                { id: 3, href: 'img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-3.webp', alt: 'grupoAznar - Imagen 3' },
                { id: 4, href: 'img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-4.webp', alt: 'grupoAznar - Imagen 4' },
                { id: 5, href: 'img/projects/freelancerESDMX/grupoAznar/images/grupoAznar-5.webp', alt: 'grupoAznar - Imagen 5' }
            ]
        },
        tags: ["react", "vite", "styledComponents"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/grupoaznar-official-website", website: "https://grupoaznar.mx" },
            { id: 2, website: "https://grupoaznar.vercel.app/" }
        ]
    },
    {
        id: 3,
        title: { es: 'Jazmín Creaciones - Sitio web oficial', en: 'Jazmín Creaciones - Official Website' },
        description: {
            es: "Explora el sitio web oficial de Jazmín Creaciones, una empresa en Morelia, Michoacán, especializada en amigurumis únicos. Descubre nuestra colección artesanal y tecnológica, desarrollada con React/Vite y styled-components",
            en: "Explore the official website of Jazmín Creaciones, a company in Morelia, Michoacán, specializing in unique amigurumis. Discover our handcrafted and technological collection, developed with React/Vite and styled-components."
        },
        typeProject: 'Freelancer (ESDMX)',
        year: { es: '23/11/2023', en: '11/23/2023' },
        image: {
            cover: { href: 'img/projects/freelancerESDMX/jazminCreaciones/cover/jazminCreaciones-oficial-portada.webp', alt: "Jazmín Creaciones - Sitio web oficial" },
            images: [
                { id: 1, href: 'img/projects/freelancerESDMX/jazminCreaciones/images/jazminCreaciones-1.webp', alt: 'Jazmin Creaciones - Imagen 1' },
                { id: 2, href: 'img/projects/freelancerESDMX/jazminCreaciones/images/jazminCreaciones-2.webp', alt: 'Jazmin Creaciones - Imagen 2' },
                { id: 3, href: 'img/projects/freelancerESDMX/jazminCreaciones/images/jazminCreaciones-3.webp', alt: 'Jazmin Creaciones - Imagen 3' },
                { id: 4, href: 'img/projects/freelancerESDMX/jazminCreaciones/images/jazminCreaciones-4.webp', alt: 'Jazmin Creaciones - Imagen 4' },
                { id: 5, href: 'img/projects/freelancerESDMX/jazminCreaciones/images/jazminCreaciones-5.webp', alt: 'Jazmin Creaciones - Imagen 5' }
            ]
        },
        tags: ["react", "vite", "styledComponents"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/jazmin-creaciones-landingpage", website: "https://jazmin-creaciones.vercel.app/" }
        ]
    },
    {
        id: 4,
        title: { es: "Comprobador de recibos de luz de la CFE", en: "CFE Electricity Bill Checker" },
        description: {
            es: "Explora el proyecto de Julio César Mumenthey Fuentes: un sitio web innovador para simular el registro de un recibo de luz domiciliado. Destaca por su funcionalidad única de verificación automática según la fecha actual y cambios de color del medidor. Desarrollado con tecnologías modernas como React/Vite y styled-components.",
            en: "Explore Julio César Mumenthey Fuentes's project: an innovative website for simulating the registration of a direct debit electricity bill. It stands out for its unique functionality of automatic verification based on the current date and meter color changes. Developed with modern technologies such as React/Vite and styled-components."
        },
        typeProject: 'Freelancer (ESDMX)',
        year: { es: '29/09/2023', en: '09/29/2023' },
        image: {
            cover: { href: 'img/projects/freelancerESDMX/JCMF/cover/JCMF-portada.webp', alt: "Julio César Mumenthey Fuentes - Sitio web oficial" },
            images: [
                { id: 1, href: 'img/projects/freelancerESDMX/JCMF/images/JCMF-1.webp', alt: 'JCMF - Imagen 1' },
                { id: 2, href: 'img/projects/freelancerESDMX/JCMF/images/JCMF-2.webp', alt: 'JCMF - Imagen 2' },
                { id: 3, href: 'img/projects/freelancerESDMX/JCMF/images/JCMF-3.webp', alt: 'JCMF - Imagen 3' }
            ]
        },
        tags: ["react", "vite", "styledComponents"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/comprobador-cfe-jcmf", website: "https://comprobador-cfe-jcmf.vercel.app" }
        ]
    },
    {
        id: 5,
        title: { es: "Bloopers - Sitio web oficial", en: "Bloopers - Official Website" },
        description: {
            es: "Explora Bloopers, el sitio web de 'Desenlace Films' creado por Tatitch Studio. Sumérgete en el mundo de una serie de títeres independiente filmada en México, en fase de postproducción. Desarrollado con HTML, CSS y JavaScript, Bloopers te ofrece una ventana al emocionante universo de 'Desenlace Films'.",
            en: "Explore Bloopers, the 'Desenlace Films' website created by Tatitch Studio. Immerse yourself in the world of an independent puppet series filmed in Mexico and currently in post-production. Developed with HTML, CSS, and JavaScript, Bloopers offers you a window into the exciting universe of 'Desenlace Films'."
        },
        typeProject: 'Empresa (Tatich Studio)',
        year: { es: '28/11/2020', en: '11/28/2020' },
        image: {
            cover: { href: 'img/projects/empresas/TatichStudio/cover/bloopers-portada.webp', alt: "Bloopers sitio oficial - Tatich Studio" },
            images: [
                { id: 1, href: 'img/projects/empresas/TatichStudio/images/bloopers-1.webp', alt: 'bloopers - Imagen 1' },
                { id: 2, href: 'img/projects/empresas/TatichStudio/images/bloopers-2.webp', alt: 'bloopers - Imagen 2' },
                { id: 3, href: 'img/projects/empresas/TatichStudio/images/bloopers-3.webp', alt: 'bloopers - Imagen 3' },
                { id: 4, href: 'img/projects/empresas/TatichStudio/images/bloopers-4.webp', alt: 'bloopers - Imagen 4' },
                { id: 5, href: 'img/projects/empresas/TatichStudio/images/bloopers-5.webp', alt: 'bloopers - Imagen 5' }
            ]
        },
        tags: ["html", "css", "javascript"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/bloopers-nativoWebv2", website: "https://blooperstiteres.com/" },
            { id: 2, website: 'https://bloopers-finalversion.netlify.app' }
        ]
    },
    {
        id: 6,
        title: { es: "Gagsa - Sitio web oficial", en: "Gagsa - Official Website" },
        description: {
            es: "¡Explora el sitio web de Gagsa Constructora, donde la excelencia es nuestra norma! Descubre nuestra pasión por la innovación en nuestro sitio desarrollado con HTML, CSS, JavaScript y Bootstrap. Somos tu ventana a soluciones de construcción de vanguardia. ¡Haz realidad tus proyectos con nuestro enfoque centrado en el cliente y la calidad!",
            en: "Explore the Gagsa Constructora website, where excellence is our standard! Discover our passion for innovation on our site developed with HTML, CSS, JavaScript, and Bootstrap. We are your window to cutting-edge construction solutions. Bring your projects to life with our customer-centric approach and quality!"
        },
        typeProject: 'Empresa (rNet)',
        year: { es: '30/11/2020', en: '11/30/2020' },
        image: {
            cover: { href: 'img/projects/empresas/rNet/cover/gagsa-portada.webp', alt: "Gagsa sitio oficial - rNet" },
            images: [
                { id: 1, href: 'img/projects/empresas/rNet/images/gagsa/gagsa-1.webp', alt: 'gagsa - Imagen 1' },
                { id: 2, href: 'img/projects/empresas/rNet/images/gagsa/gagsa-2.webp', alt: 'gagsa - Imagen 2' },
                { id: 3, href: 'img/projects/empresas/rNet/images/gagsa/gagsa-3.webp', alt: 'gagsa - Imagen 3' },
                { id: 4, href: 'img/projects/empresas/rNet/images/gagsa/gagsa-4.webp', alt: 'gagsa - Imagen 4' },
                { id: 5, href: 'img/projects/empresas/rNet/images/gagsa/gagsa-5.webp', alt: 'gagsa - Imagen 5' }
            ]
        },
        tags: ["html", "css", "javascript", "bootstrap"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/gagsa-rNet", website: "http://www.gagsa.mx/" },
            { id: 2, website: 'https://gagsa-originalv.netlify.app/' }
        ]
    },
    {
        id: 7,
        title: { es: "COMOPLAST - Sitio web oficial", en: "COMOPLAST - Official Website" },
        description: {
            es: "¡Explora el sitio web de Comercializadora Moreliana de Plástico (COMOPLAST), donde la excelencia es nuestra norma! Descubre nuestra pasión por la innovación en nuestro sitio desarrollado con HTML, CSS, JavaScript y Bootstrap. Somos tu ventana a soluciones de la distribución de resinas plásticas. ¡Haz realidad tus proyectos con nuestro enfoque centrado en el cliente y la calidad!",
            en: "Explore the Comercializadora Moreliana de Plástico (COMOPLAST) website, where excellence is our standard! Discover our passion for innovation on our site developed with HTML, CSS, JavaScript, and Bootstrap. We are your window to solutions for plastic resin distribution. Bring your projects to life with our customer-centric approach and quality!"
        },
        typeProject: 'Empresa (rNet)',
        year: { es: '19/12/2020', en: '12/19/2020' },
        image: {
            cover: { href: 'img/projects/empresas/rNet/cover/comoplast-portada.webp', alt: "COMOPLAST sitio oficial - rNet" },
            images: [
                { id: 1, href: 'img/projects/empresas/rNet/images/comoplast/comoplast-1.webp', alt: 'comoplast - Imagen 1' },
                { id: 2, href: 'img/projects/empresas/rNet/images/comoplast/comoplast-2.webp', alt: 'comoplast - Imagen 2' },
                { id: 3, href: 'img/projects/empresas/rNet/images/comoplast/comoplast-3.webp', alt: 'comoplast - Imagen 3' },
                { id: 4, href: 'img/projects/empresas/rNet/images/comoplast/comoplast-4.webp', alt: 'comoplast - Imagen 4' },
                { id: 5, href: 'img/projects/empresas/rNet/images/comoplast/comoplast-5.webp', alt: 'comoplast - Imagen 5' },
                { id: 6, href: 'img/projects/empresas/rNet/images/comoplast/comoplast-6.webp', alt: 'comoplast - Imagen 6' }
            ]
        },
        tags: ["html", "css", "javascript", "bootstrap"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/comoplast-rNet", website: "https://www.comoplast.com.mx/" },
            { id: 2, website: 'https://comoplast.vercel.app/' }
        ]
    },
    {
        id: 8,
        title: { es: "ROBEMEX - Sitio web oficial", en: "ROBEMEX - Official Website" },
        description: {
            es: "¡Explora el sitio web de ROBEMEX, donde la excelencia es nuestra norma! Descubre nuestra pasión por la innovación en nuestro sitio desarrollado con Angular, Bootstrap, Bulma. Somos tu ventana a soluciones de rompopes y bebidas. ¡Haz realidad tus proyectos con nuestro enfoque centrado en el cliente y la calidad!",
            en: "Explore the ROBEMEX website, where excellence is our standard! Discover our passion for innovation on our site developed with Angular, Bootstrap, and Bulma. We're your window to eggnog and beverage solutions. Bring your projects to life with our customer-centric approach and quality!"
        },
        typeProject: 'Empresa (ROBEMEX)',
        year: { es: '02/12/2021', en: '12/02/2021' },
        image: {
            cover: { href: 'img/projects/empresas/TatichStudio/cover/bloopers-portada.webp', alt: "ROBEMEX sitio oficial - Tatich Studio" },
            images: [
                { id: 1, href: 'img/projects/empresas/TatichStudio/images/bloopers-1.webp', alt: 'bloopers - Imagen 1' },
                { id: 2, href: 'img/projects/empresas/TatichStudio/images/bloopers-2.webp', alt: 'bloopers - Imagen 2' },
                { id: 3, href: 'img/projects/empresas/TatichStudio/images/bloopers-3.webp', alt: 'bloopers - Imagen 3' },
                { id: 4, href: 'img/projects/empresas/TatichStudio/images/bloopers-4.webp', alt: 'bloopers - Imagen 4' },
                { id: 5, href: 'img/projects/empresas/TatichStudio/images/bloopers-5.webp', alt: 'bloopers - Imagen 5' }
            ]
        },
        tags: ["angular", "bulma", "bootstrap"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/robemex-webAngular", website: "http://www.robemex.com/" }
        ]
    },
    {
        id: 9,
        title: { es: "Rompope Carmelita - Sitio web oficial", en: "Rompope Carmelita - Official Website" },
        description: {
            es: "¡Explora el sitio web de Rompope Carmelita, donde la excelencia es nuestra norma! Descubre nuestra pasión por la innovación en nuestro sitio desarrollado con Angular, Bootstrap, Bulma. Somos tu ventana a soluciones de rompopes y bebidas. ¡Haz realidad tus proyectos con nuestro enfoque centrado en el cliente y la calidad!",
            en: "Explore the Rompope Carmelita website, where excellence is our standard! Discover our passion for innovation on our site developed with Angular, Bootstrap, and Bulma. We're your window to eggnog and beverage solutions. Bring your projects to life with our customer-centric approach and quality!"
        },
        typeProject: 'Empresa (ROBEMEX)',
        year: { es: '02/12/2021', en: '12/02/2021' },
        image: {
            cover: { href: 'img/projects/empresas/TatichStudio/cover/bloopers-portada.webp', alt: "Rompope Carmelita sitio oficial" },
            images: [
                { id: 1, href: 'img/projects/empresas/TatichStudio/images/bloopers-1.webp', alt: 'bloopers - Imagen 1' },
                { id: 2, href: 'img/projects/empresas/TatichStudio/images/bloopers-2.webp', alt: 'bloopers - Imagen 2' },
                { id: 3, href: 'img/projects/empresas/TatichStudio/images/bloopers-3.webp', alt: 'bloopers - Imagen 3' },
                { id: 4, href: 'img/projects/empresas/TatichStudio/images/bloopers-4.webp', alt: 'bloopers - Imagen 4' },
                { id: 5, href: 'img/projects/empresas/TatichStudio/images/bloopers-5.webp', alt: 'bloopers - Imagen 5' }
            ]
        },
        tags: ["angular", "bulma", "bootstrap"],
        links: [
            { id: 1, github: "https://github.com/ingrauladolfo/rompopeCarmelitaSpanish-angularWeb-v4", website: "http://www.rompopecarmelita.com/" }
        ]
    }
];

export { projectsData };
