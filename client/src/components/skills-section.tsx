import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Server, Code } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Laravel", level: 95 },
        { name: "CodeIgniter", level: 90 },
        { name: "NodeJS", level: 85 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "React Native", level: 75 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-purple-500" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "jQuery", level: 85 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
  ];

  const additionalSkills = [
    "MySQL",
    "SQL Server",
    "Git/GitHub/GitLab",
    "Figma",
    "REST APIs",
    "Firebase",
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and frameworks I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up stagger-animation-${index + 1} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 animate-bounce-in group-hover:animate-float">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={`animate-slide-in-left stagger-animation-${skillIndex + 1}`}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-3 overflow-hidden" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 animate-slide-up stagger-animation-4">
          <h3 className="text-2xl font-semibold text-center mb-8 animate-slide-up">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-background rounded-full shadow-md font-medium transform hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-lg animate-bounce-in stagger-animation-${index + 1} hover:bg-primary hover:text-primary-foreground`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
