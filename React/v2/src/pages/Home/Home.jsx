import React from 'react';
import useTypeWriting from '@/hooks/useTypeWriting';
import Badge from '@/components/Badge';

const Home = () => {
  const personalImageAlt = "I.S.C. Raúl Adolfo Torres Vargas";

  const { output, showTitle } = useTypeWriting("Hola, soy Raúl Adolfo 👋", 80, 1000);

  return (
    <section className='py-20 w-full mx-auto lg:w-[740px] pb-32'>
      <div className="max-w-svh">
        <div className="flex gap-4 mb-4">
          <img
            className="rounded-full shadow-lg size-16"
            src="/img/home/me.webp"
            alt={personalImageAlt}
          />
          <a
            href="https://www.linkedin.com/in/ingrauladolfotorresvargas/"
            target="_blank"
            rel="noopener"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <Badge text='Disponible para trabajar' />
          </a>
        </div>

        {/* Solo se muestra el h1 si showTitle es true */}
        <div className="h-[70px] sm:h-[90px] relative">
          <h1
            className={`text-4xl mb-1 font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white transition-opacity duration-300 ${showTitle ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
          >
            {output}
          </h1>
        </div>


        <span className="dark:text-red-400 light:text-black-400 text-xl w-full text-start">
          Desarrollador de Software Frontend
        </span>
        <p className="mt-4 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
          +5 años de experiencia. <strong>Desarrollador de Software y fundador de ESDMX</strong> originario de Lázaro Cárdenas Michoacán 🇲🇽 . Especializado en el desarrollo
          de aplicaciones web únicas con JavaScript como Frontend.
        </p>
      </div>
    </section>
  );
};

export default Home;
