import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-[#b393ea] to-[#8245ec] bg-clip-text text-transparent">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-[#8245ec] via-white/40 to-[#8245ec] h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Content Section */}
              <div
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white/20 bg-gray-900/60 backdrop-blur-md shadow-[0_0_20px_1px_rgba(255,255,255,0.15)] ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_4px_rgba(130,69,236,0.35)] hover:border-[#8245ec]/50`}
              >
                {/* Flex container for image and text */}
                <div className="flex items-center space-x-6">
                  {/* School Logo/Image */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center">
                    {edu.img ? (
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      Icon && <Icon className="w-8 h-8 text-[#8245ec]" />
                    )}
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
