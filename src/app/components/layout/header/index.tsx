"use client";

import Link from "next/link";
import Logo from "../logo";
import { motion } from "framer-motion";

const Header = () => {
  const resumeLink = "https://drive.google.com/file/d/1jRpP2RzEjsQNVi_PzlUu0f0glQntO0a_/view?usp=sharing";

  return (
    <motion.header className="navbar top-0 left-0 z-999 w-full absolute" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <Logo />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Link
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 py-2 sm:py-3 md:py-3 px-4 sm:px-5 md:px-6 bg-white border-2 border-primary text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="text-sm sm:text-base md:text-lg font-medium">Download CV</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-y-0.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
