export type slide = {
  id: number;
  title: string;
  description: string;
  skills: string;
  src: string;
  link: string;
};

export const slides: Array<slide> = [
  {
    id: 0,
    title: "Minerva",
    description:
      "Aplicação WEB criada para diminuir o trabalho manual de planejamento escolar e facilitar o acesso dos pais à situação de estudo dos alunos.",
    skills: "NextJS, Typescript, JWT, SWR",
    src: "/images/minerva-03.jpg",
    link: "https://minerva-app.netlify.app/",
  },
  {
    id: 1,
    title: "Github Finder",
    description:
      "Aplicação WEB que expõe dados públicos de usuários do GitHub, através de sua API.",
    skills: "ReactJS, Typescript",
    src: "/images/github-finder.jpg",
    link: "https://luizrodrigues12.github.io/github-finder/",
  },
];
