import { useLanguage, useTheme } from "../../../context";
import { useCurrentYear } from "../../../hooks/useCurrentYear";
const translations ={
    copy:{ es: "Todos los derechos reservados.",
    en: "All rights reserved."}
}
const Footer = () => {
    const{theme} = useTheme()
    const{lang} = useLanguage()
     const yearRange = useCurrentYear(2019);
  return (
    <footer className={`w-full text-center text-balance font-extrabold py-4 ${theme=='dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-800'}`}>
      © {yearRange} ingrauladolfo. {translations.copy[lang]}
    </footer>
  )
}

export default Footer