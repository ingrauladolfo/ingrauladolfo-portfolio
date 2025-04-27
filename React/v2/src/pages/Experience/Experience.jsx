import Timeline from "@/components/Timeline";
import useExperienceData from "@/hooks/useExperience";
import { FaMedal } from "react-icons/fa";

const Experience = () => {
  const { data } = useExperienceData();
  
  return (
    <section className='py-20 w-full mx-auto lg:w-[740px] pb-32'>
      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <h2 className="flex items-center font-semibold gap-x-8 text-3xl mb-8 text-center">
          <FaMedal className="mr-0" size={18} />
          Trayectoria y Estudios
        </h2>
        
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;