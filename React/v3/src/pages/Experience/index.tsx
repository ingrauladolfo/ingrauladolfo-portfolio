// src/components/Experience/Experience.tsx
import { useState, useRef, useEffect, type FC } from 'react';
import { useLanguage, useTheme } from '../../common/context';
import { FaMedal } from 'react-icons/fa6';
import { useExperienceData } from '../../common/hooks/useExperience';
import ExperienceDetail from './ExperienceDetail';
import { experienceMainTitle } from '../../assets/data/pages/Experience/experienceMainTitle';
import { Tabs } from '../../common/components';

const Experience: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const { data } = useExperienceData();
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const t = experienceMainTitle[lang] || experienceMainTitle.en;

  // ✅ Ref para la sección completa (antes del h2)
  const sectionRef = useRef<HTMLElement | null>(null);

  const tabLabels = {
    all: lang === 'es' ? 'Todo' : 'All',
    education: lang === 'es' ? 'Educación' : 'Education',
    work: lang === 'es' ? 'Experiencia' : 'Work'
  };
  const tabs = ['all', 'education', 'work'];

  useEffect(() => {
    if (!sectionRef.current || !data) { return; }
    const top = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - 100, behavior: 'smooth', });
  }, [selectedTab, data]);

  return (
    <section ref={sectionRef} className={`min-h-screen py-16 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-5xl font-bold flex items-center justify-center">
          <FaMedal className={`mr-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}`} />
          {t.title}
        </h2>
        <h3 className="mb-8 text-center text-4xl font-bold flex items-center justify-center">
          {t.subtitle}
        </h3>

        <div className="mb-6">
          <Tabs
            tabs={tabs}
            activeTab={selectedTab}
            labels={tabLabels}
            onChange={setSelectedTab}
            theme={theme}
          />
        </div>

        {/* Sin ref aquí */}
        <ExperienceDetail data={data} lang={lang} theme={theme} activeTab={selectedTab} />
      </div>
    </section>
  );
};

export default Experience;
