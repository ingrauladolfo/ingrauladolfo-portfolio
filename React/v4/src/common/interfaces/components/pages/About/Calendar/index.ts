import type { LanguageContextInterface, ThemeType } from "@/common/interfaces/context";
import type { LocalizedText } from "../LocalizedText";
export interface CalendarProps { theme: ThemeType; t?: LocalizedText; lang: LanguageContextInterface['lang']; }
