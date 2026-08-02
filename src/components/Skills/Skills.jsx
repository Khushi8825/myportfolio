// src/components/Skills/Skills.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants.js";
import Tilt from "react-parallax-tilt";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#b393ea] to-[#8245ec] bg-clip-text text-transparent">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <motion.div
      className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {SkillsInfo.map((category) => (
        <motion.div
          key={category.title}
          variants={cardVariants}
          className="bg-gray-900/60 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white/20
          shadow-[0_0_20px_1px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(130,69,236,0.35)] hover:border-[#8245ec]/50"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => {
                const Icon = skill.logo;
                return (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-4 text-center w-full max-w-[130px]
                    transition-all duration-300 hover:border-[#8245ec] hover:-translate-y-1 hover:bg-white/5"
                  >
                    <Icon
                      style={{ color: skill.color }}
                      className="w-6 h-6 sm:w-8 sm:h-8 mb-1 transition-transform duration-300 group-hover:scale-125"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
