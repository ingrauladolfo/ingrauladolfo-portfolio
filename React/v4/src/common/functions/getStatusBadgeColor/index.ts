import type { getStatusBadgeColorInterface } from "@/common/interfaces";
import { normalize } from "../normalizeStrings";
export const getStatusBadgeColor = ({
  isActual, isStatus, theme, }: getStatusBadgeColorInterface): string => {
  if (typeof isActual === "boolean") {
    const actual = isActual ? theme === "dark" ?
      "bg-[#1D4ED8] text-[#DBEAFE] border-0" :
      "bg-[#FECACA] text-[#14532D] border-0" :
      theme === "dark" ?
        "bg-[#6D28D9] text-[#EDE9FE] border-0" :
        "bg-[#334155] text-[#FFFFFF] border-0";
    return actual;
  }
  if (typeof isStatus === "string") {
    const status = normalize(isStatus);
    switch (status) {
      case "presencial":
      case "on site":
      case "onsite":
        return theme === "dark" ? "bg-[#87575D] text-[#fcf6f6] border-0" : "bg-[#9810FA] text-[#E2E8F0] border-0";
      case "remoto":
      case "remote":
        return theme === "dark" ? "bg-[#BB4D00] text-[#080817] border-0" : "bg-[#166534] text-[#fff700] border-0";
      case "hibrido":
      case "hybrid":
        return theme === "dark" ? "bg-[#FFD230] text-[#000000] border-0" : "bg-[#ECFDF5] text-[#00A3DE] border-0";
    }
  }
  return "";
};

