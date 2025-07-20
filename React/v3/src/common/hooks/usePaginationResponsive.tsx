// src/hooks/usePaginationResponsive.ts
import { useState, useEffect } from 'react'

const usePaginationResponsive = <T,>(data: T[] = [], mobileLimit = 1, desktopLimit = 2) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [visibleCount, setVisibleCount] = useState<number>(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const limit = isMobile ? mobileLimit : desktopLimit

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setVisibleCount(limit)
  }, [limit])

  const loadMore = () => {
    const newCount = Math.min(visibleCount + limit, data.length)
    setVisibleCount(newCount)
    if (newCount === data.length) setIsExpanded(true)
  }

  const showLess = () => {
    const newCount = Math.max(visibleCount - limit, limit)
    setVisibleCount(newCount)
    if (newCount === limit) setIsExpanded(false)
  }

  const showButton = data.length > limit

  return {
    visibleItems: data.slice(0, visibleCount),
    loadMore,
    showLess,
    showButton,
    isExpanded,
    isMobile,
  }
}

export default usePaginationResponsive
