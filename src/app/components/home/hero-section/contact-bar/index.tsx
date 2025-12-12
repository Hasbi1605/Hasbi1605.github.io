"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../../../ui/animations";

const ContactBar = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray">
        <div className="container">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
              {/* Contact Items */}
              <StaggerContainer className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
                {contactBarData?.contactItems?.map((value: any, index: number) => (
                  <StaggerItem key={index}>
                    <Link href={value?.link || "#"} className="flex items-center gap-2 lg:gap-4 text-sm md:text-base">
                      <Image src={getImgPath(value?.icon)} alt={value?.type} width={24} height={24} className="min-w-[24px] min-h-[24px]" />
                      <h6 className="text-sm md:text-base xl:text-xl hover:text-primary">{value?.label}</h6>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Social Items */}
              <StaggerContainer className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5" staggerDelay={0.15}>
                {contactBarData?.socialItems?.map((value: any, index: number) => (
                  <StaggerItem key={index}>
                    <Link href={value?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Image src={getImgPath(value?.icon)} alt={value?.platform} width={30} height={30} className="hover:opacity-80 transition-opacity" />
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
