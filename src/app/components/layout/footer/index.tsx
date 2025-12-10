import Link from "next/link";
import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-4 items-center">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <Link href="mailto:terry.delvon0805@gmail.com" className="text-secondary hover:text-primary transition-colors">
              terry.delvon0805@gmail.com
            </Link>
            <Link href="tel:+6283826039171" className="text-secondary hover:text-primary transition-colors">
              +62 838-2603-9171
            </Link>
            <Link href="https://www.linkedin.com/in/mhasbia16" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="https://github.com/Hasbi1605" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
              GitHub
            </Link>
          </div>

          <p className="text-secondary text-center">© 2025 Muhammad Hasbi Ash Shiddiqi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
