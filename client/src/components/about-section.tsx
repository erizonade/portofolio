import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const experiences = [
    {
      title: "Mobile Developer",
      company: "PT. Qtasnim Digital Teknologi",
      period: "Dec 2023 - Present",
      description: "Joint Development at PT Bukit Asam Tbk",
      color: "border-l-primary",
    },
    {
      title: "Full Stack Developer",
      company: "PT. Halo Auto Indonesia",
      period: "Jun 2023 - Jan 2025",
      description: "Mobile & Full Stack Development",
      color: "border-l-green-500",
    },
    {
      title: "Freelance Developer",
      company: "Self Employed",
      period: "Sep 2018 - Present",
      description: "6+ years of freelance experience",
      color: "border-l-purple-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated software developer from Palembang, South Sumatra,
            Indonesia with a passion for creating innovative digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I have been passionate about Web & Mobile Development for over 6
              years in the professional world. Currently, I focus on the Laravel
              framework for backend development and Flutter for mobile
              applications, but I'm always open to learning new technologies and
              expanding my skill set as a programmer.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My experience spans across various companies including PT. Qtasnim
              Digital Teknologi, PT. Halo Auto Indonesia, and several other
              organizations where I've contributed to joint developments and
              innovative projects.
            </p>

            {/* Education */}
            <Card className="bg-muted">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Education</h4>
                <p className="text-muted-foreground">
                  <strong>Bachelor's Degree in Information Systems</strong>
                  <br />
                  Universitas Islam Negeri Raden Fatah
                  <br />
                  2015 - 2019
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Experience Highlights</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className={`border-l-4 ${exp.color} pl-6`}>
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
