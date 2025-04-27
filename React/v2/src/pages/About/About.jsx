import React from 'react';
import { FaUserCheck } from 'react-icons/fa';

const About = () => {
  const personalImageAlt = "I.S.C. Raúl Adolfo Torres Vargas";

  return (
    <section className='py-20 w-full mx-auto lg:w-[740px] pb-32'>
      <h2
        class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"
      >
        <FaUserCheck className='size-7' />
        Sobre mí
      </h2>
      <article className="max-w-svh overflow-x-hidden overflow-y-hidden  mx-auto flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 md:flex-row">
        <div className="text-pretty order-2 md:order-1 [&>p]:mb-4 [&>p>strong]:text-red-500 dark:[&>p>strong]:text-yellow-300 dark:[&>p>strong]:font-extrabold [&>p>strong]:font-normal [&>p>strong]:font-mono">
          <p>
            Me llamo Raúl Adolfo Torres Vargas, pero mis amigos y conocidos me dicen
            Rulo aunque algunas personas me han llamado Adolfo. Empecé en el mundo de
            la programación como a los 15 años por allá del 2009 con una desktop HP 🖥️
            y lo empecé por curiosidad. Actualmente estoy como <strong>
              fundador y director de Easy Software Design México, además de ser
              Desarrollador de Nuevas Tecnologías en <a
                href="https://www.gruposalinas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-800 dark:text-green-500 text-2xl font-[cursive]"
              >
                Grupo Salinas
              </a>  💻
            </strong>.
          </p>
          <p>
            Algunos de mis éxitos incluyen <strong>Colaborar en la creación desde cero de una web app llamada{' '}
              <a
                href="https://www.fleter.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-800 dark:text-green-500 text-2xl font-[cursive]"
              >
                Fleter
              </a>{' '}
              por la empresa{' '}
              <a
                href="https://www.onibex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-800 dark:text-green-500 text-2xl font-[cursive]"
              >
                Onibex
              </a>
            </strong>. Aunque fue por un periodo de 6 a 7 meses bajo contrato, me
            llevo muchos aprendizajes 😢
          </p>
          <p>
            Como Desarrollador <strong>
              Empecé a laborar en las empresas desde principios o mediados de 2019,
              mi primera empresa fue{' '}
              <a
                href="https://www.facebook.com/touristamorelia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-800 dark:text-green-500 text-2xl font-[cursive]"
              >
                Tourista Vive México
              </a>{' '}
              haciendo una especie de{' '}
              <em className="italic text-yellow-800 dark:text-green-500 text-lg">
                "Becario"
              </em>
            </strong>. Mi objetivo es ser constante cada día en la mejora de mi
            persona y de mi entorno laboral, ya que soy una persona 100% dedicada en
            lo que hace, hasta a veces se me olvida comer 😆.
          </p>
          <p>
            Estoy entusiasmado con la oportunidad de contribuir con mi experiencia y
            pasión al éxito de tu equipo o empresa. Espero con ansias la posibilidad
            de colaborar juntos en proyectos futuros. ¡Gracias por tomarte el tiempo
            de conocerme!
          </p>
        </div>
        <img
          src="/img/about/about.webp"
          alt={personalImageAlt}
          className="order-1 w-64 h-auto object-cover aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 md:order-2 p-2 rotate-3"
          style={{ objectPosition: '50% 50%' }}
        />
      </article>
    </section>
  );
};

export default About;
