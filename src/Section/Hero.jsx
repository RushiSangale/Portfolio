import { useReducedMotion, motion } from "framer-motion";
import resumePdf from "../assets/Rushikesh_Sangale_Resume.pdf";
import { FaArrowRight, FaCode, FaDownload } from "react-icons/fa";

const technologyGroups = [
  { label: "Backend", items: ["Java", "Spring Boot", "Hibernate / JPA"] },
  { label: "Frontend", items: ["React", "JavaScript", "Tailwind CSS"] },
  { label: "Database & tools", items: ["MySQL", "Git & GitHub", "Postman"] },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0 : 0.5;
  const movement = shouldReduceMotion ? 0 : 18;

  const contentVariants = {
    hidden: { opacity: 0, y: movement },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: movement },
    visible: { opacity: 1, y: 0, transition: { duration } },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-(--page-bg) pb-16 pt-28 transition-colors duration-300 sm:pb-20 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-136 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 72% 10%, var(--accent-soft), transparent 66%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-(--muted-color) bg-(--surface-color) border-(--border-color) sm:text-base"
          >
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Computer Engineering Student
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-8 max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight text-(--text-color) sm:text-6xl lg:text-7xl"
          >
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Java</span>
            <br />
            Full Stack
            <br />
            Developer
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-8 text-(--muted-color) sm:text-xl"
          >
            I build practical, user-focused web applications with Java, Spring Boot, React, and MySQL, bringing thoughtful interfaces together with reliable full-stack foundations.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-linear-to-r from-cyan-400 to-blue-600 px-7 py-3 font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color)"
            >
              <span>View My Work</span>
              <FaArrowRight aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={resumePdf}
              download="Rushikesh_Sangale_Resume.pdf"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border px-7 py-3 font-semibold text-(--text-color) bg-(--surface-color) border-(--border-color) transition duration-200 hover:-translate-y-0.5 hover:border-(--accent-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color)"
            >
              <span>Download Resume</span>
              <FaDownload aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : movement }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration, delay: shouldReduceMotion ? 0 : 0.12 }}
          aria-label="Technology toolkit"
          className="relative mx-auto w-full max-w-xl lg:ml-auto"
        >
          <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-4xl opacity-70 blur-2xl" style={{ backgroundColor: "var(--accent-soft)" }} />
          <div className="rounded-3xl border p-6 shadow-xl bg-(--surface-color) border-(--border-color) sm:p-8">
            <div className="flex items-center gap-4 border-b pb-6 border-(--border-color)">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-(--accent-color) bg-(--raised-color)">
                <FaCode aria-hidden="true" className="text-2xl" />
              </div>
              <div>
                <p className="text-sm font-semibold text-(--text-color)">Developer Toolkit</p>
                <h2 className="mt-1 text-base text-(--muted-color) sm:text-lg">Building across the stack</h2>
              </div>
            </div>
            <div className="space-y-6 pt-6">
              {technologyGroups.map(({ label, items }) => (
                <div key={label}>
                  <h3 className="mb-3 text-sm font-medium text-(--muted-color)">{label}</h3>
                  <ul className="flex flex-wrap gap-2" aria-label={label}>
                    {items.map((item) => (
                      <li key={item} className="rounded-lg border px-3 py-2 text-sm font-medium text-(--text-color) bg-(--raised-color) border-(--border-color)">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
