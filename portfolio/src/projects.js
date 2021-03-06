import sketch from './imgs/Project_Imgs/sketch-draw.png'
import capsule from './imgs/Project_Imgs/capsule.png'
import ding from './imgs/Project_Imgs/ding-home.png'
import curate from './imgs/Project_Imgs/curate-canvas.png'

export const projects = [
  {
    title: 'Sketch-N-Guess',
    description: 'A two played drawing game that prompts players to take turns drawing and guessing a provided word.',
    tech: 'HTML, Vanilla JS, LocalStorage, CSS, Vanilla-Picker API',
    date: 'February 2021',
    link: "https://ad-voice.surge.sh/",
    repo: "https://github.com/siobahnschuck/sketch-n-guess",
    image: sketch
  },
  {
    title: 'TimeCapped',
    description: 'An anonymous submission based time capsule. When you contribute any piece of media to the capsule you are rewarded with something from inside that you can then choose to permanently delete.',
    tech: 'React, MongoDB, Node.js, Express, HTML/JS/CSS',
    date: 'March 2021',
    link: 'https://enigmatic-ocean-53010.herokuapp.com/',
    repo: "https://github.com/siobahnschuck/timeCapped",
    image: capsule
  },
  {
    title: 'Ding!',
    description: 'A fullstack application where users can customize their dashboard portal with ingredients they have on hand, and find recipes they can make with those ingredients. As well as browse other recipes, find restaurants near them, and add recipes to the community.',
    tech: 'PostgreSQL, Sequelize, Express, React, React-hooks, RESTful API, MaterialUI, HTML/JS/CSS',
    date: 'March 2021',
    link: 'https://glacial-meadow-53009.herokuapp.com/',
    repo: "https://github.com/siobahnschuck/ding",
    image: ding
  },
  {
    title: 'Curate',
    description: "A digital art exhibition created by it's users.",
    tech: 'Python, Flask-SQLAlchemy, React, Redux, React-Color, React-Icons, Bootstrap, HTML/CSS/JS',
    date: 'April 2021',
    link: 'https://eloquent-galileo-e428a9.netlify.app/',
    repo: "https://github.com/siobahnschuck/Curate",
    image: curate
  },
]