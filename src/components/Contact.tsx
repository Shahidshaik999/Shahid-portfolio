import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Shahidshaik999",
    color: "hover:text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shaik-shahid-7a1897282/",
    color: "hover:text-secondary",
  },
  {
    icon: Code,
    label: "LeetCode",
    href: "https://leetcode.com/",
    color: "hover:text-accent",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:shahidshaik9898p@gmail.com",
    color: "hover:text-primary",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

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
              Let&apos;s Connect
            </span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-6" />
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow text-primary-foreground font-semibold text-lg transition-all duration-300 hover:scale-105"
                  style={{ boxShadow: "0 0 30px rgba(0,240,255,0.3)" }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={
                        social.label === "Email" ? "_self" : "_blank"
                      }
                      rel={
                        social.label === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`glass-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover-lift group ${social.color} transition-colors`}
                    >
                      <Icon className="h-8 w-8 text-foreground group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-4 text-secondary">
                Quick Info
              </h3>
              <div className="space-y-4 text-foreground/80">
                <p className="flex items-center gap-2">
                  <span className="text-accent">📍</span>
                  <span>Ongole, Andhra Pradesh, India</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary">🎓</span>
                  <span>Available for Full-Time Jobs & collaborations</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-secondary">💼</span>
                  <span>Open to freelance projects</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent">⚡</span>
                  <span>Response time: Usually within 24 hours</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
