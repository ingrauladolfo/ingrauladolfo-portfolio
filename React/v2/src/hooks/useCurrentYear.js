import { useMemo } from 'react';

export default function useCurrentYear(startYear = 2019) {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return `${startYear}–${currentYear}`;
}
