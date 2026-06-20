import type { MultilangTextInterface } from "@/common/interfaces/data";
import type { BackgroundTimeLineTitleInterface } from "../BackgroundTimeLineTitle";
export type BackgroundPageTitleType = { [K in keyof MultilangTextInterface]: MultilangTextInterface[K] & BackgroundTimeLineTitleInterface }
