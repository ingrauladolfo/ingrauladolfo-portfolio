import useIntersectionObserver from "@/hooks/useIntersectionObserver"

const StackImage = ({ skill }) => {
  console.log('skill StackImage ', skill)
    const { isVisible, elementRef } = useIntersectionObserver()
  
    return (
      <div className="flex gap-4 h-fit transition-all" key={skill.name}>
        <span className="flex flex-col gap-2 items-center">
          
          <img
            ref={elementRef}
            className={`hover:scale-95 hover:shadow-md rounded-3xl transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            height="150"
            width="150"
            src={isVisible ? skill.link : ''}
            alt={skill.alt}
            loading="lazy"
          />
          <h3 className="text-white">{skill.name}</h3>
        </span>
      </div>
    )
  }

  export default StackImage