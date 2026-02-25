import React, { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://twitter.com/", label: "Twitter" },
  { icon: <FaInstagram />, href: "https://instagram.com/", label: "Instagram" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with EmailJS, Formspree, etc.
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="mt-3 w-16 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FiMail className="text-indigo-600 dark:text-indigo-400 text-lg" />
                <span>sarkarayush2021@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FiMapPin className="text-indigo-600 dark:text-indigo-400 text-lg" />
                <span>India</span>
              </div>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Follow me
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-0.5 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all active:scale-95"
              >
                <FiSend size={16} /> Send Message
              </button>

              {submitted && (
                <p className="text-center text-sm text-green-600 dark:text-green-400 font-medium animate-fade-in">
                  ✅ Message sent successfully!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
