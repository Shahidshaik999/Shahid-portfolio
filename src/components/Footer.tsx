import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 grid-background opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-2xl font-heading font-black">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shaik Shahid
            </span>
          </div>
          
          <p className="text-foreground/60 flex items-center gap-2">
            Designed & Built with <Heart className="h-4 w-4 text-accent fill-accent animate-glow-pulse" /> using React & Tailwind CSS
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shaik Shahid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
