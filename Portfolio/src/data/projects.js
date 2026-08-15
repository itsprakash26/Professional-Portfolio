import favicon from "../assets/images/favicon.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

export const projects = [
  {
    id: 1,
    title: "ai-interview-coach",
    image: favicon,
     description: "AI-powered interview platform for personalized questions, answer evaluation, scoring, and interview feedback.",
technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    github: "https://github.com/itsprakash26/ai-interview-coach",
    live: "https://ai-interview-coach-sfem.vercel.app/",
  },

  {
    id: 2,
    title: "Task Management App",
    image: project2,
    description:
      "Organize tasks with drag-and-drop functionality and authentication.",
    technologies: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "Crypto Dashboard",
    image: project3,
    description:
      "Track cryptocurrency prices with beautiful charts and analytics.",
    technologies: ["React", "Chart.js", "API"],
    github: "#",
    live: "#",
  },
];