import React from "react";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
          &copy; {year} Ayush. Built with
          <FiHeart className="text-red-500 inline" />
          using React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
