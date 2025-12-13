"use client";

import Link from "next/link";
import Logo from "../logo";
import { motion } from "framer-motion";

const Header = () => {
  const resumeLink = "https://drive.google.com/file/d/1vGJYa6aYwLglfRXzMZ9o-rnXpspjx-VE/view?usp=sharing";

  return (
    <motion.header className="navbar top-0 left-0 z-999 w-full absolute" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <Logo />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Link href={resumeLink} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group">
                <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">Download CV</span>
              </Link>
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
