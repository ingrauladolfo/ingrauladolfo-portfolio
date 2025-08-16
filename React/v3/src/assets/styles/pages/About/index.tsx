const getTextColor = (theme: 'light' | 'dark'): string =>
  theme === 'dark' ? 'text-gray-300' : 'text-gray-800';

const getLinkColor = (theme: 'light' | 'dark'): string =>
  theme === 'dark' ? 'text-green-500' : 'text-yellow-700';

const getStrongColor = (theme: 'light' | 'dark'): string =>
  theme === 'dark' ? 'text-yellow-300 font-extrabold' : 'text-red-600 font-normal';

export { getTextColor, getLinkColor, getStrongColor };
