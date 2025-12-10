import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "Sep 2025 - Feb 2026",
      title: "Laboratory Assistant",
      company: "Universitas Mercu Buana Yogyakarta",
      type: "Education",
      description:
        "Mentored 50+ students in Web Design Interface and Database Design & Programming With SQL courses. Assisted lecturer in evaluating assignments, debugging student code (HTML, CSS, SQL), and troubleshooting technical issues during lab sessions.",
    },
    {
      year: "Aug 2025 - Oct 2025",
      title: "Freelance Fullstack Web Developer",
      company: "Minibox Barbershop",
      type: "Freelance Project",
      description: "Developed a custom offline management system using Laravel & MySQL to digitize daily transactions. Designed responsive UI using Bootstrap and successfully deployed to replace manual recording.",
    },
    {
      year: "Oct 2025 - Nov 2025",
      title: "Project-Based Virtual Intern: Frontend",
      company: "Core Initiative via Rakamin Academy",
      type: "Virtual Internship",
      description: "Completed Project Based Internship simulating the role of a Frontend with Vue.js. Developed responsive web interfaces according to UI/UX designs with modern frontend best practices in a fintech-focused environment.",
    },
    {
      year: "Apr 2024 - Oct 2024",
      title: "Staff Medinfo",
      company: "HMPSSI UMBY",
      type: "Student Organization",
      description: "Managed social media content and information dissemination for student activities. Designed creative visual assets for events and announcements using graphic design tools.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                <div className="">
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-softGray`}></div>}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 0 ? "border-primary" : "border-black"}`}>
                      {index === 0 && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
                    </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
