"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader, StaggerContainer, StaggerItem } from "../../ui/animations";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  // Check if we need to scroll to this section after navigation
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToProjects");
    if (shouldScroll === "true" && sectionRef.current) {
      sessionStorage.removeItem("scrollToProjects");
      // Small delay to ensure content is rendered
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [workData]);

  return (
    <section id="projects" ref={sectionRef}>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <SectionHeader className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Projects & Works</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </SectionHeader>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12" staggerDelay={0.15}>
              {workData?.map((value: any, index: any) => {
                return (
                  <StaggerItem key={index}>
                    <Link href={`/work/${value.slug}`} className="group flex flex-col gap-3 xl:gap-6 cursor-pointer">
                      <motion.div className="relative overflow-hidden rounded-lg" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <Image src={getImgPath(value?.image)} alt={value?.title} width={570} height={414} className="rounded-lg w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        <motion.div className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full rounded-lg flex" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                          <span className="flex justify-center items-center p-5 w-full">
                            <motion.svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" initial={{ scale: 0.5, rotate: -45 }} whileHover={{ scale: 1, rotate: 0 }} transition={{ duration: 0.3 }}>
                              <rect x="0.333374" width="64" height="64" rx="32" fill="#008B8B" />
                              <path d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666" stroke="#FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </motion.svg>
                          </span>
                        </motion.div>
                      </motion.div>
                      <div className="flex flex-col gap-0 xl:gap-2">
                        <div className="flex items-center justify-between">
                          <h5 className="group-hover:text-primary transition-colors duration-300">{value?.title}</h5>
                          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Image src={getImgPath("/images/icon/right-arrow-icon.svg")} alt="right-arrow-icon" width={30} height={30} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </motion.div>
                        </div>
                        <p>{value?.client}</p>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
