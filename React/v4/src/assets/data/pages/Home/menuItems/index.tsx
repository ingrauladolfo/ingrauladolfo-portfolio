import { pathToTitle } from "@/assets/data/routes";
import type { MenuItem } from "@/common/interfaces";
import { FaHome } from "react-icons/fa";
import { FaFolder, FaGear, FaMedal, FaUser } from "react-icons/fa6";

export const menuItems: MenuItem[] = pathToTitle
    .filter(({ showInMenu = true }) => showInMenu)
    .map(({ path, title }) => {
        const key = path.en === "/" ? "home" : path.en.slice(1);
        const nameEn = key.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
        const nameEs = title.es.split("|")[0].trim();

        let icon = <FaHome className="mr-2 text-[2rem] md:text-[1.6rem] font-bold" />;

        if (key === "about") icon = <FaUser className="mr-2 text-[2rem] md:text-[1.6rem] font-bold" />;
        if (key === "experience") icon = <FaMedal className="mr-2 text-[2rem] md:text-[1.6rem] font-bold" />;
        if (key === "projects") icon = <FaFolder className="mr-2 text-[2rem] md:text-[1.6rem] font-bold" />;
        if (key === "skills") icon = <FaGear className="mr-2 text-[2rem] md:text-[1.6rem] font-bold" />;

        return {
            src: `/img/${key}/${key}.webp`,
            alt: { en: nameEn, es: nameEs },
            content: {
                en: <p className="text-center">{nameEn}</p>,
                es: <p className="text-center">{nameEs}</p>,
            },
            path,
            icon,
        };
    });