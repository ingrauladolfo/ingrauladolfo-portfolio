// src/hooks/usePagination.jsx
import { useState } from 'react';

const usePagination = (data = [], initialLimit = 2) => {
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [isExpanded, setIsExpanded] = useState(false);
  const loadMore = () => { const newCount = Math.min(visibleCount + initialLimit, data.length); setVisibleCount(newCount); if (newCount === data.length) { setIsExpanded(true); } };
  const showLess = () => { const newCount = Math.max(visibleCount - initialLimit, initialLimit); setVisibleCount(newCount); if (newCount === initialLimit) { setIsExpanded(false); } };
  const showButton = data.length > initialLimit;
  return { visibleItems: data.slice(0, visibleCount), loadMore, showLess, showButton, isExpanded };
};

export default usePagination;