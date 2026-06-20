const getBaseCardClasses = (theme: 'light' | 'dark'):string => `rounded-lg shadow-xl md:px-6 md:py-6 px-4 py-4 ${theme === 'dark' ? 'bg-gray-950 text-gray-100 border-2 border-red-600' : 'bg-gray-100 text-gray-950 border-2 border-amber-300'}`;
const getTypeClasses = (theme: 'light' | 'dark'):string => `flex items-center gap-x-1 md:gap-x-2 text-[0.8em] md:text-[1.2em] font-bold mb-2 ${theme === 'dark' ? 'text-amber-300' : 'text-red-600'}`;
const getNameClasses = (theme: 'light' | 'dark'):string => `font-semibold mb-1 text-[1em] md:text-[1.2em] ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`;
const getVerticalLineColor = (theme: 'light' | 'dark'):string => theme === 'dark' ? 'bg-amber-300' : 'bg-red-600'

export { getBaseCardClasses, getTypeClasses, getNameClasses, getVerticalLineColor }