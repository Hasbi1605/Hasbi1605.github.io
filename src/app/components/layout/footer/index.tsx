"use client";

import Link from "next/link";
import Logo from "../logo";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    { href: "mailto:terry.delvon0805@gmail.com", label: "terry.delvon0805@gmail.com" },
    { href: "tel:+6283826039171", label: "+62 838-2603-9171" },
    { href: "https://www.linkedin.com/in/mhasbia16", label: "LinkedIn", external: true },
    { href: "https://github.com/Hasbi1605", label: "GitHub", external: true },
  ];

  return (
    <motion.footer className="py-6 sm:py-14 flex items-center justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="container">
        <div className="flex flex-col gap-4 items-center">
          <motion.div className="relative flex items-center w-full" initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex-grow h-px bg-black" />
            <motion.div className="mx-4" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}>
              <Logo />
            </motion.div>
            <div className="flex-grow h-px bg-black" />
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-4 sm:gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
            {footerLinks.map((link, index) => (
              <motion.div key={link.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 + index * 0.1 }} whileHover={{ y: -2 }}>
                <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="text-secondary hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p className="text-secondary text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
            © 2025 Muhammad Hasbi Ash Shiddiqi. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
