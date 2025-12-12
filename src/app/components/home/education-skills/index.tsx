"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader, StaggerContainer, StaggerItem } from "../../ui/animations";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")} alt="vector" width={260} height={170} className="no-print absolute top-0 left-0 transform -translate-y-1/2" />
          <div className="relative z-10 py-16 md:py-32">
            <SectionHeader className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-primary">( 03 )</p>
            </SectionHeader>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
              <StaggerContainer className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-6">
                        <motion.div
                          className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        </motion.div>
                        <div className="flex-1 flex flex-col gap-2">
                          <h5>{value?.title}</h5>
                          <p className="font-normal">{value?.description}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
              <StaggerContainer className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full" staggerDelay={0.08}>
                {educationData?.skills?.map((value: any, index: any) => {
                  return (
                    <StaggerItem key={index}>
                      <motion.div
                        className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                        whileHover={{ y: -5, boxShadow: "0 10px 40px -15px rgba(0, 139, 139, 0.2)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col items-center gap-5">
                          <Image src={getImgPath(value?.icon)} alt="icon" width={70} height={70} />
                          <p className="text-black font-normal">{value?.name}</p>
                        </div>
                        <motion.div className="flex gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                          {[...Array(5)].map((_, i) => (
                            <motion.svg
                              key={i}
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 300 }}
                            >
                              <rect width="9" height="9" rx="4.5" fill={i < value?.rating ? "#008B8B" : "#C0D8E0"} />
                            </motion.svg>
                          ))}
                        </motion.div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
