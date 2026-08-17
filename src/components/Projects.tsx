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
                <div className="h-5 w-5 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        PresenceAI
                      </h3>
                      <Badge className="w-full justify-center text-center py-1.5 bg-primary text-primary-foreground">
                        Built @ Google Solutions Challenge <br/> (Global Top 100 Finalist)
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
Developed real-time AI-powered body language analyzer using OpenCV, MediaPipe, Next.js, Node.js, and MongoDB to deliver live confidence scoring, posture and speech feedback, boosting user public speaking effectiveness by 30%.
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
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
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
                <div className="h-5 w-5 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        RetroPix
                      </h3>
                      <Badge className="w-full justify-center text-center py-1.5 bg-primary text-primary-foreground">
                        Built @ UofT Hacks <br/> (Winner - AI & Creative Tech Track)
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
Engineered full-stack mobile app using React Native, Express.js, Python, Azure Postgres, and Cohere API to transform user outfits and surroundings into historical eras, creating immersive experiences and scalability for tourist installations.
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
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Express.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Azure Postgres</Badge>
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
                <div className="h-5 w-5 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        AstroPulse
                      </h3>
                      <Badge className="w-full justify-center text-center py-1.5 bg-primary text-primary-foreground">
                        Built @ NASA Space Apps Challenge <br/> (Nominee - Best use of Technology Track)
                      </Badge>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
Built MERN-based full-stack NASA mission control dashboard, Dockerized and deployed on AWS EC2, to track 500+ NASA & SpaceX missions, enabling real-time launch tracking, automated mission scheduling, and habitability analysis.                  
</p>

<div className="flex flex-wrap gap-2">
  <Badge variant="secondary">React.js</Badge>
  <Badge variant="secondary">Node.js</Badge>
  <Badge variant="secondary">Express.js</Badge>
  <Badge variant="secondary">MongoDB</Badge>
  <Badge variant="secondary">Docker</Badge>
  <Badge variant="secondary">AWS EC2</Badge>
  <Badge variant="secondary">REST APIs</Badge>
  <Badge variant="secondary">NASA Open APIs</Badge>
  <Badge variant="secondary">SpaceX API</Badge>
  <Badge variant="secondary">JavaScript</Badge>
  <Badge variant="secondary">Git</Badge>
</div>

                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                    onClick={() =>
                      window.open(
                        "https://github.com/ajayreddytech/AstroPulse",
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
