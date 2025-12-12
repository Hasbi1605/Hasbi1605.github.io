"use client";
import React from "react";
import Image from "next/image";
import { getImgPath } from "@/utils/image";
import { motion } from "framer-motion";
import { SectionHeader } from "../../ui/animations";

// Tech stack icons using devicon CDN
const techIcons: { [key: string]: string } = {
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
  oracle: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  canva: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  // Local icons
  capcut: "/images/icon/capcut-icon.svg",
  finalcut: "/images/icon/final-icon.svg",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ExperienceSec = () => {
  const experiences = [
    {
      year: "Sep 2025 - Feb 2026",
      title: "Laboratory Assistant",
      company: "Universitas Mercu Buana Yogyakarta",
      type: "Education",
      description:
        "Mentored 50+ students in Web Design Interface and Database Design & Programming With SQL courses. Assisted lecturer in evaluating assignments, debugging student code (HTML, CSS, SQL), and troubleshooting technical issues during lab sessions.",
      techStack: ["html", "css", "sql", "oracle"],
    },
    {
      year: "Aug 2025 - Oct 2025",
      title: "Freelance Fullstack Web Developer",
      company: "Minibox Barbershop",
      type: "Freelance Project",
      description: "Developed a custom offline management system using Laravel & MySQL to digitize daily transactions. Designed responsive UI using Bootstrap and successfully deployed to replace manual recording.",
      techStack: ["laravel", "mysql", "bootstrap", "javascript"],
    },
    {
      year: "Oct 2025 - Nov 2025",
      title: "Project-Based Virtual Intern: Frontend",
      company: "Core Initiative via Rakamin Academy",
      type: "Virtual Internship",
      description: "Completed Project Based Internship simulating the role of a Frontend with Vue.js. Developed responsive web interfaces according to UI/UX designs with modern frontend best practices in a fintech-focused environment.",
      techStack: ["vue", "javascript", "css", "figma"],
    },
    {
      year: "Apr 2024 - Oct 2024",
      title: "Staff Medinfo",
      company: "HMPSSI UMBY",
      type: "Student Organization",
      description: "Managed social media content and information dissemination for student activities. Designed creative visual assets for events and announcements using graphic design tools.",
      techStack: ["figma", "canva", "capcut", "finalcut"],
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </SectionHeader>

          <motion.div className="space-y-7 md:space-y-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {experiences.map((exp, index) => (
              <motion.div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative" variants={itemVariants}>
                <div className="">
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-softGray`}></div>}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <motion.div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? "border-primary" : "border-black"}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {index === 0 && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
                    </motion.div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">{exp.company}</span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                  {/* Tech Stack Icons */}
                  <motion.div className="flex flex-wrap gap-2 mt-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.4 }}>
                    {exp.techStack.map((tech, techIndex) => {
                      const iconPath = techIcons[tech];
                      const isLocalIcon = iconPath.startsWith("/");
                      return (
                        <motion.div
                          key={techIndex}
                          className="w-7 h-7 p-1 bg-softGray rounded-md flex items-center justify-center hover:scale-110 transition-transform"
                          title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + techIndex * 0.05, type: "spring", stiffness: 200 }}
                        >
                          <Image src={isLocalIcon ? getImgPath(iconPath) : iconPath} alt={tech} width={20} height={20} className="object-contain" />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
