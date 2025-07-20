interface TypewritingItem {
  title: string;
  speed: number;
  delay: number;
}

interface UseTypeWritingResult {
  output: string;
  showTitle: boolean;
}

export type{UseTypeWritingResult,TypewritingItem}