export interface CardProjectData {
  img: string;
  title: string;
  content: string;
  languages: string[];
  urlcode: string;
  urlDemo: string;
  urlDemoVideo?: string;
  haveUrlDemo: boolean;
}

export const Projects: CardProjectData[] = [
  {
    img: "/project-img/project7.png",
    title: "Github Commits",
    content:
      "A project that show commits from this project and also from others users (if it is allow to show those commits) depends on a server base on NESTJS who handle API request to Github.",
    languages: ["DOCKER", "REACT", "JAVASCRIPT", "REDUX/TOOLKIT", "NESTJS"],
    urlcode: "https://github.com/luigifgp/test-home",
    urlDemo: "https://test-home-delta.vercel.app/",
    haveUrlDemo: false,
  },
  {
    img: "/project-img/project1.png",
    title: "Clothes Sell Web",
    content:
      "A website to sell clothes, the customers are able to add them wishes clothes to a car and pay for them.",
    languages: ["SCSS", "REACT", "JAVASCRIPT", "FIREBASE", "STRIPE", "REDUX"],
    urlcode: "https://github.com/luigifgp/clothes_sell_web",
    urlDemo: "http://18.184.213.184:5000/",
    haveUrlDemo: false,
  },
  {
    img: "/project-img/project4.png",
    title: "Analyst Coin App",
    content:
      "A flutter app to watch the prices of your preference coin , you can see the graph and activate and alarm when the price reach the price of your choose.",
    languages: ["FLUTTER", "DART", "CRYPTOCURRENCY", "FIREBASE", "REDUX"],
    urlcode: "https://github.com/luigifgp/analyst_coin_app",
    urlDemo: "",
    urlDemoVideo: "https://youtu.be/Jx6ODBcA_Bg",
    haveUrlDemo: false,
  },
  {
    img: "/project-img/project3.png",
    title: "Coaching workout Website",
    content:
      "Services seller app about encourage the customers to be more healthy and achieve them goals in life.",
    languages: [
      "TAILWINDCSS",
      "TYPESCRIPT",
      "REACT",
      "STRIPE",
      "FIREBASE",
      "REDUX",
    ],
    urlcode: "https://github.com/luigifgp/coaching-workout-app",
    urlDemo: "http://18.184.213.184:3000/",
    haveUrlDemo: false,
  },
  {
    img: "/project-img/project2.png",
    title: "User Framework with Typescript",
    content:
      "A hard coded framework with typescript, is able to change the name of the user or get a random age, you can also save the information. This framework is reusableful, I integrated a dynamic way that is possible to use with others kind of data.",
    languages: ["TYPESCRIPT", "HTML"],
    urlcode: "https://github.com/luigifgp/user-Framework-TS",
    urlDemo: "http://18.184.213.184",
    haveUrlDemo: false,
  },

  {
    img: "/project-img/project5.png",
    title: "Youtube Copy",
    content:
      " I built a youtube copy or some of it. it possible to comment the video, give like or dislike to it .you can follow the creator that you believe has good content. the user profile is allow to change your image profile and upload new videos.",
    languages: [
      "SCSS",
      "JAVASCRIPT",
      "SAILSJS",
      "MONDODB",
      "REACT",
      "REDUX",
      "AWS BUCKET",
    ],
    urlcode: "https://github.com/luigifgp/videos-web-app",
    urlDemo: "",
    urlDemoVideo: "https://youtu.be/2prCA1hNRok",
    haveUrlDemo: false,
  },
  {
    img: "/project-img/project6.png",
    title: "Fast Scooter",
    content:
      "This app can take a excel file  of scooters location a set it on a google map as a marker",
    languages: ["EXPRESSJS", "MONDODB", "SASS", "JAVASCRIPT", "REACT"],
    urlcode: "https://github.com/luigifgp/fast-scooter",
    urlDemo: "",
    haveUrlDemo: true,
  },
];

