import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">

          {/* Logo Box */}
          <div className="w-11 h-11 py-8 rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-black font-black text-lg">
              RS
            </span>
          </div>

          {/* Name */}
          <div className="hidden sm:block leading-tight">
            <h1 className="text-lg font-bold text-white tracking-wide">
              Rushi
            </h1>

            <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
              Sangale
            </p>
          </div>

        </a>


        {/* Navigation */}
        <div className="hidden md:flex items-center-safe gap-8">

          <a
            href="#home"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#education"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </a>

        </div>


        {/* Social Icons */}
        <div className="flex items-end gap-4">

          <a
            href="https://github.com/RushiSangale"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <FaGithub className="text-lg" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300"
          >
            <FaLinkedin className="text-lg" />
          </a>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;