import { GitHub, LinkedIn } from '@mui/icons-material'
import profilePhoto from '../images/about/about.jpg'
export const aboutData = [
  {
    imgUrl: profilePhoto,
    imageAlt: 'I.S.C. Raúl Adolfo Torres Vargas',
    preName: 'I.S.C',
    name: 'Raúl Adolfo Torres Vargas',
    birthday: 'August-11-1994',
    residenceCity: 'Mexico City Metropolitan Area',
    originCity: 'Lázaro Cárdenas, Michoacán de Ocampo',
    career: 'Computer Systems Engineering',
    university: 'Vasco de Quiroga University',
    links: [
      {
        icon: LinkedIn,
        href: 'https://www.linkedin.com/in/ingrauladolfotorresvargas/',
      },
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo',
      },
    ],
  },
]
