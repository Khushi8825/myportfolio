
import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';//
import {Typewriter} from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/WhatsApp Image 2025-08-09 at 19.35.17_eea2e820.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            KHUSHI
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#b393ea] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                'Frontend Developer',
                // 'App Developer',
                // 'UI/UX Designer',
                'Coder',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            A highly motivated and detail-oriented B.Tech Computer Science (Data Science) student with a strong
            foundation in C++, Data Structures & Algorithms. Passionate about web development, problem-
            solving, and building innovative applications. Seeking opportunities to contribute technical skills and
            grow as a developer.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1s83oclAAZxuVojbPChdecWtCZWpVSDUS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #ffffff, #a855f7, #a855f7, #ffffff',
              // boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #a855f7',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-white-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Khushi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(255,255,255,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
