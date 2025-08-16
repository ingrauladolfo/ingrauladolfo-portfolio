import { type FC } from "react";
import { useLanguage, useTheme } from "../../../common/context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Category, Image, LocalizedString, } from "../../../common/interfaces/data/pages/Stack";
import { categoryKeys, images } from "../../../assets/data/pages/Stack";
import { SlickSlider } from "../../../common/components";

const formatTitle = (key: string): LocalizedString => ({ front: { en: "Frontend", es: "Frontend" }, css: { en: "CSS Frameworks", es: "Frameworks CSS" }, back: { en: "Backend", es: "Backend" }, bbdd: { en: "Databases", es: "Base de datos" }, controlVer: { en: "Version Control", es: "Control de versiones" }, test: { en: "Testing", es: "Testing" }, cloud: { en: "Cloud Services", es: "Servicios en la nube" }, containers: { en: "Containers", es: "Contenedores" }, }[key] ?? { en: key, es: key });
const categoryTitles = Object.fromEntries(categoryKeys.map(k => [k, formatTitle(k)])) as Record<Category, LocalizedString>;
const StackImage: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const grouped = images.reduce<Map<Category, Image[]>>((m, img) => {
    if (!m.has(img.category)) { m.set(img.category, []); }
    m.get(img.category)!.push(img);
    return m;
  }, new Map());

  return (
    <div className={`w-full py-4 ${theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-950"}`}>
      <div className="flex flex-col gap-12 w-full">
        {[...grouped.entries()].map(([cat, imgs]) => (
          <section key={cat} className="w-full overflow-visible px-4 md:px-8">
            <h3 className="text-2xl font-semibold mb-4 text-center w-full">
              {categoryTitles[cat][lang]}
            </h3>
            <SlickSlider images={imgs} lang={lang} theme={theme} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default StackImage;
