import { SiAngular, SiAstro, SiBootstrap, SiBulma, SiStyledcomponents, SiTypescript, SiVite } from 'react-icons/si'
import { DiCss3, DiHtml5, DiJavascript, DiReact } from 'react-icons/di'
import type { JSX } from 'react'
const tagIcons: Record<string, JSX.Element> = {
    angular: <SiAngular className="h-4 w-4" aria-hidden="true" />,
    astro: <SiAstro className="h-4 w-4" aria-hidden="true" />,
    bootstrap: <SiBootstrap className="h-4 w-4" aria-hidden="true" />,
    bulma: <SiBulma className="h-4 w-4" aria-hidden="true" />,
    css: <DiCss3 className="h-4 w-4" aria-hidden="true" />,
    javascript: <DiJavascript className="h-4 w-4" aria-hidden="true" />,
    html: <DiHtml5 className="h-4 w-4" aria-hidden="true" />,
    react: <DiReact className="h-4 w-4" aria-hidden="true" />,
    typescript: <SiTypescript className="h-4 w-4" aria-hidden="true" />,
    styledcomponents: <SiStyledcomponents className="h-4 w-4" aria-hidden="true" />,
    vite: <SiVite className="h-4 w-4" aria-hidden="true" />,
}
const tagColorMap: Record<string, string> = {
  angular: '#dd1b16',
  astro: '#ff5d01',
  bootstrap: '#7952b3',
  bulma: '#00d1b2',
  css: '#264de4',
  javascript: '#f0db4f',
  html: '#e44d26',
  react: '#61dafb',
  typescript: '#3178c6',
  styledcomponents: '#db7093',
  vite: '#646cff',
};

export{tagIcons, tagColorMap}