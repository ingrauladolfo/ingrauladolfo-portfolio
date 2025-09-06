import { useLanguage, useTheme } from '../../common/context';
import { FaMedal } from 'react-icons/fa6';
import { useExperienceData } from '../../common/hooks/useExperience';
import ExperienceDetail from './ExperienceDetail';
import { experienceMainTitle } from '../../assets/data/pages/Experience/experienceMainTitle';

const Experience = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const { data } = useExperienceData();
  

  return (
    <section className="py-1 w-full mx-auto lg:w-[740px] pb-32">
      <div className={`max-w-7xl mx-auto px-4 py-8 ${theme=='dark' ? 'text-white' : 'text-gray-900'}`}>
        <h2 className="flex items-center font-semibold gap-x-4 text-3xl mb-8 text-center justify-center">
          <FaMedal size={20} className={theme=='dark' ? 'text-white' : 'text-gray-900'} />
          {experienceMainTitle.title[lang]}
        </h2>
        <ExperienceDetail data={data} lang={lang} theme={theme} />
      </div>
    </section>
  );
};

export default Experience;
