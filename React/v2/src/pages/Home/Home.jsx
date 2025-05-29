import { Badge } from '@/components';
import { ThemeContext } from '@/context/ThemeContext';
import useTypeWriting from '@/hooks/useTypeWriting';
import React, { useContext } from 'react'

const Home = () => {
  const personalImageAlt = "I.S.C. Raúl Adolfo Torres Vargas";
  const { output, showTitle } = useTypeWriting("Hola, soy Raúl Adolfo 👋", 80, 1000);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <section className="py-1 w-full mx-auto lg:w-[740px] pb-32">
      <div className="max-w-svh">
        <div className="flex gap-4 mb-4">
          <img src="/img/home/me.webp" alt={personalImageAlt} className="rounded-full shadow-lg size-16" />
          <a href="https://www.linkedin.com/in/ingrauladolfotorresvargas/" target="_blank" rel="noopener" className="flex justify-center items-center transition md:justify-center md:hover:scale-105">
            <Badge text="Disponible para trabajar" />
          </a>
        </div>
        <div className="h-[70px] sm:h-[90px] relative">
          <h1 className={`text-4xl mb-1 font-bold tracking-tight sm:text-5xl transition-opacity duration-300 ${showTitle ? 'opacity-100' : 'opacity-0'} ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            {output}
          </h1>
          <span className={`text-xl w-full text-start ${isDark ? 'text-yellow-300' : 'text-red-700'}`}>
            Desarrollador de Software Frontend
          </span>

          <p className={`mt-4 text-xl ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`}>
            +5 años de experiencia.{' '}
            <strong className={`font-semibold ${isDark ? 'text-yellow-300' : 'text-red-700'}`}>
              Desarrollador de Software y fundador de ESDMX
            </strong>{' '}
            originario de Lázaro Cárdenas Michoacán, México. Especializado en el desarrollo de aplicaciones web únicas con JavaScript como Frontend.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Home