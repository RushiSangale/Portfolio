import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Used for the contact link and the prefilled email form action.
const contactEmail = "rushikeshsangle017@gmail.com";
// Used for the LinkedIn contact link.
const linkedInUrl = "https://www.linkedin.com/in/rushi-sangale-1607rg/";

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });

  const contactItems = [
    {
      label: "Email",
      value: contactEmail || "Email address needed",
      icon: FaEnvelope,
      href: contactEmail ? `mailto:${contactEmail}` : null,
    },
    {
      label: "GitHub",
      value: "github.com/RushiSangale",
      icon: FaGithub,
      href: "https://github.com/RushiSangale",
      external: true,
    },
    {
      label: "LinkedIn",
      value: linkedInUrl || "LinkedIn URL needed",
      icon: FaLinkedin,
      href: linkedInUrl || null,
      external: Boolean(linkedInUrl),
    },
    {
      label: "Location",
      value: "Pune, Maharashtra, India",
      icon: FaMapMarkerAlt,
      href: null,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!contactEmail) return;

    const subject = `Portfolio contact from ${formValues.name}`;
    const body = `Name: ${formValues.name}\nEmail: ${formValues.email}\n\n${formValues.message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : delay },
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-(--page-bg) px-5 py-20 transition-colors duration-300 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div {...reveal()} className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--accent-color)">
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-(--text-color) sm:text-4xl"
          >
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-base leading-7 text-(--muted-color) sm:text-lg">
            Have a project, opportunity, or just want to connect? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <motion.div
            {...reveal(0.06)}
            className="h-full rounded-2xl border p-5 bg-(--surface-color) border-(--border-color) sm:p-6"
          >
            <h3 className="text-lg font-semibold text-(--text-color)">Contact information</h3>
            <p className="mt-2 text-sm leading-6 text-(--muted-color)">
              I&apos;m Rushikesh Sangale. You can reach me through the details below or use the email form.
            </p>

            <ul className="mt-6 space-y-3">
              {contactItems.map(({ label, value, icon: Icon, href, external }) => (
                <li key={label}>
                  <div className="flex items-center gap-4 rounded-xl border p-3.5 bg-(--raised-color) border-(--border-color)">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-(--accent-color) bg-(--surface-color)" aria-hidden="true">
                      <Icon className="text-lg" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-(--muted-color)">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="mt-0.5 block break-words text-sm font-medium text-(--text-color) transition-colors hover:text-(--accent-color) focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color)"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 break-words text-sm font-medium text-(--text-color)">{value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...reveal(0.12)}
            className="h-full rounded-2xl border p-5 bg-(--surface-color) border-(--border-color) sm:p-6"
          >
            <h3 className="text-lg font-semibold text-(--text-color)">Send a message</h3>
            <p className="mt-2 text-sm leading-6 text-(--muted-color)">
              This opens a draft in your email app. Your message is not sent or stored by this site.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-(--text-color)">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formValues.name}
                  onChange={handleChange}
                  className="min-h-11 w-full rounded-lg border px-3.5 py-2.5 text-base text-(--text-color) placeholder:text-(--muted-color) bg-(--raised-color) border-(--border-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color)"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-(--text-color)">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                  className="min-h-11 w-full rounded-lg border px-3.5 py-2.5 text-base text-(--text-color) placeholder:text-(--muted-color) bg-(--raised-color) border-(--border-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color)"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-(--text-color)">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  value={formValues.message}
                  onChange={handleChange}
                  className="w-full resize-y rounded-lg border px-3.5 py-2.5 text-base leading-6 text-(--text-color) placeholder:text-(--muted-color) bg-(--raised-color) border-(--border-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color)"
                />
              </div>

              {!contactEmail && (
                <p id="contact-email-needed" className="text-sm text-(--muted-color)">
                  Add your real email address in Contact.jsx to enable this email action.
                </p>
              )}
              <button
                type="submit"
                disabled={!contactEmail}
                aria-describedby={!contactEmail ? "contact-email-needed" : undefined}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-(--accent-strong) px-5 py-2.5 font-semibold text-(--accent-contrast) transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color) disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:brightness-100 sm:w-auto"
              >
                <FaEnvelope aria-hidden="true" />
                Open Email App
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
