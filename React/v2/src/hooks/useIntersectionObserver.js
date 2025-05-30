import { useEffect, useRef, useState } from 'react'
const useIntersectionObserver = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries=> {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )
    if (elementRef.current) {      observer.observe(elementRef.current)    }
    return () => {      if (elementRef.current) {        observer.unobserve(elementRef.current)      }}
  }, [threshold])

  return { isVisible, elementRef }
}

export default useIntersectionObserver
