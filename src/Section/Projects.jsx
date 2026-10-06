import { motion, useReducedMotion } from "framer-motion";
import { FaCode, FaFilm, FaGithub } from "react-icons/fa";
import gymImage from "../assets/GYM-web.png";
import ecommerceImage from "../assets/E-comm.png";

const projects = [
  {
    name: "Movie Ticket Booking System",
    type: "Full Stack Web Application",
    description:
      "A full-stack movie ticket booking application with a React frontend and Spring Boot backend.",
    image: null,
    imageAlt: "",
    technologies: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Hibernate / JPA",
      "MySQL",
      "REST API",
    ],
    features: [
      "Browse movies, view details, and book tickets",
      "Secure user authentication with Spring Security and JWT",
      "REST APIs with database integration",
    ],
  },
  {
    name: "Gym Management System",
    type: "Java Web Application",
    description:
      "A gym management web application for members, membership plans, payments, and day-to-day gym operations.",
    image: gymImage,
    imageAlt: "Gym website homepage with a fitness themed hero image",
    technologies: ["Core Java", "JDBC", "Servlets", "JSP", "SQL / MySQL"],
    features: [
      "User registration, login, and member management",
      "Membership plans and plan purchasing with payment flow",
      "Admin and user dashboards with recent payment and member information",
    ],
  },
  {
    name: "E-Commerce Website",
    type: "Frontend Web Application",
    description:
      "A responsive e-commerce frontend for browsing products and moving through a shopping and checkout experience.",
    image: ecommerceImage,
    imageAlt: "E-commerce storefront homepage showing an online shop design",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    features: [
      "Product listings, product cards, search, and product details",
      "Shopping cart and checkout form interface",
      "Responsive user interface",
    ],
  },
];

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
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
            Selected work
          </p>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-(--text-color) sm:text-4xl"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-(--muted-color) sm:text-lg">
            A selection of web applications spanning full-stack development and responsive frontend experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-(--surface-color) border-(--border-color) transition duration-200 hover:-translate-y-1 hover:border-(--accent-color) hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="relative aspect-video overflow-hidden border-b bg-(--raised-color) border-(--border-color)">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label="Movie booking project image placeholder"
                    className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-(--raised-color) via-(--surface-color) to-(--raised-color) text-(--muted-color)"
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border text-(--accent-color) bg-(--surface-color) border-(--border-color)" aria-hidden="true">
                      <FaFilm className="text-2xl" />
                    </span>
                    <span className="text-sm font-medium">Movie project image needed</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-(--text-color)">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-(--accent-color)">
                      {project.type}
                    </p>
                  </div>
                  <FaCode aria-hidden="true" className="mt-1 shrink-0 text-lg text-(--muted-color)" />
                </div>

                <p className="mt-4 text-sm leading-6 text-(--muted-color)">
                  {project.description}
                </p>

                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-(--muted-color)">
                    Technologies
                  </h4>
                  <ul className="mt-2.5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-lg border px-2.5 py-1.5 text-xs font-medium text-(--text-color) bg-(--raised-color) border-(--border-color)"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-(--muted-color)">
                    Highlights
                  </h4>
                  <ul className="mt-2.5 space-y-2 text-sm leading-5 text-(--muted-color)">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent-color)" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <span
                    aria-label={`${project.name}: GitHub repository URL needed`}
                    title="Add the public GitHub repository URL to enable this link."
                    className="inline-flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold text-(--muted-color) bg-(--raised-color) border-(--border-color)"
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub link needed
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
