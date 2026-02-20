"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { ScrollReveal, SectionHeader, CounterAnimation, StaggerContainer, StaggerItem } from "../../ui/animations";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image src={getImgPath("/images/home/about-me/resume-bg-img.svg")} alt="resume-bg-img" width={1200} height={348} className="w-full" />
        </div>

        <div className="relative z-10">
          <div className="container">
            <SectionHeader className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </SectionHeader>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <ScrollReveal direction="left" delay={0.2} className="w-[303px] h-[440px] hidden lg:flex">
                <Image src={getImgPath("/images/home/about-me/about-banner-img.svg")} alt="about-banner" width={303} height={440} className="w-full h-full" />
              </ScrollReveal>

              <div className="w-full lg:max-w-2xl flex-1">
                <ScrollReveal delay={0.1}>
                  <p>
                    I am Muhammad Hasbi Ash Shiddiqi, an Information Systems student at Mercu Buana University Yogyakarta (6th Semester, GPA 3.82/4.00). I am a Certified Junior Network Administrator (BNSP) and Java Fullstack Bootcamp graduate (Komdigi x Metrodata). I have experience as a Laboratory Assistant, mentoring 50+ students in Web Design Interface and Database Design and Programming with SQL. Enhanced with IBM AI certification and completed a Project-Based Virtual Internship at Rakamin Academy. I am proficient in PHP (Laravel), Java (Spring Boot), MySQL, Oracle SQL, and REST APIs. I am currently based in Ngaglik, Sleman Regency, D.I. Yogyakarta.
                  </p>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray" delayChildren={0.2}>
                  {[
                    { count: "3.82", label: "Current GPA" },
                    { count: "50+", label: "Students Mentored" },
                    { count: "5+", label: "Projects Completed" },
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <CounterAnimation delay={i * 0.1}>
                        <div>
                          <h3>{item.count}</h3>
                          <p className="text-base md:text-lg text-black">{item.label}</p>
                        </div>
                      </CounterAnimation>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <ScrollReveal delay={0.3}>
                  <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-center gap-3.5">
                      <Image src={getImgPath("/images/icon/lang-icon.svg")} alt="lang-icon" width={30} height={30} />
                      <p className="text-base text-black">Language</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-2.5">
                      {["Indonesian (Native)", "English (Working Proficiency)"].map((lang) => (
                        <p key={lang} className="bg-white py-2 px-4 w-fit rounded-full text-base">
                          {lang}
                        </p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
