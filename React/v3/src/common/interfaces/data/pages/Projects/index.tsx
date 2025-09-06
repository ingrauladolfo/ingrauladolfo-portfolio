interface Projects {
    projectId: number;
    projectTitle: { es: string, en: string };
    projectCategory: { es: string, en: string };
    projectDescription: { es: string, en: string };
    projectDevYear: { es: string, en: string };
    projectImages: {
        projectImageFront: {
            projectImageFrontHref: string;
            projectImageFrontAlt: { es: string, en: string };
        }
        projectImagesBack:{
            projectImagesBackId:number;
            projectImagesBackHref:string;
            projectImagesBackAlt:{ es: string, en: string }
        }[]
    }
    projectTechStack: string[];
    projectsURL:{
        projectsURLId:number;
        projectsURLGithubRepo?:string;
        projectsURLWebsiteDeploy?:string;
    }[]
}

export type { Projects }