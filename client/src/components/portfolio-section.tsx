import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Car,
  ShoppingCart,
  GraduationCap,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      title: "PT Bukit Asam Mobile App",
      description:
        "Joint development mobile application for PT Bukit Asam Tbk using Flutter framework with modern UI/UX design.",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      gradient: "from-primary to-purple-600",
      tags: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Halo Auto Web Platform",
      description:
        "Full-stack web application for automotive industry with comprehensive management system and mobile integration.",
      icon: <Car className="h-12 w-12 text-white" />,
      gradient: "from-green-500 to-teal-600",
      tags: ["Laravel", "PHP", "Vue.js"],
    },
    {
      title: "LOKO E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and responsive design.",
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      gradient: "from-purple-500 to-pink-600",
      tags: ["Laravel", "MySQL", "JavaScript"],
    },
    {
      title: "Synapse Academy Platform",
      description:
        "Educational mentoring platform with course management, student tracking, and interactive learning tools.",
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      gradient: "from-orange-500 to-red-600",
      tags: ["Laravel", "Vue.js", "WebRTC"],
    },
    {
      title: "Hedo Global Tech System",
      description:
        "Enterprise resource planning system with advanced analytics, reporting, and multi-user management.",
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      gradient: "from-teal-500 to-blue-600",
      tags: ["Laravel", "MySQL", "Chart.js"],
    },
    {
      title: "Freelance Projects Collection",
      description:
        "Various web and mobile applications developed for clients over 6+ years of freelance experience.",
      icon: <Briefcase className="h-12 w-12 text-white" />,
      gradient: "from-indigo-500 to-purple-600",
      tags: ["Flutter", "Laravel", "Various"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-lg text-muted-foreground">
            Some of the projects I've worked on throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                {project.icon}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
