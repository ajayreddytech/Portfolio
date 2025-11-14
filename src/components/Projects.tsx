import { FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Project1_Image from "@/assets/image.png";

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Development work in Full Stack, Cloud, Machine Learning, and AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Project */}
            <Card className="md:col-span-1 p-8 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-10">
                <img
                  src={Project1_Image}
                  alt="Project Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        Nasa Mission Control Dashboard
                      </h3>
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    Simulated NASA mission operations using NASA and SpaceX API
                    data, built a scalable, production-ready app with
                    Express.js, React.js, and MongoDB. Dockerized and deployed
                    on AWS EC2, enabling real-time mission monitoring.{" "}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">Amazon Web Services</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">MVC Architecture</Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                    onClick={() =>
                      window.open(
                        "https://github.com/ajayreddytech/NASA-Mission-Control",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-1 p-8 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-10">
                <img
                  src={Project1_Image}
                  alt="Project Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        Monarch Styles - Fashion Ecom Store
                      </h3>
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    Developed a Full-stack e-commerce website using React,
                    Redux, TypeScript, and Firebase; Integrated Google Auth,
                    Firestore inventory, and Stripe checkout to deliver a
                    secure, seamless, and high-performance shopping experience.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Redux.js</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">
                      Progressive Web Applications (PWAs)
                    </Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Git</Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                    onClick={() =>
                      window.open(
                        "https://github.com/ajayreddytech/Monarch-Styles-Main",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-1 p-8 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-10">
                <img
                  src={Project1_Image}
                  alt="Project Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        PresenceAI
                      </h3>
                      <Badge className="bg-primary text-primary-foreground">
                        Built @ SPUR Hacks
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    Designed and implemented a real-time AI-powered body
                    language analyzer using OpenCV and MediaPipe, improving
                    public speaking effectiveness by 30% through instant
                    confidence scoring and personalized feedback.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Artificial Intelligence</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">OpenCV</Badge>
                    <Badge variant="secondary">Media Pipe</Badge>
                    <Badge variant="secondary">OpenAI API</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Git</Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                    onClick={() =>
                      window.open(
                        "https://devpost.com/software/presenceai",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-1 p-8 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up relative overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-10">
                <img
                  src={Project1_Image}
                  alt="Project Background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        RetroPix
                      </h3>
                      <Badge className="bg-primary text-primary-foreground">
                        Built @ UofT Hacks
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    Built an AI-powered interactive app using Cohere API,
                    transforming users’ outfits and surroundings to historical
                    eras, creating immersive experiences, promoting cultural
                    heritage, and demonstrating scalability for tourist
                    installations.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Artificial Intelligence</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Virtual Reality</Badge>
                    <Badge variant="secondary">Cohere API</Badge>
                    <Badge variant="secondary">GenAI</Badge>
                    <Badge variant="secondary">UI/UX</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Git</Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                    onClick={() =>
                      window.open(
                        "https://devpost.com/software/retropix",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </Card>

            {/* Placeholder for Additional Projects */}
            <Card
              className="gradient-card p-8 border-border/50 shadow-lg border-dashed animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-center space-y-4 opacity-50">
                <div className="h-16 w-16 rounded-lg bg-muted mx-auto flex items-center justify-center">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold text-muted-foreground">
                  Project Coming Soon
                </h3>
                <p className="text-sm text-muted-foreground">
                  More projects will be added here
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
