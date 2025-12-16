"use client";

import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface WorkItem {
  image: string;
  title: string;
  client: string;
  slug: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  youtubeUrl: string;
  githubUrl: string;
  liveUrl: string;
  screenshots: string[];
  year: string;
  role: string;
}

interface WorkDetailClientProps {
  slug: string;
}

const WorkDetailClient = ({ slug }: WorkDetailClientProps) => {
  const [project, setProject] = useState<WorkItem | null>(null);
  const [allProjects, setAllProjects] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use absolute path from origin to avoid path issues
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
        const dataUrl = `${window.location.origin}${basePath}/data/work-data.json`;
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const projects = data?.workData || [];
        setAllProjects(projects);

        const currentProject = projects.find((p: WorkItem) => p.slug === slug);
        setProject(currentProject || null);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <main className="pt-35 md:pt-40 pb-16">
        <div className="container">
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="flex flex-col items-center gap-6">
              {/* Spinning Loader */}
              <div className="loading-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
              </div>

              {/* Loading Text */}
              <div className="flex items-center gap-1">
                <span className="text-lg font-medium text-primary loading-text">Loading project</span>
                <span className="loading-dots">
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                  <span className="dot">.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="pt-35 md:pt-40 pb-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6">
            <h2>Project Not Found</h2>
            <p>The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/#projects" className="relative overflow-hidden cursor-pointer w-fit py-3 px-7 border border-primary rounded-full group">
              <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">Back to Home</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Find previous and next projects
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <main className="pt-35 md:pt-40 pb-16">
      {/* Back Button */}
      <div className="container">
        <Link
          href="/"
          onClick={() => {
            sessionStorage.setItem("scrollToProjects", "true");
          }}
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-softGray">
        <div className="container">
          <div className="py-12 xl:py-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              {/* Project Info */}
              <div className="flex-1 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-sm font-medium px-3 py-1 bg-primary/10 rounded-full">{project.year}</span>
                  <span className="text-secondary text-sm">{project.role}</span>
                </div>
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-4">{project.title}</h1>
                <p className="text-lg text-secondary mb-6">{project.client}</p>
                <p className="text-secondary leading-relaxed">{project.longDescription}</p>

                {/* Action Buttons */}
                <div className="flex flex-row flex-wrap gap-4 mt-8">
                  {/* GitHub Repository Button */}
                  {project.githubUrl ? (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="py-3 px-6 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center gap-2 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-white font-medium">Show Repository</span>
                    </Link>
                  ) : (
                    <span className="py-3 px-6 bg-gray-400 rounded-full flex items-center gap-2 cursor-not-allowed opacity-60">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-white font-medium whitespace-nowrap">Repository N/A</span>
                    </span>
                  )}

                  {/* YouTube Demo Button */}
                  {project.youtubeUrl ? (
                    <Link href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="py-3 px-6 bg-red-600 hover:bg-red-700 rounded-full flex items-center gap-2 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-white font-medium">Show Video Demo</span>
                    </Link>
                  ) : (
                    <span className="py-3 px-6 bg-gray-400 rounded-full flex items-center gap-2 cursor-not-allowed opacity-60">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-white font-medium whitespace-nowrap">Video Demo N/A</span>
                    </span>
                  )}

                  {/* Live Demo Button - only show if available */}
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="py-3 px-6 border border-primary hover:bg-primary/10 rounded-full flex items-center gap-2 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#008B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <span className="font-medium text-primary">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Image Carousel */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  {/* Main Image */}
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={getImgPath(project.screenshots && project.screenshots.length > 0 ? project.screenshots[currentImageIndex] : project.image)}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Navigation Arrows - only show if multiple images */}
                  {project.screenshots && project.screenshots.length > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1))}
                        className="carousel-nav absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1))}
                        className="carousel-nav absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors z-10"
                        aria-label="Next image"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Dots Indicator - only show if multiple images */}
                  {project.screenshots && project.screenshots.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {project.screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`carousel-nav h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? "bg-primary w-6" : "bg-gray/40 hover:bg-gray/60 w-2.5"}`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      {project.youtubeUrl && (
        <section className="py-12 xl:py-20">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9">
              <h3>Video Demo</h3>
            </div>
            <div className="aspect-video w-full max-w-4xl mx-auto">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={project.youtubeUrl.replace("watch?v=", "embed/")}
                title={`${project.title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className={project.youtubeUrl ? "bg-softGray" : ""}>
        <div className="container">
          <div className="py-12 xl:py-20">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9">
              <h3>Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-white py-3 px-5 rounded-full text-base xl:text-lg border border-gray hover:border-primary hover:bg-primary/5 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={project.youtubeUrl ? "" : "bg-softGray"}>
        <div className="container">
          <div className="py-12 xl:py-20">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9">
              <h3>Key Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-white rounded-lg border border-gray hover:border-primary transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#008B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-base xl:text-lg text-black">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-12 xl:py-20">
        <div className="container">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9">
            <h3>More Projects</h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {/* Previous Project */}
            <div className="flex-1">
              {prevProject ? (
                <Link href={`/work/${prevProject.slug}`} className="group flex items-center gap-4 p-5 bg-softGray rounded-lg hover:bg-primary/5 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary group-hover:text-primary transition-colors">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-sm text-secondary">Previous</p>
                    <p className="font-medium text-black group-hover:text-primary transition-colors">{prevProject.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="p-5 bg-softGray rounded-lg opacity-50">
                  <p className="text-sm text-secondary">No previous project</p>
                </div>
              )}
            </div>

            {/* Next Project */}
            <div className="flex-1">
              {nextProject ? (
                <Link href={`/work/${nextProject.slug}`} className="group flex items-center justify-end gap-4 p-5 bg-softGray rounded-lg hover:bg-primary/5 transition-colors text-right">
                  <div>
                    <p className="text-sm text-secondary">Next</p>
                    <p className="font-medium text-black group-hover:text-primary transition-colors">{nextProject.title}</p>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary group-hover:text-primary transition-colors">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ) : (
                <div className="p-5 bg-softGray rounded-lg opacity-50 text-right">
                  <p className="text-sm text-secondary">No next project</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkDetailClient;
