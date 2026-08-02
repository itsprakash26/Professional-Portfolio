import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

function TechIcons() {
  return (
    <div className="flex gap-7 text-5xl mt-16 text-violet-500">
      <FaHtml5 className="w-12 h-12 text-red-500" />
      <FaCss3Alt className="w-12 h-12 text-blue-500" />
      <FaJs className="w-12 h-12 text-yellow-500" />
      <FaReact className="w-12 h-12 text-sky-500" />
      <SiTailwindcss className="w-12 h-12 text-blue-500" />
      <FaNodeJs className="w-12 h-12 text-green-500" />
      <FaGitAlt className="w-12 h-12 text-orange-500" />
    </div>
  );
}

export default TechIcons;