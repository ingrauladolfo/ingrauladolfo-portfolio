interface Education {
  educationId: number;
  educationType: { university?: boolean; bootcamp?: boolean };
  educationTypeTitle: { university?: { es: string; en: string }; bootcamp?: { es: string; en: string }; };
  educationDateRange: { university?: { startDate: { es: string; en: string }; finishDate: { es: string; en: string } }; bootcamp?: { startDate: { es: string; en: string }; finishDate: { es: string; en: string } }; };
  educationName: { university?: { es: string; en: string }; bootcamp?: { es: string; en: string }; };
  educationCourseName: { university?: { es: string; en: string }; bootcamp?: { es: string; en: string }; };
  educationStatus: { university?: { es: string; en: string }; bootcamp?: { es: string; en: string }; };
  educationDescription: { university?: { es: string; en: string }; bootcamp?: { es: string; en: string }; };
  educationLinks: { university?: { id: number; href: string; name: { es: string; en: string }; }[]; bootcamp?: { id: number; href: string; name: { es: string; en: string }; }[]; };
}

interface Work {
  workId: number;
  workDateRange: { startDate?: { es: string; en: string }; company?: { startDate: { es: string; en: string }; finishDate?: { es: string; en: string }; }; }
  workPositionRole: { es?: string; en?: string; company?: { es: string; en: string }; };
  workCompanyName: { es?: string; en?: string; company?: { es: string; en: string }; };
  workDescription: { es?: string; en?: string; company?: { es: string; en: string }; };
  workHere: boolean;
  workReasonLeaving?:{ es: string; en: string };
  workMode: { freelancer?:{es?: string; en?: string}; company?: { es: string; en: string }; };
  workLinks?: { company?: { id: number; href: string; name: { es: string; en: string }; }[]; id?: number; href?: string; name?: { es: string; en: string }; }[];
}

export type { Education, Work }