import { ProjectDetails } from './type';

const projects: ProjectDetails[] = [
  {
    name: 'PokeWar',
    description:
      'A full-stack application that makes use of firebase to make a 3v3 multiplayer pokemon game, that is updated in realtime and auth',
    imageUrl: '/PokeWar.gif',
    websiteLink: 'https://poke-war-4483c.web.app/',
    technologies: [
      'FaReact',
      'SiExpress',
      'SiJavascript',
      'SiSequelize',
      'SiPostgresql',
      'SiFirebase',
    ],
  },
  {
    name: 'Chaotic Cheesecake',
    description:
      'A full-stack ecommerce application using react and materialUI, for buying your favorite flavors of cake',
    imageUrl: '/chaotic-cheesecake.gif',
    websiteLink: 'https://chaotic-cheesecake.herokuapp.com/',
    technologies: [
      'FaReact',
      'SiExpress',
      'SiJavascript',
      'SiSequelize',
      'SiPostgresql',
      'SiHeroku',
    ],
  },
];

export default projects;
