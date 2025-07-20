import { FaGear } from "react-icons/fa6";
import { useTheme, useLanguage } from "../../common/context";
import StackImage from "./StackImage";

const Stack = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();

  const translateTitle = {
    title: { es: "Habilidades", en: "Stack", }
  };

  return (
    <section className="min-h-screen py-16  w-full mx-auto lg:w-[740px] pb-32">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-3xl md:text-5xl font-bold flex items-center justify-center">
          <FaGear className={`mr-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}`} />
          {translateTitle.title[lang]}
        </h2>
        <StackImage />

      </div>
    </section>
  );
};

export default Stack;
