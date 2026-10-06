import { motion, useReducedMotion } from "framer-motion";
import {
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLeaf,
  FaLock,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming",
    icon: FaCode,
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: FaCode },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { name: "Spring Boot", icon: FaLeaf },
      { name: "Spring MVC", icon: FaServer },
      { name: "Spring Security", icon: FaLock },
      { name: "Hibernate", icon: FaDatabase },
      { name: "JPA", icon: FaDatabase },
      { name: "JDBC", icon: FaCode },
      { name: "REST APIs", icon: FaServer },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: [{ name: "MySQL", icon: FaDatabase }],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: FaCode },
      { name: "VS Code", icon: FaCode },
      { name: "Eclipse", icon: FaCode },
      { name: "Maven", icon: FaTools },
    ],
  },
];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden bg-(--page-bg) px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent-color)">
            What I work with
          </p>
          <h2
            id="skills-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-(--text-color) sm:text-4xl"
          >
            Skills &amp; Technologies
          </h2>
          <p className="mt-4 text-base leading-7 text-(--muted-color) sm:text-lg">
            The languages, frameworks, and tools I use to build full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {skillGroups.map(({ title, icon: GroupIcon, skills }, index) => (
            <motion.article
              key={title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.05 }}
              className={`group rounded-2xl border p-5 transition duration-200 hover:-translate-y-1 hover:border-(--accent-color) hover:shadow-lg hover:shadow-blue-950/10 bg-(--surface-color) border-(--border-color) sm:p-6 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl text-(--accent-color) bg-(--raised-color)" aria-hidden="true">
                  <GroupIcon className="text-lg" />
                </span>
                <h3 className="text-lg font-semibold text-(--text-color)">{title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2.5" aria-label={`${title} skills`}>
                {skills.map(({ name, icon: SkillIcon }) => (
                  <li
                    key={name}
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium text-(--text-color) bg-(--raised-color) border-(--border-color) transition-colors duration-200 group-hover:border-(--border-color)"
                  >
                    <SkillIcon aria-hidden="true" className="shrink-0 text-(--accent-color)" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
