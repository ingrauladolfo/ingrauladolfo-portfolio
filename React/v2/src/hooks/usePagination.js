import { useState } from 'react';

const usePagination = (items, initialLimit) => {
  const [limit, setLimit] = useState(initialLimit);
  const totalItems = items.length;
  const visibleItems = items.slice(0, limit);
  const hasMore = totalItems > limit;
  const isExpanded = limit >= totalItems;
  // Mostrar "Mostrar menos" mientras limit sea mayor o igual a initialLimit y haya elementos para reducir
  const canShowLess = limit >= initialLimit || (limit === initialLimit && limit < totalItems);

  const loadMore = () => {
    setLimit(prev => Math.min(prev + initialLimit, totalItems));
  };

  const showLess = () => {
    setLimit(prev => {
      // Reducir en bloques de initialLimit, pero no menos que initialLimit
      const newLimit = Math.min(initialLimit, prev - initialLimit);
      return newLimit;
    });
  };

  return {
    visibleItems,
    loadMore,
    showLess,
    hasMore,
    isExpanded,
    showButton: hasMore || canShowLess
  };
};

export default usePagination;