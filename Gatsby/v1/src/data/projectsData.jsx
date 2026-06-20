import { GitHub, Link } from '@mui/icons-material'
import codyVacations from '../images/projects/codyVacations.png'
import donapp from '../images/projects/donapp.png'
import myFirstApp from '../images/projects/myFirstApp.png'
import apiITWeb from '../images/projects/apiITWeb.png'
import goodCoffee from '../images/projects/goodCoffee.png'
import carsForm from '../images/projects/carsForm.png'
import shoppingCartTVAzteca from '../images/projects/shoppingCartTVAzteca.png'
import quotesWeb from '../images/projects/quotesWeb.png'
import pokedemlo from '../images/projects/pokedemlo.png'
import ticTacToe from '../images/projects/ticTacToe.png'
import rickNMorty from '../images/projects/rickNMorty.png'
import softInc from '../images/projects/softInc.png'
import stopWatchRedux from '../images/projects/stopWatchRedux.png'
import weatherApp from '../images/projects/weatherApp.png'
import coderama from '../images/projects/coderama.png'
import pizzaSelector from '../images/projects/pizzaSelector.png'
import kaliStudio from '../images/projects/kaliStudio.png'
import todoList from '../images/projects/todoList.png'
import nextPortfoliov1 from '../images/projects/nextPortfoliov1.png'
import vanillaPortfoliov2 from '../images/projects/vanillaPortfoliov2.png'
import angularPortfoliov2 from '../images/projects/angularPortfoliov2.png'
import reactPortfoliov1 from '../images/projects/reactPortfoliov1.png'

export const projectsData = [
  {
    index: 1,
    title: "Cody's vacations - C.F.",
    description:
      "This project was developed in a CódigoFacilito's event with the same name",
    imageUrl: codyVacations,
    imageAlt: "Cody's vacations - C.F.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/vacacionesCody-codigoFacilito',
      },
      {
        icon: Link,
        href: 'https://vacaciones-cody-codigo-facilito.vercel.app/',
      },
    ],
  },
  {
    index: 2,
    title: 'Donapp - UVAQ',
    description: "This project was developed in a UVAQ's subject",
    imageUrl: donapp,
    imageAlt: 'Donapp - UVAQ',
    tags: ['IONIC', 'Angular', 'Typescript'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/donacion_uvaq',
      },
      {
        icon: Link,
        href: 'https://donapp-uvaq.vercel.app/login',
      },
    ],
  },
  {
    index: 3,
    title: 'My first IONIC app - UVAQ',
    description: "This project was developed in a UVAQ's subject",
    imageUrl: myFirstApp,
    imageAlt: 'My first app in IONIC - UVAQ',
    tags: ['IONIC', 'Angular', 'Typescript', 'SCSS'],
    links: [
      {
        icon: GitHub,
        href:
          'https://github.com/ingrauladolfo/appIONIC-ComputoMovil-examen1-UVAQ',
      },
      {
        icon: Link,
        href: 'https://app-ionic-computo-movil-examen1-uvaq.vercel.app/home',
      },
    ],
  },
  {
    index: 4,
    title: 'API It Web - UVAQ',
    description: "This project was developed in a UVAQ's subject",
    imageUrl: apiITWeb,
    imageAlt: 'API It Web - UVAQ',
    tags: ['Angular', 'Typescript', 'Bootstrap', 'CSS', 'HTML'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/apiItWeb-frontEnd-UVAQ/',
      },
      {
        icon: Link,
        href: 'https://api-it-web-front-end-uvaq.vercel.app/',
      },
    ],
  },
  {
    index: 5,
    title: 'Good Coffee - C.F.',
    description:
      "This project was developed in a CodigoFacilito's youtube tutorial",
    imageUrl: goodCoffee,
    imageAlt: 'Good Coffee - C.F.',
    tags: ['Dart', 'Flutter'],
    links: [
      {
        icon: GitHub,
        href:
          'https://github.com/ingrauladolfo/goodCoffee-codigoFacilito-Youtube/',
      },
      {
        icon: Link,
        href: 'https://good-coffee-codigo-facilito-youtube.vercel.app/',
      },
    ],
  },
  {
    index: 6,
    title: 'Cars Form - Academlo',
    description:
      "This project was developed in the 'Fundamentos de Desarrollo Web' section at Academlo",
    imageUrl: carsForm,
    imageAlt: 'Cars Form - Academlo',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/carsForm-Academlo',
      },
      {
        icon: Link,
        href: 'https://cars-form-academlo.vercel.app/',
      },
    ],
  },
  {
    index: 7,
    title: 'shoppingCart - Tv Azteca',
    description: 'This project was developed in a technical test at Tv Azteca',
    imageUrl: shoppingCartTVAzteca,
    imageAlt: 'shoppingCart - Tv Azteca',
    tags: ['Vite/React', 'Bootstrap'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/shoppingCart-tvAzteca-prueba/',
      },
      {
        icon: Link,
        href: 'https://shopping-cart-tv-azteca-prueba.vercel.app/',
      },
    ],
  },
  {
    index: 8,
    title: 'Quotes Web - Academlo',
    description: 'This project was developed in the React section at Academlo',
    imageUrl: quotesWeb,
    imageAlt: 'Quotes Web - Academlo',
    tags: ['React', 'Bootstrap'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/qoutesWebReact-Academlo/',
      },
      {
        icon: Link,
        href: 'https://qoutes-web-react-academlo.vercel.app/',
      },
    ],
  },
  {
    index: 9,
    title: 'Pokedemlo - Academlo',
    description: 'This project was developed in the React section at Academlo',
    imageUrl: pokedemlo,
    imageAlt: 'Pokedemlo - Academlo',
    tags: ['React', 'Material UI', 'animate.css'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/pokedexWebReact-Academlo/',
      },
      {
        icon: Link,
        href: 'https://pokedex-web-react-academlo.vercel.app/',
      },
    ],
  },
  {
    index: 10,
    title: 'Tic tac toe - Academlo',
    description: 'This project was developed in the React section at Academlo',
    imageUrl: ticTacToe,
    imageAlt: 'Tic tac toe - Academlo',
    tags: ['React', 'CSS'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/tictactoeReactWeb-Academlo/',
      },
      {
        icon: Link,
        href: 'https://tictactoe-react-web-academlo.vercel.app/',
      },
    ],
  },
  {
    index: 11,
    title: 'Rick & Morty- Academlo',
    description: 'This project was developed in the React section at Academlo',
    imageUrl: rickNMorty,
    imageAlt: 'Rick & Morty - Academlo',
    tags: ['React', 'Bootstrap'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/rickNMortyWebReat-Academlo/',
      },
      {
        icon: Link,
        href: 'https://rick-nm-orty-web-reat-academlo.vercel.app/',
      },
    ],
  },
  {
    index: 12,
    title: 'Soft Inc. - UVAQ',
    description: "This project was developed in a UVAQ's subject",
    imageUrl: softInc,
    imageAlt: 'Soft Inc. - UVAQ',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/sistemaSoftInc-UVAQ/',
      },
      {
        icon: Link,
        href: 'https://sistema-soft-inc-uvaq.vercel.app/',
      },
    ],
  },
  {
    index: 13,
    title: 'Stop Watch Redux - Academlo',
    description: 'This project was developed in the React section at Academlo',
    imageUrl: stopWatchRedux,
    imageAlt: 'Stop Watch Redux - Academlo',
    tags: ['React', 'Bootstrap'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/tictactoeReactWeb-Academlo/',
      },
      {
        icon: Link,
        href: 'https://stop-watch-web-react-redux-academlo.vercel.app/',
      },
    ],
  },
  {
    index: 14,
    title: 'Weather App - Academlo',
    description: 'This project was developed in the React section at Academlo',
    imageUrl: weatherApp,
    imageAlt: 'Weather App - Academlo',
    tags: ['React', 'CSS'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/weatherReactWeb-Academlo/',
      },
      {
        icon: Link,
        href: 'https://weather-react-web-academlo.vercel.app/',
      },
    ],
  },
  {
    index: 15,
    title: 'Coderama - Udemy',
    description:
      'This project was developed in the tutorial of Josué Daniel Flores at Udemy',
    imageUrl: coderama,
    imageAlt: 'Coderama - Udemy',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        icon: GitHub,
        href:
          'https://github.com/ingrauladolfo/memoramaJS-JosueDanielFlores-Udemy/',
      },
      {
        icon: Link,
        href: 'https://coderama.vercel.app/',
      },
    ],
  },
  {
    index: 16,
    title: 'Pizza Selector - Udemy',
    description:
      'This project was developed in the tutorial of Josué Daniel Flores at Udemy',
    imageUrl: pizzaSelector,
    imageAlt: 'Pizza Selector - Udemy',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        icon: GitHub,
        href:
          'https://github.com/ingrauladolfo/seleccionadorPizzasJS-JosueDanielFlores-Udemy',
      },
      {
        icon: Link,
        href:
          'https://seleccionador-pizzas-js-josue-daniel-flores-udemy.vercel.app/',
      },
    ],
  },
  {
    index: 17,
    title: 'Kali Studio - UVAQ',
    description: "This project was developed in a UVAQ's subject",
    imageUrl: kaliStudio,
    imageAlt: 'Kali Studio - UVAQ',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        icon: GitHub,
        href:
          'https://github.com/ingrauladolfo/portalGaming-desarrolloMultimedia-UVAQ/',
      },
      {
        icon: Link,
        href: 'https://kalistudio.vercel.app/',
      },
    ],
  },
  {
    index: 18,
    title: 'Todo List - Garage Coders',
    description:
      'This project was developed in a technical test at Garage Coders',
    imageUrl: todoList,
    imageAlt: 'Todo List - Garage Coders',
    tags: ['Vite/React', 'Bootstrap'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/todolist-garagecoders-prueba',
      },
      {
        icon: Link,
        href: 'https://todolist-garagecoders-prueba-frontend.vercel.app/',
      },
    ],
  },
  {
    index: 19,
    title: 'Portfolio Next.js v1 - Personal',
    description: 'This was developed as a personal project',
    imageUrl: nextPortfoliov1,
    imageAlt: 'Portfolio Next.js v1 - Personal',
    tags: ['React', 'Next.js', 'styled-components', 'node.js'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/myPortfoliov1-webNextJs',
      },
      {
        icon: Link,
        href: 'https://my-portfoliov1-web-next-js.vercel.app/',
      },
    ],
  },
  {
    index: 20,
    title: 'Portfolio JavaScript vanilla v2 - Personal',
    description: 'This was developed as a personal project',
    imageUrl: vanillaPortfoliov2,
    imageAlt: 'Portfolio JavaScript vanilla v2 - Personal',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/myPortfoliov2-nativeWeb',
      },
      {
        icon: Link,
        href: 'https://my-portfoliov2-native-web.vercel.app/',
      },
    ],
  },
  {
    index: 21,
    title: 'Portfolio Angular v2 - Personal',
    description: 'This was developed as a personal project',
    imageUrl: angularPortfoliov2,
    imageAlt: 'Portfolio Angular v2 - Personal',
    tags: ['Angular', 'TypeScript', 'PrimeNg'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/myPortfoliov2-webAngular',
      },
      {
        icon: Link,
        href: 'https://my-portfolio-web-angular.vercel.app/',
      },
    ],
  },
  {
    index: 22,
    title: 'Portfolio React v1 - Personal',
    description: 'This was developed as a personal project',
    imageUrl: reactPortfoliov1,
    imageAlt: 'Portfolio React v1 - Personal',
    tags: ['React', 'Bootstrap'],
    links: [
      {
        icon: GitHub,
        href: 'https://github.com/ingrauladolfo/myPortfoliov1-ReactWeb',
      },
      {
        icon: Link,
        href: 'https://my-portfoliov1-react-web.vercel.app/',
      },
    ],
  },
]
