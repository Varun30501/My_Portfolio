import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const projects = [
  {
    title: "Flight Booking & Reservation System",
    description:
      "A full-stack airline booking platform with interactive seat selection, dynamic pricing, secure payment integration, booking lifecycle management, and PDF itinerary generation.",
    images: [
      "/projects/projectimg.png",
      "/projects/projectimg2.png",
      "/projects/projectimg3.png",
      "/projects/projectimg4.png",
      "/projects/projectimg5.png",
    ],
    tags: ["React", "JavaScript", "Spring Boot", "SQL", "Stripe"],
    featured: true,
  },
  {
    title: "Blog Platform",
    description:
      "Role-based blogging platform built using Angular and Spring Boot with secure authentication, CRUD operations, search functionality, and admin moderation.",
    tags: ["Angular", "Spring Boot", "MySQL", "REST API"],
  },
  {
    title: "Hand Gesture Input System",
    description:
      "Computer-vision-based input system using OpenCV and MediaPipe to map real-time hand gestures to keyboard inputs.",
    tags: ["Python", "OpenCV", "MediaPipe"],
  },
  {
    title: "Self-Driving Car Simulation (2D)",
    description:
      "Browser-based autonomous driving simulation using JavaScript and neural-network-based decision logic in a custom 2D environment.",
    tags: ["JavaScript", "Neural Networks", "HTML", "CSS"],
  },
];

export const Projects = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const featuredRef = useRef(null);
  const intervalRef = useRef(null);
  const isHoveringRef = useRef(false);
  const touchStartX = useRef(null);

  const featuredProject = projects.find((p) => p.featured);

  const nextImage = (len) =>
    setActiveImage((prev) => (prev + 1) % len);

  const prevImage = (len) =>
    setActiveImage((prev) => (prev === 0 ? len - 1 : prev - 1));

  /* Auto-slide */
  useEffect(() => {
    if (!featuredProject?.images) return;

    intervalRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        nextImage(featuredProject.images.length);
      }
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (!featuredProject?.images) return;
      if (e.key === "ArrowRight") nextImage(featuredProject.images.length);
      if (e.key === "ArrowLeft") prevImage(featuredProject.images.length);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              ref={project.featured ? featuredRef : null}
              onClick={() => {
                if (!project.featured) return;
                setExpanded((p) => !p);
                setTimeout(() => {
                  featuredRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 150);
              }}
              className={`relative glass rounded-2xl overflow-hidden cursor-pointer
                ${project.featured ? "md:col-span-2" : ""}`}
            >
              {/* Featured glow */}
              {project.featured && (
                <motion.div
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-24 left-1/2 -translate-x-1/2
             w-[70%] h-48 bg-primary/20 blur-3xl rounded-full pointer-events-none"
                />
              )}

              {/* Image carousel */}
              {project.images && (
                <div
                  className="relative aspect-video overflow-hidden"
                  onMouseEnter={() => (isHoveringRef.current = true)}
                  onMouseLeave={() => (isHoveringRef.current = false)}
                  onTouchStart={(e) =>
                    (touchStartX.current = e.touches[0].clientX)
                  }
                  onTouchEnd={(e) => {
                    if (!touchStartX.current) return;
                    const diff =
                      touchStartX.current - e.changedTouches[0].clientX;
                    if (diff > 50)
                      nextImage(project.images.length);
                    if (diff < -50)
                      prevImage(project.images.length);
                    touchStartX.current = null;
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={project.images[activeImage]}
                      alt={project.title}
                      loading="lazy"
                      initial={{ opacity: 0.6, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.6 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>


                  {/* Bottom nav */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                    flex items-center gap-4 glass px-4 py-2 rounded-full">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(project.images.length);
                      }}
                    >
                      ‹
                    </motion.button>

                    <div className="flex gap-2">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImage(i);
                          }}
                          className={`w-2.5 h-2.5 rounded-full ${i === activeImage
                            ? "bg-primary scale-110"
                            : "bg-white/40"
                            }`}
                        />
                      ))}
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(project.images.length);
                      }}
                    >
                      ›
                    </motion.button>

                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-4 relative z-10">
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold
                    rounded-full bg-primary/20 text-primary animate-pulse">
                    Featured Project
                  </span>
                )}

                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: project.featured && expanded ? 90 : 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                  </motion.div>

                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-xs rounded-full bg-surface border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable section */}
              <AnimatePresence initial={false}>
                {project.featured && expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-muted-foreground">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Seat availability & locking logic</li>
                        <li>Dynamic pricing calculation per seat</li>
                        <li>Stripe payment flow with backend verification</li>
                        <li>Booking lifecycle & status management</li>
                        <li>PDF itinerary generation</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
