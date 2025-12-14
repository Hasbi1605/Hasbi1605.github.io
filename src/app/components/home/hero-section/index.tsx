"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { HeroReveal, ImageReveal } from "../../ui/animations";

const HeroSection = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <HeroReveal delay={0.1}>
                <div className="flex items-center gap-8">
                  <h1>Halo, I'm Hasbi</h1>
                  <div className="wave">
                    <Image src={getImgPath("/images/home/banner/wave-icon.svg")} alt="wave-icon" width={62} height={62} className="" />
                  </div>
                </div>
              </HeroReveal>
              <HeroReveal delay={0.3}>
                <h1>Backend Developer</h1>
              </HeroReveal>
            </div>
            <HeroReveal delay={0.5}>
              <p className="text-secondary font-normal max-w-md xl:max-w-xl">
                Building robust and scalable server-side applications with clean architecture. Specialized in Java Spring Boot and PHP Laravel ecosystems, with a passion for creating efficient APIs and database solutions.
              </p>
            </HeroReveal>
          </div>
          <ImageReveal delay={0.4}>
            <Image src={getImgPath("/images/home/banner/banner-img.png")} alt="banner-img" width={685} height={650} className="block lg:hidden" />
          </ImageReveal>
        </div>
      </div>
      <ImageReveal className="absolute right-0 top-7 hidden h-auto w-2/5 lg:block 2xl:w-1/3" delay={0.6}>
        <Image src={getImgPath("/images/home/banner/banner-img.png")} alt="banner-img" width={550} height={550} className="absolute right-10 top-0 z-1 max-h-[580px] object-contain" />
      </ImageReveal>
    </section>
  );
};

export default HeroSection;
