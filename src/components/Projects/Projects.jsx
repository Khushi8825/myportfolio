// src/components/Projects/Projects.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiFileText } from "react-icons/fi";
import { projects, TechIconMap, DefaultTechIcon } from "../../constants.js";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TechBadge = ({ name }) => {
  const entry = TechIconMap[name];
  const Icon = entry?.logo || DefaultTechIcon;
  const color = entry?.color || "#b393ea";
  return (
    <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs sm:text-sm text-gray-300 transition-all duration-300 hover:border-[#8245ec]/60 hover:bg-white/10">
      <Icon style={{ color }} className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
      {name}
    </span>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div variants={cardVariants} className="group relative h-full">
    {/* Gradient border wrapper */}
    <div className="relative h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-[#8245ec] via-white/10 to-[#8245ec]/40 transition-all duration-500 group-hover:from-[#a855f7] group-hover:to-white/40">
      <div className="relative h-full flex flex-col rounded-2xl bg-gray-900/70 backdrop-blur-xl p-6 sm:p-7 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
        {/* Banner / placeholder */}
        <div className="w-full h-36 sm:h-40 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-[#1a1330] via-[#241a3f] to-[#0d081f] border border-white/10 overflow-hidden">
          <span className="text-3xl sm:text-4xl font-bold tracking-wide text-white/10 select-none">
            {project.title}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-[#b393ea] font-semibold mb-3">
          {project.subtitle}
        </p>

        {/* Overview */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          {project.overview}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Key features */}
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Key Features</h4>
          <ul className="space-y-1.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8245ec] flex-shrink-0"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges solved */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Challenges Solved</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
        </div>

        {/* Spacer pushes buttons to bottom for equal card heights */}
        <div className="flex-grow" />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-black bg-gradient-to-r from-white to-[#c9aef0] px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <FiExternalLink /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-500 border border-gray-700 px-4 py-2 rounded-full cursor-not-allowed">
              <FiExternalLink /> Live Demo Soon
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:border-[#8245ec] hover:bg-white/5"
            >
              <FiGithub /> GitHub
            </a>
          ) : (
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-500 border border-gray-700 px-4 py-2 rounded-full cursor-not-allowed">
              <FiGithub /> Repo Soon
            </span>
          )}

          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white border border-white/30 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:border-[#8245ec] hover:bg-white/5"
            >
              <FiFileText /> Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section
    id="projects"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#b393ea] to-[#8245ec] bg-clip-text text-transparent">
        PROJECTS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A selection of full-stack applications I've designed, built, and shipped end to end
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  </section>
);

export default Projects;
