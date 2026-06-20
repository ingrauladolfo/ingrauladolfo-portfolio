export interface WorkDataInterface {
    workId: number;
    workType: { company?: boolean; freelancer?: boolean };
    workTypeName: { es: string; en: string };
    workBuildingName: { es: string; en: string };
    workPositionRoleName: { es: string; en: string; };
    workReasonLeaving?: { es: string; en: string };
    workStartDate: { es: string; en: string };
    workFinishDate?: { es: string; en: string };
    workMode: { es: string; en: string };
    workDescription: { es: string; en: string; };
    workStatus: { es: string; en: string; };
    workStatusCompleted: boolean;
    workLinks?: { id?: number; href?: string; name?: { es: string; en: string }; }[];
}
