const getButtonWebsiteLinksClass = (theme: 'dark' | 'light'): string => {
  return `relative overflow-hidden border z-10 transition-colors duration-300  
    before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1]  
    before:transition-all before:duration-700 before:ease-in-out  
    hover:before:w-full      ${theme === 'dark' ? 'bg-gray-950 border-red-600 text-gray-100 hover:text-gray-950 hover:border-amber-600 before:bg-amber-300' : 'bg-gray-100 border-amber-300 text-gray-950 hover:text-gray-100 hover:border-red-300 before:bg-red-600'}`;
};
const getBgClass = (theme: 'dark' | 'light'): string => {
  return theme === 'dark' ? 'bg-gray-950 text-gray-100 border-2 border-red-600' : 'bg-gray-100 text-gray-950 border-2 border-amber-300';
};

export { getButtonWebsiteLinksClass, getBgClass }