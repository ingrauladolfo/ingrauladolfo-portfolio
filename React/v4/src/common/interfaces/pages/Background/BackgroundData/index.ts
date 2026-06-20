import type { EducationDataInterface, WorkDataInterface } from '@/common/interfaces/data'
import type { BackgroundSectionInterface } from '../BackgroundSection'
export interface BackgroundDataInterface {
    education: BackgroundSectionInterface<EducationDataInterface>
    work: BackgroundSectionInterface<WorkDataInterface>
}