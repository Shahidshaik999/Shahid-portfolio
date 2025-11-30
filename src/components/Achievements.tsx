import { motion } from "framer-motion";
import { Trophy, Award, Code, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const achievements = [
  {
    icon: Code,
    count: 1000,
    suffix: "+",
    label: "Coding Problems Solved",
    platforms: "CodeChef • HackerRank • LeetCode",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Trophy,
    count: 5,
    suffix: "+",
    label: "Hackathon Wins",
    platforms: "National & Regional Level",
    color: "from-secondary to-secondary-glow",
  },
  {
    icon: Award,
    count: 3,
    suffix: "",
    label: "Innovation Challenges",
    platforms: "AI/ML Project Competitions",
    color: "from-accent to-accent-glow",
  },
  {
    icon: Zap,
    count: 10,
    suffix: "+",
    label: "Open Source Contributions",
    platforms: "GitHub • Community Projects",
    color: "from-primary to-secondary",
  },
];

const Counter = ({ end, duration, suffix }: { end: number; duration: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

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
              Achievements
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 text-center hover-lift h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: '0 0 30px rgba(0,240,255,0.3)' }}
                  >
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>

                  {/* Counter */}
                  <div className="text-6xl font-heading font-black mb-4">
                    <span className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      <Counter end={achievement.count} duration={2000} suffix={achievement.suffix} />
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {achievement.label}
                  </h3>

                  {/* Platforms */}
                  <p className="text-sm text-muted-foreground">
                    {achievement.platforms}
                  </p>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 text-center border-2 border-primary/30">
            <p className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed">
              Consistently recognized for <span className="font-bold text-primary">technical excellence</span>, 
              <span className="font-bold text-secondary"> innovative problem-solving</span>, and 
              <span className="font-bold text-accent"> collaborative leadership</span> in competitive programming and hackathons.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
