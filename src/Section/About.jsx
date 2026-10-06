import { motion, useReducedMotion } from "framer-motion";
import {
  FaBookOpen,
  FaCode,
  FaLightbulb,
  FaPuzzlePiece,
  FaSyncAlt,
  FaTools,
} from "react-icons/fa";

const informationPanels = [
  {
    title: "Current Focus",
    icon: FaCode,
    points: [
      { label: "Java Full Stack Development", icon: FaCode },
      { label: "Spring Boot + React", icon: FaTools },
      { label: "REST API development", icon: FaPuzzlePiece },
      { label: "Problem solving", icon: FaLightbulb },
    ],
  },
  {
    title: "Development Approach",
    icon: FaBookOpen,
    points: [
      { label: "Learn by building", icon: FaCode },
      { label: "Keep code understandable", icon: FaBookOpen },
      { label: "Improve through projects", icon: FaTools },
      { label: "Continuous learning", icon: FaSyncAlt },
    ],
  },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-(--page-bg) px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <motion.div {...reveal()}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent-color)">
            About Me
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-(--text-color) sm:text-4xl"
          >
            From Learning to Building
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-(--muted-color) sm:text-lg sm:leading-8">
            <p>
              My Computer Engineering journey introduced me to software development. Since then, I have been learning Java Full Stack development and exploring how web applications are put together.
            </p>
            <p>
              Building projects has helped me understand how frontend and backend work together through APIs and databases. I enjoy turning concepts I learn into practical applications.
            </p>
            <p>
              I am currently focused on improving my development fundamentals and problem-solving while building better projects.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {informationPanels.map(({ title, icon: PanelIcon, points }, index) => (
            <motion.article
              key={title}
              {...reveal(0.06 + index * 0.08)}
              className="rounded-2xl border p-5 bg-(--surface-color) border-(--border-color) sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl text-(--accent-color) bg-(--raised-color)" aria-hidden="true">
                  <PanelIcon className="text-lg" />
                </span>
                <h3 className="text-lg font-semibold text-(--text-color)">{title}</h3>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1" aria-label={title}>
                {points.map(({ label, icon: PointIcon }) => (
                  <li key={label} className="flex items-center gap-3 text-sm font-medium text-(--muted-color)">
                    <PointIcon aria-hidden="true" className="shrink-0 text-(--accent-color)" />
                    <span>{label}</span>
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

export default About;
