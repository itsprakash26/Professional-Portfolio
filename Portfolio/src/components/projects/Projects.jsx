import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-[#050816] lg:w-full md:w-full w-[550px]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;