import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SnapKart",
    subtitle: "A modern grocery delivery system with real-time order tracking, role-based access, and a seamless shopping experience.",
    year: "2025",
    description:
      "SnapCart is a production-ready full-stack web application supporting three user roles: Customer, Admin, and Delivery Partner.",
    tech: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion","MongoDB", "API Routes", "Socket.IO","Auth.js (NextAuth)", "Google OAuth", "bcryptjs","Leaflet + OpenStreetMap","Vercel","Cloudinary"],
    gradient: "from-primary to-secondary",
    glowColor: "rgba(0,240,255,0.3)",
    demo: "https://github.com/Shahidshaik999/SnapCart_FullStack_by_shahid ",
    github: "https://github.com/Shahidshaik999/SnapCart_FullStack_by_shahid",
  },
  {
    title: "AI-Research-Paper-Detection",
    subtitle: "Detect AI-generated content in research PDFs with advanced NLP models",
    year: "2025",
    description:
      "AI Research Paper Detection is a project developed by Shaik Shahid as part of academic AI research. It helps detect whether a research paper contains AI-generated or Human-written text.",
    tech: ["React + TypeScript, Tailwind CSS", "FastAPI(python)", "PyMuPDF", "Hugging Face Transformers"],
    gradient: "from-primary to-secondary",
    glowColor: "rgba(0,240,255,0.3)",
    demo: "https://github.com/Shahidshaik999/AI-Research-Paper-Detection-by-shahid ",
    github: "https://github.com/Shahidshaik999/AI-Research-Paper-Detection-by-shahid",
  },

  {
    title: "Grammar-Correction-TypePolish",
    subtitle: "TypePolish – AI Grammar, Tone & Fluency Enhancer",
    year: "2025",
    description:
      "TypePolish is a next-gen English writing improvement tool that uses AI to correct grammar, enhance fluency, adjust tone, and rewrite sentences like a professional human writer — instantly and in real time.",
    tech: ["React (TypeScript)","Tailwind CSS + Radix UI components","Vite (Fast bundler)","Axios for API calls"," Python 3.10+"," FastAPI","HuggingFace Transformer Model for Smart Rewrite"],
    gradient: "from-primary to-secondary",
    glowColor: "rgba(0,240,255,0.3)",
    demo: "https://github.com/Shahidshaik999/Grammar-Correction-AI-by-shahid ",
    github: "https://github.com/Shahidshaik999/Grammar-Correction-AI-by-shahid",
  },
  {
    title: " SkillsPark AI – Smart Resume Analyzer ",
    subtitle: "AI-powered resume analyzer that extracts your skills, infers best-fit tech roles, and generates interview prep – all from a single resume upload.",
    year: "2025",
    description:
      "SkillsPark AI is a full-stack web app that helps students and early-career developers understand their profile from a hiring perspective.",
    tech: ["React + TypeScript", "Tailwind", "FastAPI(python)", "AI: Google Gemini", "Resume Parsing: PyMuPDF, Regex"],
    gradient: "from-primary to-secondary",
    glowColor: "rgba(0,240,255,0.3)",
    demo: "https://skillspark-ai-by-shahid.vercel.app/ ",
    github: "https://github.com/Shahidshaik999/skillspark-ai-by-shahid",
  },
  {
    title: "Vibe Matcher",
    subtitle: "AI Product Recommender",
    year: "2025",
    description:
      "Vibe Matcher is a lightweight AI recommendation prototype that matches a user’s “vibe” — such as urban chic, boho weekend, or minimalist office — to relevant fashion products.",
    tech: [
      "Sentence Transformers",
      "Cosine Similarity",
      "Python",
      "FastAPI",
      "React",
    ],
    gradient: "from-secondary to-accent",
    glowColor: "rgba(128,0,255,0.3)",
    demo: " ",
    github: "https://github.com/Shahidshaik999/Vibe-Matcher-AI-driven-vibe-to-product-recommender",
  },
  {
    title: "Gemini Resume Critiquer",
    subtitle: "AI-powered Resume Feedback Tool",
    year: "2025",
    description:
      "Web app that uses Gemini to analyze resumes and provide structured, actionable feedback for improvements.",
    tech: ["Gemini API", "JavaScript", "Web App"],
    gradient: "from-primary to-accent",
    glowColor: "rgba(0,200,255,0.35)",
    demo: " ", // add your deployed URL here when you host it
    github: "https://github.com/Shahidshaik999/Gemini-Resume-Critiquer-by-shahid",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-[1.02]"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${project.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-8 flex-1 flex flex-col">
                  {/* Year Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {project.year}
                    </span>
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-xs font-bold text-primary-foreground`}
                    >
                      Featured
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-semibold">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold bg-muted/50 text-foreground rounded-lg border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-primary-foreground font-semibold`}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-primary/50 hover:bg-primary/10"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
