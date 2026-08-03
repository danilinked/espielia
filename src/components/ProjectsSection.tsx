import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/lib/projects";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <ScrollReveal delay={index % 2 === 0 ? 0 : 0.15}>
      <Link to={`/project/${project.id}`} className="group block">
        <div className="overflow-hidden rounded-lg bg-secondary mb-5">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <h3 className="heading-sm mb-1 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="body-md">{project.description}</p>
      </Link>
    </ScrollReveal>
  );
};

const ProjectsSection = () => {
  return (
    <section id="work" className="py-32 section-padding">
      <div className="section-container">
        <ScrollReveal>
          <p className="label-text mb-4">PROYECTOS SELECCIONADOS</p>
          <h2 className="heading-lg mb-16 max-w-3xl">
            Que combinan pensamiento de diseño con ejecución creativa
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
