import type { AboutSection } from "../../../../common/interfaces/data/pages/About";

const aboutSectionData = (linkColor: string,
  strongColor: string): AboutSection[] => {

  return [
    {
      id: 1,
      title: {
        es: "¿Quién soy?",
        en: "Who am I?",
      },
      image: {
        href: '/img/about/about.webp',
        alt: {
          es: 'Foto de perfil de I.S.C. Raúl Adolfo Torres Vargas',
          en: 'Profile picture of I.S.C. Raúl Adolfo Torres Vargas'
        }
      },
      content: {
        es: (
          <p>
            Me llamo Raúl Adolfo Torres Vargas, pero mis amigos y conocidos me dicen
            Rulo aunque algunas personas me han llamado Adolfo. Empecé en el mundo de
            la programación como a los 15 años por allá del 2009 con una desktop HP 🖥️
            y lo empecé por curiosidad. Actualmente estoy como <strong className={strongColor}>
              fundador y director de Easy Software Design México, además de haber trabajado como
              Desarrollador de Nuevas Tecnologías en <a href="https://www.gruposalinas.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} text-2xl font-[cursive]`}              >
                Grupo Salinas
              </a>  💻
            </strong>.
          </p>
        ),
        en: (
          <p>
            My name is Raúl Adolfo Torres Vargas, but my friends and acquaintances call me Rulo, although some people have called me Adolfo. I started in the world of programming when I was around 15 years old, back in 2009, with an HP desktop 🖥️, and I started out of curiosity. Currently, I’m  the  <strong className={strongColor}>
              founder and director of Easy Software Design México, and I’ve also worked as a New Technologies Developer at <a href="https://www.gruposalinas.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} text-2xl font-[cursive]`}>
                Grupo Salinas
              </a> 💻
            </strong>.
          </p>

        ),
      },
    },
    {
      id: 2,
      title: {
        es: "Proyectos destacados",
        en: "Featured Projects",
      },
      image: {
        href: '/img/projects/projects.webp',
        alt: {
          es: 'Foto de perfil de I.S.C. Raúl Adolfo Torres Vargas',
          en: 'Profile picture of I.S.C. Raúl Adolfo Torres Vargas'
        }
      },
      content: {
        es: (
          <>
            <p>
              Participé en la creación de la app web{' '}
              Tienda de Monedas que es un portafolio de monedas personalizadas acorde a los proveedores que tenga asociado el Grupo {' '}
              para la empresa{' '}
              <a
                href="https://www.gruposalinas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkColor} underline`}
              >
                Grupo Salinas
              </a>.
              Mi participación en el proyecto fue de 4 meses y medio, aunque estuve en más proyectos en el Grupo Salinas, ese fue el que me dejó grandes aprendizajes 😢.
            </p>
            <p>
              Participé en la creación de la app web{' '}
              <a
                href="https://www.onibex.com/content/39-plug-deliver"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkColor} underline`}
              >
                Fleter/Plug & Deliver
              </a>{' '}
              una webapp enfocada en centralizar la información de logística y envíos. Una solución de entrega de extremo a extremo que permite a las empresas centralizar y optimizar su información logística para la empresa{' '}
              <a
                href="https://www.onibex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkColor} underline`}
              >
                Onibex
              </a>.
              Fue una colaboración de 6 a 7 meses bajo contrato, que me dejó grandes aprendizajes 😢.
            </p>
          </>
        ),
        en: (
          <>
            <p>
              I participated in the creation of the web app{' '}
              Tienda de Monedas, which is a portfolio of custom coins tailored to the suppliers associated with{' '}
              <a
                href="https://www.gruposalinas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkColor} underline`}
              >
                Grupo Salinas
              </a>.
              My involvement in the project lasted four and a half months. Although I worked on other projects within Grupo Salinas, this one gave me the most valuable lessons 😢.
            </p>
            <p>
              I also contributed to the development of the web app{' '}
              <a
                href="https://www.onibex.com/content/39-plug-deliver"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkColor} underline`}
              >
                Fleter / Plug & Deliver
              </a>,{' '}
              a webapp focused on centralizing logistics and shipment information.
              It’s an end-to-end delivery solution that enables companies to centralize and optimize their logistics data, developed for{' '}
              <a
                href="https://www.onibex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkColor} underline`}
              >
                Onibex
              </a>.
              It was a 6- to 7-month collaboration under contract that taught me a lot 😢.
            </p>

          </>
        ),
      },
    },
    {
      id: 3,
      title: {
        es: "Mis comienzos",
        en: "My early days",
      },

      image: {
        href: '/img/about/early-days.webp',
        alt: {
          es: 'Mis comienzos',
          en: 'My early days'
        }
      },
      content: {
        es: (
          <p>
            Mi primera experiencia fue en{' '}
            <a
              href="https://www.facebook.com/touristamorelia"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkColor} underline`}
            >
              Tourista Vive México
            </a>{' '}
            en 2019, como un{' '}
            <em className={`${linkColor} italic text-base`}>
              “becario con hambre de aprender”
            </em>.
          </p>
        ),
        en: (
          <p>
            My first experience was at{' '}
            <a
              href="https://www.facebook.com/touristamorelia"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkColor} underline`}
            >
              Tourista Vive México
            </a>{' '}
            in 2019, as an{' '}
            <em className={`${linkColor} italic text-base`}>
              “intern hungry to learn”
            </em>.
          </p>
        ),
      },
    },
    {
      id: 4,
      title: {
        es: "Motivación",
        en: "Motivation",
      },
      image: {
        href: '/img/about/motivations.webp',
        alt: {
          es: '',
          en: ''
        }
      },
      content: {
        es: (
          <>
            <p>
              Soy una persona muy comprometida, tanto que a veces se me olvida comer 😆.
              Busco siempre mejorar en lo personal y lo profesional.
            </p>
            <p>
              Me entusiasma la oportunidad de colaborar en proyectos de valor.
              ¡Gracias por tomarte el tiempo de conocerme!
            </p>
          </>
        ),
        en: (
          <>
            <p>
              I’m a very committed person—so much that I sometimes forget to eat 😆.
              I always strive to improve personally and professionally.
            </p>
            <p>
              I’m excited about opportunities to collaborate on meaningful projects.
              Thank you for taking the time to get to know me!
            </p>
          </>
        ),
      },
    },
  ];
};

export { aboutSectionData };
