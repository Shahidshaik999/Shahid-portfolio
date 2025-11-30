import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Python Programming",
    issuer: "Meta",
    year: "2024",
    color: "from-primary to-primary-glow",
    link: "https://www.coursera.org/account/accomplishments/records/T3CEKKRXZ56M"
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    year: "2024",
    color: "from-secondary to-secondary-glow",
    link: "https://www.coursera.org/account/accomplishments/records/P6Q66BSXY99D"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    year: "2024",
    color: "from-accent to-accent-glow",
    link: "https://www.coursera.org/account/accomplishments/records/AFM9ZQF824SA"
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

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
              Certifications
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full hover-lift">
                <div className={`h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                  <Award className="h-16 w-16 text-primary-foreground opacity-90" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-semibold">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-bold text-muted-foreground">
                      {cert.year}
                    </span>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-primary-glow hover:bg-primary/10"
                      >
                        View
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
