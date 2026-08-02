// src/components/Achievements/Achievements.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";
import { TbTrophy } from "react-icons/tb";
import { achievements, certifications } from "../../constants.js";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AchievementCard = ({ achievement }) => (
  <motion.div
    variants={cardVariants}
    className="group bg-gray-900/60 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-[0_0_20px_1px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8245ec]/60 hover:shadow-[0_0_30px_4px_rgba(130,69,236,0.35)]"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8245ec] to-[#4b2a80] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <TbTrophy className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{achievement.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-gray-500">{achievement.date}</span>
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold text-[#b393ea] hover:text-white transition-colors"
            >
              View <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const CertificationCard = ({ cert }) => {
  const Icon = cert.logo || FiAward;
  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#8245ec] via-white/10 to-[#8245ec]/40 transition-all duration-500 hover:from-[#a855f7] hover:to-white/40"
    >
      <div className="h-full rounded-2xl bg-gray-900/70 backdrop-blur-xl p-6 flex flex-col transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Icon style={{ color: cert.color || "#8245ec" }} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-semibold leading-tight">{cert.title}</h3>
            <p className="text-sm text-[#b393ea]">{cert.organization}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">{cert.issued}</p>
        <div className="flex-grow" />
        {cert.certificateUrl ? (
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white border border-white/30 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:border-[#8245ec] hover:bg-white/5"
          >
            <FiExternalLink /> View Certificate
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 self-start text-sm font-semibold text-gray-500 border border-gray-700 px-4 py-2 rounded-full cursor-not-allowed">
            <FiExternalLink /> Coming Soon
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Achievements = () => (
  <section
    id="achievements"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom-3"
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
        ACHIEVEMENTS &amp; CERTIFICATIONS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        Recognition, leadership, and continuous learning along the way
      </p>
    </motion.div>

    {/* Achievements */}
    {achievements.length > 0 && (
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-gray-300 mb-6">Achievements</h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.map((achievement, i) => (
            <AchievementCard key={i} achievement={achievement} />
          ))}
        </motion.div>
      </div>
    )}

    {/* Certifications */}
    {certifications.length > 0 && (
      <div>
        <h3 className="text-xl font-semibold text-gray-300 mb-6">Certifications</h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, i) => (
            <CertificationCard key={i} cert={cert} />
          ))}
        </motion.div>
      </div>
    )}
  </section>
);

export default Achievements;
