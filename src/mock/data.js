import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Joseph Crawley | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my developer portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am ',
  name: 'Joseph Crawley',
  subtitle: 'I am a software developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  // img: 'profile.jpg',
  paragraphOne:
    'I love learning new technologies, I want to make software more accessible for users and encourage people to engage with computers in a deeper way. I see my role as a software developer and engineer as to empower the people who use my software to achieve their own ends.',
  paragraphTwo: 'I am currently on a programming bootcamp run by Softwire called Techswitch.',
  paragraphThree:
    'I love to work in FrontEnd web development, I enjoy the challenge of creating, deploying, and improving websites. My favourite technologies at the moment are Typescript, NextJS and SCSS',
  resume: 'https://drive.google.com/open?id=1igEuUM8gOLkmWsASdOjpZZvReFst9sRb', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'testswitchproject.jpg',
    title: 'TestSwitch',
    info: 'Using NextJS, Monaco, ASP.NET, and PostgreSQL to create an online tech test platform',
    info2:
      'An online platform to run tech tests, TestSwitch is an ongoing team project by the current cohort of Techswitch, due for final release May 7th.  Technologies Used: NextJS, React, Typescript, SASS, NPM, Git, Github, Trello, Jest, React-Testing Library CircleCI, Heroku',
    url: 'https://testswitch-candidate.herokuapp.com/',
    repo: 'https://github.com/techswitch-learners/testswitch-frontend-candidate', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'marsmissionproject.jpg',
    title: 'MarsMission',
    info:
      'A React based website to educate children about NASA’s Mars Rovers A team of seven of us worked together to make a website from the ground up over the course of a week using NASA’s public APIs.',
    info2:
      'For many of us it was our first team software development project, learning how to work effectively in pairs as well as a whole team. In this project I used Typescript for the first time to create type definitions for the whole team for use in common components. Technologies Used: React, Typescript, SASS, Yarn, Git, Github, Trello, Jest, CircleCI, Heroku',
    url: 'https://techswitch-mars-mission.herokuapp.com/',
    repo: 'https://github.com/techswitch-learners/mars-mission', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'busboardproject.jpg',
    title: 'BusBoard',
    info:
      'A console based C# app that takes in a Postcode and Returns bus arrival times from the TFL public API.',
    info2:
      'One of my first projects to involve using APIs, this program used the TFL API aswell as a the PostcodeIO API. I used to PostcodeIO API to validate postcode and then convert them into LonLat coordinates, which are then passed to the TFL API to look for nearby endpoints with type BusStop and their arrival times. I then formatted that info to display bus arrival times. Technologies Used: C#, .NetCore, TFL API, PostcodeIO',
    url: 'https://github.com/Espe-on/busboard-csharp-template',
    repo: 'https://github.com/Espe-on/busboard-csharp-template', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'personalprofileproject.jpg',
    title: 'Personal ProfilePage',
    info: 'Developing a Profile Page for the next version of the website',
    info2:
      'Using the technologies learnt while on my tech bootcamp I am building a custom personal profile page using NextJS. Technologies Used: NextJs, React, Typescript, SASS, NPM, Git, Github, Zeit',
    url: 'https://profile-page-gold.now.sh/',
    repo: 'https://github.com/Espe-on/profile_page', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'wpkgproject.jpg',
    title: 'WPKG Software Deployment',
    info:
      ' Building packages to install software and push software updates to Windows based visual effects and designers. I managed the automatic deployment of software, licenses, and plugins for Adobe suite. This involved writing .xml files to define how the software was to be installed, what consisted as a successful installation, and what indicated an incorrect installation',
    info2: 'Technologies Used: WPKG, Git, XML, Batch Scripting',
    url: 'https://wpkg.org/Main_Page',
    repo: 'https://wpkg.org/Main_Page', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'joe@threeboys.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/home',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joseph-crawley-0895b6180/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Espe-on/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
