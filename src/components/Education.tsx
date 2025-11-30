import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

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
              Education
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="glass-card p-10 rounded-2xl ml-20 hover-lift">
              {/* Icon */}
              <div className="absolute -left-4 top-8 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg"
                style={{ boxShadow: '0 0 30px rgba(0,240,255,0.5)' }}
              >
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                      B.Tech in Computer Science & Engineering
                    </h3>
                    <p className="text-xl text-primary font-semibold mb-1">
                      Specialization: Artificial Intelligence & Machine Learning
                    </p>
                    <p className="text-lg text-foreground/70">
                      Kalasalingam Academy of Research & Education
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">2022 – 2026</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <div className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl">
                    <p className="text-sm text-primary-foreground/70 font-semibold uppercase tracking-wider">CGPA</p>
                    <p className="text-3xl font-heading font-black text-primary-foreground">8.0/10</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-foreground/80 leading-relaxed">
                      Comprehensive curriculum covering Advanced Machine Learning, Deep Learning, 
                      Natural Language Processing, Computer Vision, and Full-Stack Development.
                    </p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-muted/30 rounded-xl border border-border/50">
                    <p className="text-2xl font-bold text-primary mb-1">1000+</p>
                    <p className="text-sm text-muted-foreground">Problems Solved</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl border border-border/50">
                    <p className="text-2xl font-bold text-secondary mb-1">Top 10%</p>
                    <p className="text-sm text-muted-foreground">Class Ranking</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-xl border border-border/50">
                    <p className="text-2xl font-bold text-accent mb-1">5+</p>
                    <p className="text-sm text-muted-foreground">Research Papers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
