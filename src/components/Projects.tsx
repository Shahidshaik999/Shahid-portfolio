import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SnapKart",
    subtitle: "Full-Stack Grocery Delivery Platform",
    year: "2025",
    description:
      "Complete e-commerce solution with real-time order tracking, role-based authentication, and admin dashboard.",
    tech: ["Next.js 16", "Auth.js", "Socket.IO", "Cloudinary", "PostgreSQL"],
    gradient: "from-primary to-secondary",
    glowColor: "rgba(0,240,255,0.3)",
    demo: " ",
    github: "https://github.com/Shahidshaik999/SnapCart_FullStack_by_shahid",
  },
  {
    title: "Vibe Matcher",
    subtitle: "AI Product Recommender",
    year: "2025",
    description:
      "Semantic search engine that converts user 'vibes' into intelligent product recommendations using NLP.",
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
    title: "Cardiac Disease Assessment",
    subtitle: "Explainable AI for Healthcare",
    year: "2025",
    description:
      "Multi-model ML system with SHAP/LIME explanations for transparent cardiac disease predictions.",
    tech: ["Scikit-learn", "SHAP", "LIME", "Random Forest", "Flask", "Pandas"],
    gradient: "from-accent to-primary",
    glowColor: "rgba(255,0,128,0.3)",
    demo: " ",
    github: " ",
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
