export const getButtonWebsiteLinks = (theme: 'light' | 'dark'): string => `
  relative overflow-hidden border z-10 transition-colors duration-300
  before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1]
  before:transition-all before:duration-700 before:ease-in-out hover:before:w-full
  border border-3
  ${theme === 'dark' ? 'bg-[#ffd230] md:bg-[#ffd230]  border-[#ffd230] text-[#070713] hover:text-white hover:border-[#e7000b] before:bg-[#e7000b]' : 'bg-[#e7000b] md:bg-[#e7000b] border-[#e7000b] text-white hover:text-[#070713] hover:border-[#ffd230] before:bg-[#ffd230]'}
`.replace(/\s+/g, ' ').trim();