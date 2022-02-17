import ljudio from './assets/ljudio.png';
import todo from './assets/todo.png';
import ecomerce from './assets/ecomerce.png';

export const projectObjects = [
   {
      id: 1,
      techStack: ['React', 'Node.js', 'SQLlite', 'CSS', 'Express'],
      img: ljudio,
      decsription: `As a school project we made a music app. Where you are able to search for music, create playlists and add your favorite music to the playlist. You can also create a account and login to it where your music is saved`,
      url: 'https://github.com/wpmeal/ljudio',
   },
   {
      id: 2,
      techStack: [
         'React',
         'Node.js',
         'Postgres SQL',
         'CSS styled-components',
         'Express',
      ],
      img: todo,
      decsription: `Made a fullstack todo-list app. Where you are able to create, add, delete and update your list.`,
      url: 'https://github.com/Ace1313/Todo-list',
   },
   {
      id: 3,
      techStack: ['React', 'typeScript', 'CSS'],
      img: ecomerce,
      decsription: `A ecomerce app with localStorage. Also worked with TDD on this project and Docker.`,
      url: 'https://github.com/Ace1313/ecommercTS',
   },
];
