interface InterfaceProjects {
  id: number;
  link: string;
  repo_link: string;
  img?: string;
  title: string;
  subTitle: string;
  description: string;
}

const projects: InterfaceProjects[] = [
  {
    id: 1,
    link: ' https://github.com/seand52/Telegram_football_bot',
    repo_link: 'https://github.com/seand52/Telegram_football_bot',
    title: 'Football Reporter Bot',
    subTitle: 'Never miss another match!',
    description:
      'This bot retrieves the next game/s of your favourite Premier League/La Liga team!',
  },
  {
    id: 2,
    link: 'https://vigorous-roentgen-11585f.netlify.com',
    repo_link: 'https://github.com/seand52/whatsapp-data',
    title: 'Whatsapp Analysis',
    subTitle: 'Visualise Whatsapp chat data',
    description:
      'View interesting data about your group chats and show your friends!',
  },
  {
    id: 3,
    link: 'https://ultra-road.surge.sh',
    repo_link: 'https://github.com/seand52/Book-Shop',
    title: 'Book store',
    subTitle: 'Simple book store app',
    description: 'CRUD app made with Golang API and React (Redux)',
  },
];

export { projects, InterfaceProjects };
