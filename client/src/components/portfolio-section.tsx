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
      title: "CISEA Bukit Asam",
      description:
        "Corporate information system for PT Bukit Asam with advanced enterprise features and data management.",
      icon: <Briefcase className="h-12 w-12 text-white" />,
      gradient: "from-primary to-purple-600",
      tags: ["Laravel", "MySQL", "JavaScript"],
    },
    {
      title: "SIP Bukit Asam",
      description:
        "Integrated information system platform for PT Bukit Asam with comprehensive business process automation.",
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      gradient: "from-green-500 to-teal-600",
      tags: ["Laravel", "CodeIgniter", "SQL Server"],
    },
    {
      title: "BATIC Bukit Asam",
      description:
        "Business application technology integration center for streamlined operations and workflow management.",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      gradient: "from-blue-500 to-indigo-600",
      tags: ["Flutter", "Laravel", "MySQL"],
    },
    {
      title: "Dibajolbae",
      description:
        "Modern web application with interactive features and responsive design for enhanced user experience.",
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      gradient: "from-purple-500 to-pink-600",
      tags: ["Laravel", "JavaScript", "MySQL"],
    },
    {
      title: "Pasar Online",
      description:
        "E-commerce marketplace platform with vendor management, payment integration, and mobile-responsive design.",
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      gradient: "from-orange-500 to-red-600",
      tags: ["Laravel", "jQuery", "MySQL"],
    },
    {
      title: "Company Profile Sistem Informasi",
      description:
        "Corporate website for Information Systems department with modern design and content management features.",
      icon: <Briefcase className="h-12 w-12 text-white" />,
      gradient: "from-teal-500 to-cyan-600",
      tags: ["Laravel", "JavaScript", "MySQL"],
    },
    {
      title: "Digital Production System",
      description:
        "Production management system with real-time monitoring, reporting, and workflow optimization features.",
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      gradient: "from-indigo-500 to-purple-600",
      tags: ["Laravel", "NodeJS", "MySQL"],
    },
    {
      title: "Sistem Informasi Sekolah",
      description:
        "Comprehensive school management system with student records, attendance tracking, and academic management.",
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      gradient: "from-emerald-500 to-teal-600",
      tags: ["Laravel", "CodeIgniter", "MySQL"],
    },
    {
      title: "Sistem Informasi Campus",
      description:
        "University campus management platform with student portal, course management, and administrative tools.",
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      gradient: "from-violet-500 to-purple-600",
      tags: ["Laravel", "JavaScript", "SQL Server"],
    },
    {
      title: "Rest API Mobile Sekolah",
      description:
        "RESTful API backend for school mobile application with secure authentication and data synchronization.",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      gradient: "from-cyan-500 to-blue-600",
      tags: ["Laravel", "NodeJS", "MySQL"],
    },
    {
      title: "Muslim Qur'an Mobile",
      description:
        "Islamic mobile application for Quran reading with audio features, bookmarks, and spiritual guidance tools.",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      gradient: "from-green-600 to-emerald-600",
      tags: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Dairy Monitoring Mobile",
      description:
        "Mobile application for dairy farm management with livestock tracking, health monitoring, and production analytics.",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      gradient: "from-amber-500 to-orange-600",
      tags: ["Flutter", "Dart", "MySQL"],
    },
    {
      title: "Maintenance Mobile",
      description:
        "Mobile maintenance management system for equipment tracking, work orders, and preventive maintenance scheduling.",
      icon: <Smartphone className="h-12 w-12 text-white" />,
      gradient: "from-red-500 to-pink-600",
      tags: ["Flutter", "Laravel", "MySQL"],
    },
    {
      title: "Maintenance Web",
      description:
        "Web-based maintenance management platform with comprehensive reporting, asset tracking, and team coordination.",
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      gradient: "from-slate-500 to-gray-600",
      tags: ["Laravel", "JavaScript", "MySQL"],
    },
    {
      title: "Cars Gallery",
      description:
        "Automotive showcase platform with interactive gallery, detailed specifications, and comparison features.",
      icon: <Car className="h-12 w-12 text-white" />,
      gradient: "from-blue-600 to-indigo-600",
      tags: ["Laravel", "jQuery", "MySQL"],
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
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up ${
                index < 6 ? `stagger-animation-${(index % 6) + 1}` : ''
              } cursor-pointer relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {project.icon}
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="transform hover:scale-105 transition-transform duration-200 animate-bounce-in"
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full transform hover:scale-105 transition-all duration-200 hover:bg-primary hover:text-primary-foreground relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">View Details</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover/btn:opacity-100"></div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
