import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0c1327] rounded-2xl overflow-hidden border border-gray-800 hover:border-violet-500"
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover hover:scale-110 duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-400 mt-4 leading-7">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mt-6">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-violet-600/20 text-violet-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-violet-600 px-5 py-3 rounded-lg transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-violet-500 hover:bg-violet-600 px-5 py-3 rounded-lg transition"
          >
            Live
            <FiExternalLink />
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;