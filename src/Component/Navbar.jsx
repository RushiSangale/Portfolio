import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="relative flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20 transition-transform duration-200 group-hover:scale-105">
            <span className="text-lg font-black text-black">RS</span>
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-lg font-bold tracking-wide text-white">Rushi</p>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Sangale</p>
          </div>
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">
          {navigationLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-300 transition-colors duration-200 hover:text-cyan-300"
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
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            <FaGithub aria-hidden="true" className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
          >
            <FaLinkedin aria-hidden="true" className="text-lg" />
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors duration-200 hover:border-white/30 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 lg:hidden"
          >
            {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#080b14]/95 px-5 py-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col">
            {navigationLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-gray-300 transition-colors duration-200 hover:bg-white/5 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"
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
