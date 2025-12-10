"use client";

import Link from "next/link";
import Logo from "../logo";

const Header = () => {
  const resumeLink = "https://drive.google.com/file/d/1vGJYa6aYwLglfRXzMZ9o-rnXpspjx-VE/view?usp=sharing";

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center gap-4 sm:gap-8">
            <div>
              <Logo />
            </div>

            <Link href={resumeLink} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group">
              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">View My Resume</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
