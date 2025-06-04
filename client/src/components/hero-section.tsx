import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, User } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center">
            <User className="text-primary-foreground text-4xl" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Erizon</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Software Developer | Flutter & Laravel Expert
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate Full Stack Developer with 6+ years of experience crafting
            mobile and web applications. Specialized in Flutter for mobile
            development and Laravel for robust backend solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-3 font-semibold transform hover:scale-105 transition-transform duration-200"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 font-semibold"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="mailto:erizonade2001@gmail.com"
              className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-200"
            >
              <Mail />
            </a>
            <a
              href="https://www.linkedin.com/in/erizon-adepratama-5751442a2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-200"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-200"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
