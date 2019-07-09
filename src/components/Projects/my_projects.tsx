interface InterfaceProjects {
  id: number;
  link: string;
  img?: string;
  title: string;
  subTitle: string;
  description: string;
}

const projects: InterfaceProjects[] = [
  {
    id: 1,
    link: 'http://google.com',
    title: 'Project 1',
    subTitle: 'Project 1 Subtitle',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
  },
  {
    id: 2,
    link: 'http://google.com',
    title: 'Project 2',
    subTitle: 'Project 2 Subtitle',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
  },
  {
    id: 3,
    link: 'http://google.com',
    title: 'Project 3',
    subTitle: 'Project 3 Subtitle',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
  },
];

export { projects, InterfaceProjects };
