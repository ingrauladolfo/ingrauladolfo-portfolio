const pagesMap: Record<string, () => Promise<any>> = {
  '/': () => import('../../../pages/Home'),
  '/about': () => import('../../../pages/About'),
  '/acerca': () => import('../../../pages/About'),
   '/skills': () => import('../../../pages/Stack'),
  '/habilidades': () => import('../../../pages/Stack'),
  '/projects': () => import('../../../pages/Projects'),
  '/proyectos': () => import('../../../pages/Projects'),
  '/experience': () => import('../../../pages/Experience'),
  '/experiencia': () => import('../../../pages/Experience'),
  /* '/about': () => import('../../../pages/About'),
  '/acerca': () => import('../../../pages/About'),
  '/experience': () => import('../../../pages/Experience'),
  '/experiencia': () => import('../../../pages/Experience'),
  '/projects': () => import('../../../pages/Projects'),
  '/proyectos': () => import('../../../pages/Projects'),
  '/skills': () => import('../../../pages/TechStack'),
  '/habilidades': () => import('../../../pages/TechStack'), */
};

export default  pagesMap