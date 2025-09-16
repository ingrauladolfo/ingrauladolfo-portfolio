import { useEffect, useRef, useState } from "react";
import { useLanguage, useTheme } from "../../common/context";
import { stackTitle } from "../../assets/data/pages/Stack/stackTitle";
import { FaGear } from "react-icons/fa6";
import { Tabs } from "../../common/components";
import StackImage from "./StackImage";

const formatTitle = (key: string): { en: string; es: string } =>
  ({ all: { en: "All", es: "Todos" }, front: { en: "Frontend", es: "Frontend" }, css: { en: "CSS Frameworks", es: "Frameworks CSS" }, back: { en: "Backend", es: "Backend" }, bbdd: { en: "Databases", es: "Base de datos" }, controlVer: { en: "Version Control", es: "Control de versiones" }, test: { en: "Testing", es: "Testing" }, cloud: { en: "Cloud Services", es: "Servicios en la nube" }, containers: { en: "Containers", es: "Contenedores" } }[key] ?? { en: key, es: key });

const tabKeys = ['all', 'front', 'css', 'back', 'bbdd', 'controlVer', 'test', 'cloud', 'containers'] as const;

const Stack = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<string>(tabKeys[0]);
  const t = stackTitle[lang] || stackTitle.en;
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [bgHeight, setBgHeight] = useState<number>(window.innerHeight);
  const tabLabels: Record<string, string> = Object.fromEntries(tabKeys.map(k => [k, formatTitle(k)[lang]]));
  useEffect(() => {
    if (!sectionRef.current) return;
    const top = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - 100, behavior: 'smooth' });
  }, [selectedTab]);
 useEffect(() => {
  if (selectedTab === 'all') return;

  const node = contentRef.current;
  if (!node) return;

  const measure = () => {
    const rect = node.getBoundingClientRect();
    const h = Math.max(rect.height + 80, window.innerHeight);
    setBgHeight(Math.ceil(h));
  };

  measure();

  const RO: any = (window as any).ResizeObserver;
  let roInstance: any = null;
  if (typeof RO === 'function') {
    roInstance = new RO(() => measure());
    roInstance.observe(node);
  }

  const onResize = () => measure();
  window.addEventListener('resize', onResize);

  return () => {
    if (roInstance && typeof roInstance.disconnect === 'function') roInstance.disconnect();
    window.removeEventListener('resize', onResize);
  };
}, [selectedTab]);

  return (
    // background FULL-BLEED aquí — único que pinta bg
    <section ref={sectionRef} className={`relative  py-16 w-full mx-auto lg:w-[740px] pb-32 max-h-[${bgHeight}] ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}    >
      <div className={`${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'} fixed inset-0 -z-20`}  />
      {/* inner container centra y limita el ancho, sin bg */}
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-5xl font-bold flex items-center justify-center">
          <FaGear className={`mr-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}`} />
          {t.title}
        </h2>
        <h3 className="mb-8 text-center text-4xl font-bold flex items-center justify-center">
          {t.subtitle}
        </h3>

        <div className="mb-6">
          <Tabs tabs={tabKeys as unknown as string[]} activeTab={selectedTab} labels={tabLabels} onChange={setSelectedTab} theme={theme} />
        </div>

        <StackImage lang={lang} theme={theme} activeTab={selectedTab} />
      </div>
    </section>
  );
};

export default Stack;
