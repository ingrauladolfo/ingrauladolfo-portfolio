import type { MultilangTextInterface } from "@/common/interfaces/data/pages";

export const aboutPageTitle: MultilangTextInterface = {
    es: {
        title: 'Acerca',
        subtitle: 'Descubre quién soy y qué me impulsa',
        calendar: {
            title: 'Contribuciones',
            badgeText: 'actividades el',
            total: '{{count}} contribuciones en {{year}}',
            months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
            less: 'Menos',
            more: 'Más',
        },
    },
    en: {
        title: 'About',
        subtitle: 'Explore who I am and what drives me',
        calendar: {
            title: 'Contributions',
            badgeText: 'activities on',
            total: '{{count}} contributions in {{year}}',
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            less: 'Less',
            more: 'More',
        },
    },
};