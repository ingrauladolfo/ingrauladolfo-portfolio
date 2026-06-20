import { useLanguage, useTheme } from "@/common/context";
import { useLayoutEffect, useRef, useState, type FC } from "react";
import { backgroundPageTitle, tabBackgroundLabels } from "@/assets/data";
import { FaMedal } from "react-icons/fa6";
import { getTextColor } from "@/assets/styles";
import { BackgroundTimeLine, ScrollToTopButton, Tabs } from "@/common/components";
import { useBackgroundData } from "@/common/hooks";
import { motion } from "framer-motion";
export const Background: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const { data } = useBackgroundData();
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = backgroundPageTitle[lang] || backgroundPageTitle.en;
  const tabLabels = tabBackgroundLabels[lang] || tabBackgroundLabels.en;
  const tabs = ["all", "work", "education"];
  const scrollToTitle = () => { sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  useLayoutEffect(() => { const handleScroll = () => setShowScrollTop(window.scrollY > 200); handleScroll(); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);
  return (
    <section ref={sectionRef} className="relative min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <motion.h2 className="mb-4 flex items-center justify-center gap-3 text-4xl font-bold md:text-5xl" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }} >
            <motion.span initial={{ rotate: -10, scale: 0.8 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>
              <FaMedal className={`text-3xl md:text-4xl ${getTextColor(theme)}`} />
            </motion.span>
            {t.title}
          </motion.h2>
          <motion.p className="mx-auto max-w-2xl text-lg font-medium opacity-80 md:text-xl" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 0.5, delay: 0.15 }} >
            {t.subtitle}
          </motion.p>
        </motion.div>
        <motion.div
          className="mb-10 flex justify-center" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} >
          <Tabs tabs={tabs} activeTab={selectedTab} labels={tabLabels} onChange={setSelectedTab} theme={theme} />
        </motion.div>

        <motion.div className="min-h-[50vh]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.25 }} >
          <BackgroundTimeLine data={data} lang={lang} theme={theme} activeTab={selectedTab} t={t} />
        </motion.div>
      </div>

      <ScrollToTopButton visible={showScrollTop} theme={theme} lang={lang} onClick={scrollToTitle} />
    </section>
  );
};