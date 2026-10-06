import { motion, useReducedMotion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const previousEducation = [
  {
    qualification: "12th / Higher Secondary",
    institution: "Shree Vitthal Prashala Junior College",
    board: "Maharashtra State Board",
    year: "2023",
    result: "74.50%",
  },
  {
    qualification: "10th / Secondary",
    institution: "Shree Vitthal Prashala",
    board: "Maharashtra State Board",
    year: "2021",
    result: "87.80%",
  },
];

const Education = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardAnimation = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative overflow-hidden bg-(--page-bg) px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          {...cardAnimation()}
          className="mb-10 max-w-2xl sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent-color)">
            Academic background
          </p>
          <h2
            id="education-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-(--text-color) sm:text-4xl"
          >
            Education
          </h2>
          <p className="mt-4 text-base leading-7 text-(--muted-color) sm:text-lg">
            My current studies in Computer Engineering and earlier academic qualifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <motion.article
            {...cardAnimation(0.06)}
            className="h-full rounded-2xl border p-5 bg-(--surface-color) border-(--border-color) sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-(--accent-color) bg-(--raised-color)" aria-hidden="true">
                  <FaGraduationCap className="text-xl" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-(--accent-color)">
                    Current studies
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug text-(--text-color) sm:text-xl">
                    Bachelor of Engineering (B.E.)
                  </h3>
                  <p className="mt-1 text-sm text-(--muted-color)">Computer Engineering</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border px-3 py-1 text-xs font-semibold text-(--accent-color) bg-(--raised-color) border-(--border-color)">
                Final Year
              </span>
            </div>

            <div className="mt-6 space-y-4 border-t pt-5 border-(--border-color)">
              <div className="flex items-start gap-3">
                <FaUniversity aria-hidden="true" className="mt-1 shrink-0 text-(--accent-color)" />
                <div>
                  <p className="font-medium text-(--text-color)">Vidya Niketan College of Engineering</p>
                  <p className="mt-1 text-sm text-(--muted-color)">Savitribai Phule Pune University (SPPU)</p>
                </div>
              </div>
              <dl className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border p-3 bg-(--raised-color) border-(--border-color)">
                  <dt className="text-(--muted-color)">Graduation year</dt>
                  <dd className="mt-1 font-medium text-(--text-color)">2027</dd>
                </div>
                <div className="rounded-xl border p-3 bg-(--raised-color) border-(--border-color)">
                  <dt className="text-(--muted-color)">CGPA / percentage</dt>
                  <dd className="mt-1 font-medium text-(--text-color)">Pending graduation</dd>
                </div>
              </dl>
            </div>
          </motion.article>

          <motion.article
            {...cardAnimation(0.12)}
            className="h-full rounded-2xl border p-5 bg-(--surface-color) border-(--border-color) sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-(--accent-color) bg-(--raised-color)" aria-hidden="true">
                <FaUniversity className="text-lg" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-(--muted-color)">
                  Previous education
                </p>
                <h3 className="mt-1 text-lg font-semibold text-(--text-color)">
                  Earlier qualifications
                </h3>
              </div>
            </div>

            <ul className="mt-5 divide-y divide-(--border-color)">
              {previousEducation.map(({ qualification, institution, board, year, result }) => (
                <li key={qualification} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className="font-medium text-(--text-color)">{qualification}</p>
                    <p className="text-sm font-medium text-(--accent-color)">{year} · {result}</p>
                  </div>
                  <p className="mt-1 text-sm leading-5 text-(--muted-color)">
                    {institution} · {board}
                  </p>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Education;
