import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const PROJECTS = [
  {
    id: 1,
    title: "Example React Appliction",
    description:
      "A React App that I built, involving JS and core web dev concepts!",
    // link: "https://github.com/ndindiri/portfolio",
    link: "https://newtalents.netlify.app/",
    image: project1,
  },
  {
    id: 2,
    title: "My API",
    description:
      "A REST API that I built from scratch with GET and POST requests!",
    link: "https://github.com/ndindiri/Cocktails",
    image: project2,
  },
  {
    id: 3,
    title: "Lutheran Mission In Africa",
    description: "My Unique Final Website for my Church.",
    link: "https://ndindiri.github.io/LutheranMissionInAfrica/",
    image: project3,
  },
];

export default PROJECTS;
