export interface EducationDataInterface {
    educationId: number;
    educationType: { university?: boolean; bootcamp?: boolean };
    educationTypeName: { es: string; en: string };
    educationBuildingName: { es: string; en: string };
    educationStartDate: { es: string; en: string };
    educationFinishDate?: { es: string; en: string };
    educationCourseName: { es: string; en: string };
    educationStatus: { es: string; en: string };
    educationStatusCompleted: boolean;
    educationMode: { es: string; en: string };
    educationDescription: { es: string; en: string; };
    educationLinks?: { id?: number; href?: string; name?: { es: string; en: string }; }[];
}


