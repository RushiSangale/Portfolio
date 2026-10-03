import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080b14] pt-20"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-lg font-medium text-indigo-400"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
            >
              Rushikesh{" "}
              <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Sangale
              </span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 text-2xl font-semibold text-slate-200"
            >
              Java Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-5 max-w-xl text-lg leading-8 text-slate-400"
            >
              I build clean, responsive and practical web applications
              using Java, Spring Boot and React.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-5"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400"
              >
                View My Work
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500"
              >
                Download Resume
                <FaDownload />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-9 flex items-center gap-5"
            >
              <span className="text-sm text-slate-500">
                Connect with me
              </span>

              <a
                href="https://github.com/RushiSangale"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-slate-400 transition hover:-translate-y-1 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-xl text-slate-400 transition hover:-translate-y-1 hover:text-indigo-400"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>

          {/* Right Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden justify-center lg:flex"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-80 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-2xl backdrop-blur-xl"
            >

              {/* Initials */}
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-500/10">
                <span className="text-4xl font-bold text-indigo-300">
                  RS
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Rushikesh Sangale
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Java Full Stack Developer
              </p>

              <div className="my-7 h-px bg-slate-800" />

              <p className="text-xs uppercase tracking-widest text-slate-500">
                Tech Stack
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="rounded-lg bg-orange-500/10 px-3 py-2 text-xs text-orange-300">
                  Java
                </span>

                <span className="rounded-lg bg-green-500/10 px-3 py-2 text-xs text-green-300">
                  Spring Boot
                </span>

                <span className="rounded-lg bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300">
                  React
                </span>

                <span className="rounded-lg bg-blue-500/10 px-3 py-2 text-xs text-blue-300">
                  MySQL
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                <p className="text-xs text-slate-500">
                  Currently building
                </p>

                <p className="mt-1 text-sm font-medium text-indigo-300">
                  Full Stack Applications
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;