import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>Halo, I'm Hasbi</h1>
                <div className="wave">
                  <Image src={getImgPath("/images/home/banner/wave-icon.svg")} alt="wave-icon" width={62} height={62} className="" />
                </div>
              </div>
              <h1>Web Developer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Information Systems student at UMBY (Sem 5, GPA 3.81). Certified Junior Network Administrator (BNSP) and Java Fullstack Bootcamp graduate. Proficient in Java (Spring Boot), PHP (Laravel), Oracle SQL, and REST APIs. Disciplined
              and eager to launch a career as a Web Developer.
            </p>
          </div>
          <Image src={getImgPath("/images/home/banner/banner-img.png")} alt="banner-img" width={685} height={650} className="block lg:hidden" />
        </div>
      </div>
      <div className="absolute right-0 top-7 hidden h-auto w-2/5 lg:block 2xl:w-1/3">
        <Image src={getImgPath("/images/home/banner/banner-img.png")} alt="banner-img" width={550} height={550} className="absolute right-10 top-0 z-1 max-h-[580px] object-contain" />
      </div>
    </section>
  );
};

export default index;
