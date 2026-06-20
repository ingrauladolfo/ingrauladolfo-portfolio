export interface MultilangTextInterface {
    es: {
        title?: string;
        subtitle?: string;
        skills?: {
            title?: string;
            subtitle?: string;
            terminalCategory?: string
        }
        websiteOfficial?: string;
        websiteBackup?: string;
        github?: string;
        showMore?: string;
        showLess?: string;
        calendar?: {
            title: string;
            badgeText: string;
            total: string;
            months: string[];
            weekdays: string[];
            less: string;
            more: string;
            loading?: string;
            empty?: string;
        };
    };
    en: {
        title?: string;
        subtitle?: string;
        skills?: {
            title?: string;
            subtitle?: string;
            terminalCategory?: string

        }
        websiteOfficial?: string;
        websiteBackup?: string;
        github?: string;
        showMore?: string;
        showLess?: string;
        calendar?: {
            title: string;
            badgeText: string;
            total: string;
            months: string[];
            weekdays: string[];
            less: string;
            more: string;
            loading?: string;
            empty?: string;
        };
    };
}
