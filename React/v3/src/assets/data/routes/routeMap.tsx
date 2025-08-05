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
};

export default  pagesMap