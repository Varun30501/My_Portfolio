import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { trackEvent } from "../utils/analytics";
import { useState } from "react";

const RESUME_LAST_UPDATED = "September 2025";

const skills = [
  { name: "React.js", roles: ["frontend", "fullstack"] },
  { name: "Angular", roles: ["frontend", "fullstack"] },
  { name: "JavaScript (ES6+)", roles: ["frontend", "fullstack"] },
  { name: "HTML5", roles: ["frontend"] },
  { name: "CSS3", roles: ["frontend"] },
  { name: "Tailwind CSS", roles: ["frontend"] },
  { name: "Bootstrap", roles: ["frontend"] },

  { name: "Java", roles: ["fullstack"] },
  { name: "Spring Boot", roles: ["fullstack"] },
  { name: "Hibernate ORM", roles: ["fullstack"] },
  { name: "Python", roles: ["fullstack"] },

  { name: "MySQL", roles: ["fullstack"] },
  { name: "PostgreSQL", roles: ["fullstack"] },
  { name: "RESTful APIs", roles: ["fullstack"] },

  { name: "Stripe Payment Integration", roles: ["fullstack"] },
  { name: "Git & GitHub", roles: ["frontend", "fullstack"] },
  { name: "SAP OTC & GTS", roles: ["fullstack"] },
];



export const Hero = () => {
  const [showCV, setShowCV] = useState(false);
  const [activeRole, setActiveRole] = useState("fullstack");
  // values: "frontend" | "fullstack"


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Full-Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Varun V — a Full-Stack Web Developer specializing in React, Angular,
                and Spring Boot. I build scalable, production-ready web applications with
                real-world features, clean architecture, and strong performance.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <button onClick={() => setShowCV(true)}>
                <AnimatedBorderButton>
                  Preview CV
                </AnimatedBorderButton>
              </button>
              <a
                href="/Varun_V_Fullstack_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("download_cv", {
                    location: "hero",
                    file: "Varun_V_Fullstack_Resume.pdf",
                  })
                }
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Resume last updated: <span className="text-primary">{RESUME_LAST_UPDATED}</span>
              </p>

            </div>


            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Varun30501" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/varun-venkatesh-90195115a" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile_img.png"
                  alt="Varun V"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1.5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          {/* Role Toggle */}
          <div className="flex justify-center gap-4 mb-6">
            {[
              { id: "frontend", label: "Frontend Roles" },
              { id: "fullstack", label: "Full-Stack Roles" },
            ].map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
        ${activeRole === role.id
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-primary"
                  }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => {
                const isHighlighted = skill.roles.includes(activeRole);

                return (
                  <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span
                      className={`text-xl font-semibold transition-colors
            ${isHighlighted
                          ? "text-primary"
                          : "text-muted-foreground/40"
                        }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[80vh] bg-background rounded-2xl overflow-hidden">

            {/* Close button */}
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full glass hover:bg-primary/20"
            >
              ✕
            </button>

            {/* PDF iframe */}
            <iframe
              src="/Varun_Full-Stack_Resume.pdf"
              title="CV Preview"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

    </section>
  );
};
