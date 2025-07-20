interface Education {
  id:number;
  startDate: { es: string; en: string };
  finishDate: { es: string; en: string };
  status?: { es: string; en: string };
  title: { es: string; en: string };
  name: { es: string; en: string };
  bootcamp: boolean;
  type: { es: string; en: string };
  links: {
    id: string | number;
    href: string;
    name: { es: string; en: string };
  }[];
}
interface Work {
  id:number;
  startDate:{es:string; en:string};
  endDate?:{es:string; en:string};
  title:{es:string; en:string};
  company:{es:string; en:string};
  typeWork:{es:string; en:string};
  reasonLeaving?:{es:string; en:string};
  description:{es:string; en:string};
  workHere:boolean;
  links?:{
    id:number;
    href:string;
    alt:{es:string; en:string};
  }[]
}

export type{Education, Work}