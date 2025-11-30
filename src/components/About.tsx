import { motion } from "framer-motion";
import { Code2, Brain, Database, Rocket } from "lucide-react";

const skills = [
  { name: "Python & ML", level: 95, icon: Brain, color: "from-primary to-primary-glow" },
  { name: "TensorFlow & Scikit-learn", level: 90, icon: Brain, color: "from-secondary to-secondary-glow" },
  { name: "React & Next.js", level: 92, icon: Code2, color: "from-accent to-accent-glow" },
  { name: "Node.js & Tailwind", level: 88, icon: Code2, color: "from-primary to-secondary" },
  { name: "MySQL & MongoDB", level: 85, icon: Database, color: "from-secondary to-accent" },
  { name: "System Design", level: 87, icon: Rocket, color: "from-accent to-primary" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

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
              About Me
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl hover-lift">
              <h3 className="text-3xl font-heading font-bold mb-6 text-primary">
                Building the Future with AI
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                I'm a passionate Computer Science & Engineering student specializing in AI & ML at 
                <span className="text-primary font-semibold"> Kalasalingam Academy of Research & Education</span>, 
                graduating in 2026 with a CGPA of 8.0/10.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                My journey in technology is driven by a deep curiosity to solve real-world problems through 
                intelligent systems. From building full-stack applications to deploying machine learning models, 
                I thrive at the intersection of innovation and implementation.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With over <span className="text-accent font-bold">1000+ coding problems solved</span> and multiple 
                hackathon wins, I bring both theoretical knowledge and practical expertise to every project.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-foreground text-lg">{skill.name}</span>
                    </div>
                    <span className="text-primary font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ 
                        boxShadow: `0 0 20px ${skill.color.includes('primary') ? 'rgba(0,240,255,0.5)' : skill.color.includes('secondary') ? 'rgba(128,0,255,0.5)' : 'rgba(255,0,128,0.5)'}`
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
