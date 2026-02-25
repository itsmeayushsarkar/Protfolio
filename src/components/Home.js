import React from "react";
import { Link } from "react-scroll";
import { FiArrowDown } from "react-icons/fi";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-20 -right-32 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        {/* Greeting badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40 rounded-full">
          👋 Welcome to my portfolio
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Ayush
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
          Beginner Web Developer
        </p>

        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          I'm a passionate student developer on an exciting learning journey.
          I love turning ideas into beautiful, functional websites and
          continuously expanding my skills in modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="projects"
            smooth
            offset={-64}
            duration={500}
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all cursor-pointer active:scale-95"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth
            offset={-64}
            duration={500}
            className="px-8 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer active:scale-95"
          >
            Contact Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <Link
            to="about"
            smooth
            offset={-64}
            duration={500}
            className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 cursor-pointer hover:text-indigo-500 transition-colors"
          >
            Scroll Down <FiArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
}
