export const languages = {
  es: "🇲🇽",
  en: "🇺🇸",
};

export const defaultLang = "es";
const currentYear = new Date().getFullYear();
export const ui = {
  es: {
    "layout.title":
      "Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web con más de 5 años de Experiencia",
    "layout.description":
      "Contrata a Raúl Adolfo Torres Vargas para crear tu aplicación web o móvil. Desarrollador Web, Fundador de ESDMX. Especializado en crear aplicaciones únicas.",
    "nav.home": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Acerca",
    "nav.stack": "Stack",
    "hero.badge": "Disponible para trabajar",
    "hero.title": "Hey, soy Rulo",
    "hero.bio": ` +5 años de experiencia. <strong
      >Desarrollador de Software y fundador de ESDMX</strong
    > originario de Lázaro Cárdenas Michoacán 🇲🇽 . Especializado en el desarrollo
    de aplicaciones web únicas con JavaScript como Frontend.`,
    "hero.mail": "Contáctame",
    "hero.linkedin": "Mi LinkedIn",
    "hero.github": "Mi GitHub",
    "hero.cv": "CV",
    "exp.title": "Trayectoria y Estudios",
    "projects.title": "Proyectos",
    "stack.title": "Mi stack",
    "about.title": "Sobre mí",
    "about.bio": `<p>
      Me llamo Raúl Adolfo Torres Vargas, pero mis amigos y conocidos me dicen
      Rulo aunque algunas personas me han llamado Adolfo. Empecé en el mundo de
      la programación como a los 15 años por allá del 2009 con una desktop HP 🖥️
      y lo empecé por curiosidad. Actualmente estoy como <strong>
        fundador y director de Easy Software Design México, además de ser
        Consultor TI 💻</strong
      >.
    </p>

    <p>
      Algunos de mis éxitos incluyen <strong
        >Colaborar en la creación desde cero de una web app llamada
        <cursive>
          <a
            href="https://www.fleter.io/"
            target="_blank"
            class="text-yellow-800 dark:text-green-500 text-2xl">Fleter</a
          ></cursive>

        por la empresa <cursive
          ><a
            href="https://www.onibex.com/"
            target="_blank"
            class="text-yellow-800 dark:text-green-500 text-2xl mx-[-7px]"
          >
            Onibex</a
          >
        </cursive>
      </strong>. Aunque fue por un periodo de 6 a 7 meses bajo contrato, me
      llevo muchos aprendizajes 😢
    </p>

    <p>
      Como Desarrollador <strong
        >Empecé a laborar en las empresas desde principios o mediados de 2019,
        mi primera empresa fue <cursive
          ><a
            href="https://www.facebook.com/touristamorelia"
            target="_blank"
            class="text-yellow-800 dark:text-green-500 text-2xl"
            >Tourista Vive México</a
          ></cursive
        > haciendo una especie de <em
          class="italic text-yellow-800 dark:text-green-500 text-lg"
          >"Becario"</em
        >
      </strong>. Mi objetivo es ser constante cada día en la mejora de mi
      persona y de mi entorno laborar, ya que soy una persona 100% dedicada en
      lo que hace, hasta a veces se me olvida comer 😆 .
    </p>
    <p>
      Estoy entusiasmado con la oportunidad de contribuir con mi experiencia y
      pasión al éxito de tu equipo o empresa. Espero con ansias la posibilidad
      de colaborar juntos en proyectos futuros. ¡Gracias por tomarte el tiempo
      de conocerme!
    </p>`,
    "footer.rights": `© ${currentYear}
      <a href="https://github.com/ingrauladolfo" class="hover:underline">ingrauladolfo</a>.
      Todos los derechos reservados. <br /> Diseño inspirado en <a
        href="https://porfolio.dev"
        target="_blank"
        class="text-yellow-800 dark:text-green-500 text-2xl"
        >porfolio.dev by midudev</a
      >`,
    exp: [
      {
        startDate: "23/09/2022",
        title: "Consultor y desarrollador Microsoft",
        company: "Teia Consultoría",
        description:
          "Actualmente me dedico al mantenimiento de proyectos de declaraciones anuales para personas físicas y morales, así como a la obtención de certificaciones en varias tecnologías de Microsoft mediante cursos especializados.",
        workHere: true,
      },
      {
        startDate: "05/01/2019",
        title: "Desarrollador y Programador Freelance, y Fundador",
        company: "Easy Software Design México",
        description:
          "Como freelancer, lidero un equipo de desarrolladores web mientras busco nuevos proyectos.",
        workHere: true,
      },
      {
        startDate: "09/08/2022",
        finishDate: "16/08/2022",
        title: "Desarrollador React",
        company: "Promo Espacio (externo traído por THTech)",
        description:
          "Desarrollé el módulo 'Bitácora' para exportar a Excel los spots y anuncios realizados durante el mes para diversos clientes y sus sucursales.",
        reasonLeaving: "el proyecto fue cancelado por falta de presupuesto",
        workHere: false,
        link: "https://promoespacio.com.mx/sac/Login_local2.asp",
      },
      {
        startDate: "11/01/2022",
        finishDate: "30/06/2022",
        title: "Desarrollador React",
        company: "ONIBEX",
        description:
          "Durante mi estancia de 5 meses y medio en la empresa, contribuí en la búsqueda de tecnologías frontend para la primera fase de Fleter (anteriormente Plug & Deliver). Además, desarrollé módulos con conexión a API REST para esta herramienta web y móvil, que facilita la gestión y localización de pedidos enviados por fletes.",
        reasonLeaving: "Finalizó la primera fase del proyecto y mi contrato",
        workHere: false,
        link: "https://www.fleter.io/",
      },
      {
        startDate: "02/06/2021",
        finishDate: "14/01/2022",
        title: "Desarrollador JavaScript",
        company: "Softwareland",
        description:
          "Me encargué del desarrollo y mantenimiento del CRM, incluyendo la creación de nuevas funcionalidades y un 'Coming soon' para RS Viajes. Proporcioné soporte técnico y desarrollé nuevas características para los CRM y sitios web de varios clientes de la empresa",
        reasonLeaving:
          "Me trasladé a una nueva empresa por una oferta laboral más atractiva económicamente.",
        workHere: false,
        link: "https://rsviajes.com/",
      },
      {
        startDate: "22/07/2020 ",
        finishDate: "14/05/2021",
        title: "Desarrollador y Programador Web",
        company: "Rompopes y Bebidas Mexicanas (ROBEMEX)",
        description:
          "Creé y mantuve sitios web de marcas propias, brindando soporte técnico a los colaboradores.",
        reasonLeaving: "Finalización del contrato",
        workHere: false,
        link: "https://rompopecarmelita.com/",
        link2: "https://robemex.com/",
      },
      {
        startDate: "16/04/2020",
        finishDate: "16/junio/2020",
        title: "Docente en Lenguaje de Programación Python",
        company: "LatCode",
        description:
          "Impartí clases de Python en YouTube para trainees en la industria 4.0.",
        reasonLeaving:
          "El proyecto concluyó inesperadamente sin clarificación.",
        workHere: false,
      },
      {
        startDate: "06/05/2019",
        finishDate: "31/07/2019",
        title: "Desarrollador y Programador Web (practicante)",
        company: "rNet - Soluciones informáticas",
        description:
          "Como practicante, realicé mantenimiento, creación y rediseño de sitios web para clientes.",
        reasonLeaving:
          "Dejé mi posición para realizar mi servicio social en el Servicio de Administración Tributaria (SAT).",
        workHere: false,
        link: "http://www.gagsa.mx/",
        link2: "https://www.comoplast.com.mx/",
      },
      {
        startDate: "05/01/2019",
        finishDate: "28/03/2019",
        title: "Desarrollador y Programador Web (practicante)",
        company: "Revista Tourista Vive México",
        description:
          "Aprendí a diseñar sitios web mientras trabajaba como practicante para el cliente 'Mendoza's Restaurant'.",
        reasonLeaving:
          "Me mudé a una nueva empresa debido a una oferta laboral más atractiva económicamente, mientras continuaba mi práctica profesional.",
        workHere: false,
        link: "https://mendozasrestaurant.com/",
      },
    ],
    st: [
      {
        startDate: "01/11/2021",
        finishDate: "01/02/2022",
        title: "Desarrollador NodeJS y Frontend",
        name: "TzuzulCode",
        bootcamp: true,
        type: "Bootcamp",
        link: "https://tzuzulcode.com",
      },
      {
        startDate: "01/03/2021",
        finishDate: "01/02/2022",
        title: "Desarrollo Web Full-Stack y Ciencias de la Computación",
        name: "ACADEMLO",
        bootcamp: true,
        type: "Bootcamp",
        link: "https://www.academlo.com/curso-programacion-web-full-stack",
      },
      {
        startDate: "08/08/2016",
        finishDate: "10/12/2020",
        status: "Pasante (Graduado)",
        title: "Ingeniería en Sistemas Computacionales",
        bootcamp: false,
        type: "Universidad",
        name: "Universidad Vasco de Quiroga campus Santa María (Morelia)",
        link: "https://www.uvaq.edu.mx/ciencias-exactas-e-ingenierias/ing-en-sistemas-y-seguridad-informatica/",
      },
    ],
    projects: [
      {
        title: "Grupo Aznar - Sitio web oficial",
        description:
          "Explora nuestro último proyecto para Grupo Aznar: un sitio web desarrollado en React/Vite y styled-components. Con sede en la Ciudad de México, Grupo Aznar es un grupo dedicado a crear soluciones a la medida dependiendo de las necesidades confió en nosotros para una experiencia digital personalizada. ¡Descubre cómo podemos hacer lo mismo por ti!",
        yearOfDeveloped: "Se desarrolló el 06 de Marzo del 2024",
        image: "/projects/freelancerESDMX/grupoAznar.webp",
        imageAlt: "Grupo Aznar - Sitio web oficial",
        tags: ["react", "vite", "styledComponents"],
        github: "https://github.com/ingrauladolfo/grupoaznar-official-website",
        link: "https://grupoaznar.vercel.app/",
      },
      {
        title: "Jazmín Creaciones - Sitio web oficial",
        description:
          "Explora el sitio web oficial de Jazmín Creaciones, una empresa en Morelia, Michoacán, especializada en amigurumis únicos. Descubre nuestra colección artesanal y tecnológica, desarrollada con React/Vite y styled-components",
        yearOfDeveloped: "Se desarrolló el 23 de Noviembre de 2023",
        image: "/projects/freelancerESDMX/jazminCreaciones-oficial.webp",
        imageAlt: "Jazmín Creaciones - Sitio web oficial",
        tags: ["react", "vite", "styledComponents"],
        github:
          "https://github.com/ingrauladolfo/jazmin-creaciones-landingpage",
        link: "https://jazmin-creaciones.vercel.app/",
      },
      {
        title: "Comprobador de recibos de luz de la CFE",
        description:
          "Explora el proyecto de Julio César Mumenthey Fuentes: un sitio web innovador para simular el registro de un recibo de luz domiciliado. Destaca por su funcionalidad única de verificación automática según la fecha actual y cambios de color del medidor. Desarrollado con tecnologías modernas como React/Vite y styled-components.",
        yearOfDeveloped: "Se desarrolló el 29 de Septiembre de 2023",
        image: "/projects/freelancerESDMX/comprobadorCFE.webp",
        imageAlt: "Comprobador de recibos de luz de la CFE",
        tags: ["react", "vite", "styledComponents"],
        github: "https://github.com/ingrauladolfo/comprobador-cfe-jcmf",
        link: "https://comprobador-cfe-jcmf.vercel.app",
      },
      {
        title: "Bloopers sitio oficial - Tatich Studio",
        description:
          "Explora Bloopers, el sitio web de 'Desenlace Films' creado por Tatitch Studio. Sumérgete en el mundo de una serie de títeres independiente filmada en México, en fase de postproducción. Desarrollado con HTML, CSS y JavaScript, Bloopers te ofrece una ventana al emocionante universo de 'Desenlace Films'.",
        yearOfDeveloped: "Se desarrolló el 28 de Noviembre de 2020",
        image: "/projects/freelancerESDMX/bloopers.webp",
        imageAlt: "Bloopers sitio oficial - Tatich Studio",
        tags: ["html", "css", "javascript"],
        github: "https://github.com/ingrauladolfo/comprobador-cfe-jcmf",
        link: "https://bloopers-finalversion.netlify.app",
      },
      {
        title: "Gagsa - Sitio web oficial",
        description:
          "¡Explora el sitio web de Gagsa Constructora, donde la excelencia es nuestra norma! Descubre nuestra pasión por la innovación en nuestro sitio desarrollado con HTML, CSS, JavaScript y Bootstrap. Somos tu ventana a soluciones de construcción de vanguardia. ¡Haz realidad tus proyectos con nuestro enfoque centrado en el cliente y la calidad!",
        yearOfDeveloped: "Se desarrolló el 30 de Noviembre de 2020",
        image: "/projects/empresas/rNet/gagsa.webp",
        imageAlt: "Gagsa - Sitio web oficial",
        tags: ["html", "css", "javascript", "bootstrap"],
        github: "https://github.com/ingrauladolfo/gagsa-rNet",
        link: "https://gagsa-originalv.netlify.app/",
      },
    ],
  },
  en: {
    "layout.title": `Portfolio of I.S.C. Raúl Adolfo Torres Vargas | Web Developer and Programmer with more than 5 years of Experience`,
    "layout.description":
      "Hire Raúl Adolfo Torres Vargas to create your web or mobile application. Web Developer, Founder of ESDMX. Specialized in creating unique applications.",
    "nav.home": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.stack": "Stack",
    "hero.badge": "Open to work",
    "hero.title": `Hey, I'm Rulo`,
    "hero.bio": `+5 years of experience. <strong
       >Software Developer and founder of ESDMX</strong
     > originally from Lázaro Cárdenas Michoacán 🇲🇽 . Specialized in development
     of unique web applications with JavaScript as Frontend.`,
    "hero.mail": "Contact me",
    "hero.linkedin": "My LinkedIn",
    "hero.github": "My GitHub",
    "hero.cv": "Resume",
    "exp.title": "Career and Studies",
    "projects.title": "Projects",
    "stack.title": "My stack",
    "about.title": "About me",
    "about.bio": `<p> My name is Raúl Adolfo Torres Vargas, but my friends and acquaintances call me Rulo although some people have called me Adolfo. I started in the world of programming at around 15 years old around 2009 with an HP desktop 🖥️ and I started it out of curiosity. I am currently the founder and director of Easy Software Design México, in addition to being an IT Consultant 💻</strong >. </p> <p> Some of my successes include <strong >Collaborating on the creation from scratch of a web app called <cursive> <a href="https://www.fleter.io/" target="_blank" class="text-yellow-800 dark:text-green-500 text-2xl">Fleter</a ></cursive > by the company <cursive ><a href="https://www.onibex.com/ " target="_blank" class="text-yellow-800 dark:text-green-500 text-2xl mx-[-7px]" > Onibex</a > </cursive> </strong>. Although it was for a period of 6 to 7 months under contract, I learned a lot 😢 </p> <p> As a Developer <strong>I started working in companies since early or mid-2019, my first company was <cursive> <a href="https://www.facebook.com/touristamorelia" target="_blank" class="text-yellow-800 dark:text-green-500 text-2xl" >Tourista Vive México</a></cursive> doing a kind of <em class="italic text-yellow-800 dark:text-green-500 text-lg" >"Intern"</em > </strong>. My goal is to be constant every day in improving myself and my work environment, since I am a person 100% dedicated to what I do, sometimes I even forget to eat 😆. </p> <p> I am excited about the opportunity to contribute my experience and passion to the success of your team or company. I look forward to collaborating together on future projects. Thank you for taking the time to get to know me! </p>`,
    "footer.rights": `© ${currentYear}
      <a href="https://github.com/ingrauladolfo" class="hover:underline">ingrauladolfo</a>.
       All rights reserved. <br /> Design inspired by <a
         href="https://portfolio.dev"
         target="_blank"
         class="text-yellow-800 dark:text-green-500 text-2xl"
         >portfolio.dev by midudev</a
       >`,
    exp: [
      {
        startDate: "09/23/2022",
        title: "Microsoft consultant and developer",
        company: "Teia Consultoría",
        description:
          "I am currently dedicated to maintaining annual declaration projects for individuals and companies, as well as obtaining certifications in various Microsoft technologies through specialized courses.",
        workHere: true,
      },
      {
        startDate: "01/05/2019",
        title: "Freelance Developer and Programmer, and Founder",
        company: "Easy Software Design México",
        description:
          "As a freelancer, I lead a team of web developers while looking for new projects.",
        workHere: true,
      },
      {
        startDate: "08/09/2022",
        finishDate: "08/16/2022",
        title: "React Developer",
        company: "Promo Espacio (external brought by THTech)",
        description:
          "I developed the 'Log' module to export to Excel the spots and announcements made during the month for various clients and their branches.",
        reasonLeaving: "the project was canceled due to lack of budget",
        workHere: false,
        link: "https://promoespacio.com.mx/sac/Login_local2.asp",
      },
      {
        startDate: "01/11/2022",
        finishDate: "06/30/2022",
        title: "React Developer",
        company: "ONIBEX",
        description:
          "During my 5 and a half month stay at the company, I contributed to the search for frontend technologies for the first phase of Fleter (previously Plug & Deliver). In addition, I developed modules with connection to REST API for this web and mobile tool, which facilitates the management and location of orders sent by freight.",
        reasonLeaving:
          "The first phase of the project and my contract have ended",
        workHere: false,
        link: "https://www.fleter.io/",
      },
      {
        startDate: "06/02/2021",
        finishDate: "01/14/2022",
        title: "JavaScript Developer",
        company: "Softwareland",
        description:
          "I was in charge of the development and maintenance of the CRM, including the creation of new functionalities and a 'Coming soon' for RS Viajes. I provided technical support and developed new features for the CRMs and websites of several clients of the company",
        reasonLeaving:
          "I moved to a new company for a more financially attractive job offer.",
        workHere: false,
        link: "https://rsviajes.com/",
      },
      {
        startDate: "07/22/2020",
        finishDate: "05/14/2021",
        title: "Web Developer and Programmer",
        company: "Rompopes y Bebidas Mexicanas (ROBEMEX)",
        description:
          "I created and maintained own brand websites, providing technical support to collaborators.",
        reasonLeaving: "End of contract",
        workHere: false,
        link: "https://rompopecarmelita.com/",
        link2: "https://robemex.com/",
      },
      {
        startDate: "04/16/2020",
        finishDate: "June 16, 2020",
        title: "Python Programming Language Teacher",
        company: "LatCode",
        description:
          "I taught Python classes on YouTube for trainees in industry 4.0.",
        reasonLeaving: "The project ended unexpectedly without clarification.",
        workHere: false,
      },
      {
        startDate: "05/06/2019",
        finishDate: "07/31/2019",
        title: "Web Developer and Programmer (intern)",
        company: "rNet - Soluciones Informáticas",
        description:
          "As an intern, I maintained, created and redesigned websites for clients.",
        reasonLeaving:
          "I left my position to perform my social service in the Tax Administration Service (SAT).",
        workHere: false,
        link: "http://www.gagsa.mx/",
        link2: "https://www.comoplast.com.mx/",
      },
      {
        startDate: "01/05/2019",
        finishDate: "03/28/2019",
        title: "Web Developer and Programmer (intern)",
        company: "Revista Touriste Vive México",
        description:
          "I learned how to design websites while working as an intern for the client 'Mendoza's Restaurant'.",
        reasonLeaving:
          "I moved to a new company due to a more financially attractive job offer, while continuing my professional practice.",
        workHere: false,
        link: "https://mendozasrestaurant.com/",
      },
    ],
    st: [
      {
        startDate: "01/11/2021",
        finishDate: "02/01/2022",
        title: "NodeJS and Frontend Developer",
        name: "TzuzulCode",
        bootcamp: true,
        type: "Bootcamp",
        link: "https://tzuzulcode.com",
      },
      {
        startDate: "01/03/2021",
        finishDate: "02/01/2022",
        title: "Full-Stack Web Development and Computer Science",
        name: "ACADEMLO",
        bootcamp: true,
        type: "Bootcamp",
        link: "https://www.academlo.com/curso-programacion-web-full-stack",
      },
      {
        startDate: "08/08/2016",
        finishDate: "10/12/2020",
        status: "Intern (Graduate)",
        title: "Computer Systems Engineering",
        bootcamp: false,
        type: "University",
        name: "Universidad Vasco de Quiroga campus Santa María (Morelia)",
        link: "https://www.uvaq.edu.mx/ciencias-exactas-e-ingenierias/ing-en-sistemas-y-seguro-informatica/",
      },
    ],
    projects: [
      {
        title: "Grupo Aznar - Official website",
        description:
          "Explore our latest project for Grupo Aznar: a website developed in React/Vite and styled-components. Based in Mexico City, Grupo Aznar is a group dedicated to creating tailored solutions depending on the needs. They trusted us to a personalized digital experience. Find out how we can do the same for you!",
        yearOfDeveloped: "Developed on March 6, 2024",
        image: "/projects/freelancerESDMX/grupoAznar.webp",
        imageAlt: "Grupo Aznar - Official website",
        tags: ["react", "vite", "styledComponents"],
        github: "https://github.com/ingrauladolfo/grupoaznar-official-website",
        link: "https://grupoaznar.vercel.app/",
      },
      {
        title: "Jazmín Creaciones - Official website",
        description:
          "Explore the official website of Jazmín Creaciones, a company in Morelia, Michoacán, specialized in unique amigurumis. Discover our artisanal and technological collection, developed with React/Vite and styled-components",
        yearOfDeveloped: "Developed on November 23, 2023",
        image: "/projects/freelancerESDMX/jazminCreaciones-oficial.webp",
        imageAlt: "Jazmín Creaciones - Official Website",
        tags: ["react", "vite", "styledComponents"],
        github:
          "https://github.com/ingrauladolfo/jazmin-creaciones-landingpage",
        link: "https://jazmin-creaciones.vercel.app/",
      },
      {
        title: "CFE electricity bill checker",
        description:
          "Explore the project of Julio César Mumenthey Fuentes: an innovative website to simulate the registration of a direct debit electricity bill. It stands out for its unique functionality of automatic verification according to the current date and meter color changes. Developed with modern technologies such as React /Vite and styled-components.",
        yearOfDeveloped: "Developed on September 29, 2023",
        image: "/projects/freelancerESDMX/comprobadorCFE.webp",
        imageAlt: "CFE electricity bill checker",
        tags: ["react", "vite", "styledComponents"],
        github: "https://github.com/ingrauladolfo/comprobador-cfe-jcmf",
        link: "https://comprobador-cfe-jcmf.vercel.app",
      },
      {
        title: "Bloopers official site - Tatich Studio",
        description:
          "Explore Bloopers, the 'Desenlace Films' website created by Tatitch Studio. Immerse yourself in the world of an independent puppet series filmed in Mexico, in post-production. Developed with HTML, CSS and JavaScript, Bloopers offers you a window to the exciting universe of 'Desenlace Films'.",
        yearOfDeveloped: "Developed on November 28, 2020",
        image: "/projects/freelancerESDMX/bloopers.webp",
        imageAlt: "Bloopers official site - Tatich Studio",
        tags: ["html", "css", "javascript"],
        github: "https://github.com/ingrauladolfo/comprobador-cfe-jcmf",
        link: "https://bloopers-finalversion.netlify.app",
      },
      {
        title: "Gagsa - Official Website",
        description:
          "Explore the Gagsa Constructora website, where excellence is our norm! Discover our passion for innovation on our site developed with HTML, CSS, JavaScript and Bootstrap. We are your window to cutting-edge construction solutions. Make your dreams come true projects with our customer- and quality-focused approach!",
        yearOfDeveloped: "Developed on November 30, 2020",
        image: "/projects/empresas/rNet/gagsa.webp",
        imageAlt: "Gagsa - Official Website",
        tags: ["html", "css", "javascript", "bootstrap"],
        github: "https://github.com/ingrauladolfo/gagsa-rNet",
        link: "https://gagsa-originalv.netlify.app/",
      },
    ],
  },
} as const;
