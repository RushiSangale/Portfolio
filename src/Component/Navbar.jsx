import { useState } from "react";
import {
  FaBars,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaPalette,
  FaSun,
  FaTimes,
} from "react-icons/fa";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const themes = [
  { value: "light", label: "Light", color: "#f8fafc", icon: FaSun },
  { value: "dark", label: "Dark", color: "#111827", icon: FaMoon },
  { value: "blue", label: "Blue", color: "#1d4ed8", icon: FaPalette },
];

const Navbar = ({ theme, onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b bg-(--nav-bg) backdrop-blur-xl transition-colors duration-300 border-(--border-color)">
      <div className="relative flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-900/20 transition-transform duration-200 group-hover:scale-105">
            <span className="text-lg font-black text-white">RS</span>
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-lg font-bold tracking-wide text-(--text-color)">Rushi</span>
            <span className="block text-xs uppercase tracking-[0.2em] text-(--muted-color)">Sangale</span>
          </span>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">
          {navigationLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-(--muted-color) transition-colors duration-200 hover:text-(--accent-color)"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/RushiSangale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Rushi's GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg border text-(--muted-color) transition duration-200 hover:-translate-y-0.5 hover:text-(--text-color) border-(--border-color)"
          >
            <FaGithub aria-hidden="true" className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border text-(--muted-color) transition duration-200 hover:-translate-y-0.5 hover:text-(--accent-color) border-(--border-color)"
          >
            <FaLinkedin aria-hidden="true" className="text-lg" />
          </a>

          <div className="relative">
            <button
              type="button"
              aria-label={`Change color theme. Current theme: ${theme}`}
              aria-expanded={isThemeMenuOpen}
              aria-controls="theme-options"
              onClick={() => setIsThemeMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border text-(--muted-color) transition duration-200 hover:-translate-y-0.5 hover:text-(--text-color) focus-visible:outline-2 focus-visible:outline-(--accent-color) border-(--border-color)"
            >
              <FaPalette aria-hidden="true" />
            </button>

            {isThemeMenuOpen && (
              <div
                id="theme-options"
                className="absolute right-0 top-full mt-3 w-44 rounded-xl border p-2 shadow-xl bg-(--surface-color) border-(--border-color)"
              >
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-(--muted-color)">
                  Color theme
                </p>
                {themes.map(({ value, label, color, icon: ThemeIcon }) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={theme === value}
                    onClick={() => {
                      onThemeChange(value);
                      setIsThemeMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-(--text-color) transition-colors hover:bg-(--raised-color) focus-visible:outline-2 focus-visible:outline-(--accent-color)"
                  >
                    <span
                      aria-hidden="true"
                      className="h-4 w-4 rounded-full border border-black/15"
                      style={{ backgroundColor: color }}
                    />
                    <ThemeIcon aria-hidden="true" className="text-(--muted-color)" />
                    <span className="flex-1">{label}</span>
                    {theme === value && <FaCheck aria-hidden="true" className="text-(--accent-color)" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border text-(--muted-color) transition-colors duration-200 hover:text-(--text-color) focus-visible:outline-2 focus-visible:outline-(--accent-color) border-(--border-color) lg:hidden"
          >
            {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t px-5 py-3 backdrop-blur-xl lg:hidden bg-(--nav-bg) border-(--border-color)"
        >
          <div className="flex flex-col">
            {navigationLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-(--muted-color) transition-colors hover:bg-(--raised-color) hover:text-(--accent-color) focus-visible:outline-2 focus-visible:outline-(--accent-color)"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
