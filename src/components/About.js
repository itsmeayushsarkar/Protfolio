import React from "react";
import { FaCode, FaPalette, FaRobot } from "react-icons/fa";

const passions = [
  { icon: <FaCode />, title: "Coding", desc: "Building things with code every day" },
  { icon: <FaPalette />, title: "Web Design", desc: "Crafting beautiful user interfaces" },
  { icon: <FaRobot />, title: "AI & Tech", desc: "Exploring artificial intelligence" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-3 w-16 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – Profile Photo */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl rotate-6 opacity-20" />
              <img
                src="/profile.jpg"
                alt="Ayush"
                className="relative w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>

          {/* Right – Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Student Developer &amp; Lifelong Learner
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              I'm a student developer who discovered a love for building
              websites and web applications. Every day, I dive deeper into
              front-end technologies, experiment with new frameworks, and
              push myself to write cleaner, more efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              My goal is to grow into a full-stack developer while
              contributing to meaningful projects. I believe in learning by
              doing, and every project I build teaches me something new.
            </p>

            {/* Passion cards */}
            <div className="grid grid-cols-3 gap-3">
              {passions.map((p) => (
                <div
                  key={p.title}
                  className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl text-indigo-600 dark:text-indigo-400 flex justify-center mb-2">
                    {p.icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {p.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
