import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", level: 85 },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", level: 80 },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500", level: 70 },
  { name: "React", icon: <FaReact />, color: "text-cyan-500", level: 65 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500", level: 75 },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-800 dark:text-gray-200", level: 70 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="mt-3 w-16 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Technologies I've been learning and working with
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`text-4xl ${skill.color} flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                {skill.name}
              </h3>

              {/* Progress bar */}
              <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
