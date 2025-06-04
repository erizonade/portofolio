import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Smartphone, Server, Code } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "React Native", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-green-500" />,
      skills: [
        { name: "Laravel", level: 95 },
        { name: "PHP", level: 90 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-purple-500" />,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
  ];

  const additionalSkills = [
    "Git & GitHub",
    "Firebase",
    "REST APIs",
    "Agile/Scrum",
    "Docker",
    "Linux",
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
              className="hover:shadow-xl transition-all duration-300 animate-slide-up"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-background rounded-full shadow-md font-medium"
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
