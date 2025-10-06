import { useState } from "react";
import { projects } from "@/lib/projects";

export default function Portfolio() {
  interface Project {
    id: number;
    title: string;
    summary: string;
    problem: string;
    solution: string;
    technicalDetails: string[];
    technologies: string[];
    role: string;
    roleDescription: string;
    images: { src: string; alt: string }[];
  }

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (id: number) => {
    console.log("openProject");
    console.log(id);
    setSelectedProject(projects.find((project) => project.id === id) || null);
    setCurrentImageIndex(0); // Reset to first image when opening a new project
  };

  const closeProject = () => {
    console.log("closeProject");
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={closeProject}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeProject}
              className="absolute z-10 text-xl font-bold text-gray-500 top-6 right-8 hover:text-gray-700"
            >
              x
            </button>
            <div className="p-10">
              <h1 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
                {selectedProject.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded bg-secondary text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 mb-6 text-lg leading-relaxed text-muted-foreground">
                <p className="mb-6 text-lg leading-relaxed">
                  <strong className="text-primary">The Problem:</strong>{" "}
                  {selectedProject.problem}
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  <strong className="text-primary">The Solution:</strong>{" "}
                  {selectedProject.solution}
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  <strong className="text-primary">Technical Details:</strong>
                  <ul className="pl-6 mb-6 text-lg leading-relaxed list-disc">
                    {selectedProject.technicalDetails.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </p>
                <p className="mb-1 text-lg leading-relaxed">
                  <strong className="text-primary">My Role:</strong>{" "}
                  {selectedProject.role}
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  {selectedProject.roleDescription}
                </p>
              </div>

              {/* Image Carousel at the bottom */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="p-10 bg-secondary/70 rounded-xl">
                  <div className="relative">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={selectedProject.images[currentImageIndex].src}
                        alt={selectedProject.images[currentImageIndex].alt}
                        className="object-cover w-full h-auto"
                      />
                    </div>

                    {/* Navigation buttons - only show if more than one image */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute p-2 text-white transition-all duration-200 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-70"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute p-2 text-white transition-all duration-200 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-70"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image indicators - only show if more than one image */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex justify-center mt-4 space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentImageIndex
                              ? "bg-primary"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl px-4 py-8 mx-auto">
        <div className="p-2">
          <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl text-primary md:text-6xl bold">
                Portfolio
              </h1>
              <h2 className="pb-8 text-xl text-gray-800 md:text-2xl">
                Real world samples of my work
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[url(/public/images/paper.png)] bg-white border border-border rounded-lg p-6 shadow-lg transform hover:rotate-1 transition-transform duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-secondary text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="pt-8 leading-relaxed pb-14 text-muted-foreground">
                  {project.summary}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => openProject(project.id)}
                  className="w-full p-2 text-sm font-medium transition-colors rounded-lg bg-primary/80 hover:bg-primary text-foreground"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
