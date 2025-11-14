import { Code, Brain, Cloud, Database, Wrench, Users } from "lucide-react";
import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["JavaScript", "Python", "Java", "C#"],
  },
  {
    title: "Front End",
    icon: Brain,
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind",
      "SASS",
      "Bootstrap",
      "PWAs",
      "Firebase",
    ],
  },
  {
    title: "Back End",
    icon: Cloud,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "Flask",
      "WebSockets",
      "OAuth",
      "Passport.js",
      "System Design",
      "Helmet.js",
      "Web Application Security",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "PL/SQL",
      "MySQL",
      "DynamoDB",
      "DocumentDB",
      "FirestoreDB",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Git",
      "Azure",
      "Agile & Scrum",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Cloud,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
      "TensorFlow",
      "OpenCV",
      "Deep Learning",
      "AI Integration",
      "GenAI",
      "Prompt Engineering",
      "LLM Testing",
    ],
  },
  {
    title: "Software Knowledge",
    icon: Wrench,
    skills: [
      "Visual Studio Code",
      "IntelliJ IDEA",
      "PyCharm",
      "Cursor",
      "Postman",
      "Jest",
      "Selenium",
      "JIRA",
      "Trello",
      "Figma",
      "Adobe XD",
      "LM Studio",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Problem-solving",
      "Communication",
      "Teamwork",
      "Leadership",
      "Critical thinking",
      "Creativity",
      "Adaptability",
      "Time management",
      "Attention to detail",
      "Coachable",
      "Continuous learning",
      "Accountable",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for building intelligent solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.title}
                  className="gradient-card p-6 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Card className="gradient-card p-8 border-border/50 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2 pb-6 border-b border-border/50">
                    <h4 className="text-xl font-semibold text-primary">
                      Graduate Certificate in Artificial Intelligence and
                      Machine Learning
                    </h4>
                    <p className="text-foreground/80 font-medium">
                      University of Toronto
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Concentration: Applied Machine Learning, Blockchain, AI
                      and Web3 Integration, and AI Agents.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-primary">
                      Postgraduate Degree in Full Stack Software Developement
                    </h4>
                    <p className="text-foreground/80 font-medium">
                      Lambton College
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Concentration: User-Centric Design, Scalable API
                      Architecture, System Design and Security, DevOps, Cloud
                      Native Development.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
