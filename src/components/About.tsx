import { GraduationCap, Briefcase, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-justify text-muted-foreground max-w-4xl mx-auto">
I am a Full-Stack Software Developer building high-performance web applications and practical AI systems that move business metrics. 


<br/><br/>

🛠️ <strong className="text-foreground">Core Tech:</strong>
<br/>
<strong className="text-foreground">Frontend:</strong> React, Next.js, React Native, TypeScript, Tailwind CSS, Redux, Figma
<br/>
<strong className="text-foreground">Backend:</strong> Node.js, Express.js, Python (FastAPI/Flask), Java, RESTful APIs, GraphQL  
<br/>
<strong className="text-foreground">Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis, DynamoDB  
<br/>
<strong className="text-foreground">Cloud & DevOps:</strong> AWS, GCP, Docker, GitHub Actions, Jenkins, CI/CD 
<br/><br/>


Let's connect and create the next big thing together!            </p>



          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Professional Summary */}
            <div className="space-y-6 animate-slide-up"></div>

            {/* /* Education */}
            {/* <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
                        Professional Certificate, Artificial Intelligence and Machine Learning
                      </h4>
                      <p className="text-foreground/80 font-medium">University of Toronto</p>
                      <p className="text-sm text-muted-foreground">
                        Concentration: Applied Machine Learning, Autonomous AI Agents, Blockchain, Smart Contracts, AI & Web3 Integration.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-primary">
                        Graduate Diploma, Computer Science, Full Stack Software Development Specialization.
                      </h4>
                      <p className="text-foreground/80 font-medium">Lambton College</p>
                      <p className="text-sm text-muted-foreground">
                        Concentration:  User-Centric Design, Scalable API Architecture, System Design and Security, Distributed Systems, DevOps, Cloud Native Development.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
