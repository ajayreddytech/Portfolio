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
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              As a Full Stack Developer at NeuroLume, I built scalable,
              user-centric systems that directly moved business metrics, not
              just features. I led the development of a subscription checkout
              system using React, Node.js, and Stripe, cutting checkout
              abandonment and boosting MRR by 18% within two months. Alongside
              that, I built an AI recommendation engine that boosted upsells and
              AOV by 10%, optimized backend/API performance, and transformed the
              front-end experience with modular, high-performance UI patterns,
              lifting signup conversions.
            </p>
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              Previously, at Research & Innovation Lambton College, I developed
              real-time user profile dashboards that increased user engagement
              and cut support tickets, built anomaly detection systems that
              flagged unusual user behavior, and developed AWS backend systems
              that handled 5,000+ API requests per minute. Earlier, at GDSC
              LCIT, I built a React Native event app with a gamified
              milestone-tracking system that boosted active event participation
              by 40% and delivered a smooth experience for 200 users.
            </p>
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              I bring a strong foundation across the MERN stack—React, Node.js,
              TypeScript, MongoDB—supported by experience in UI/UX, Docker,
              CI/CD, and AWS. I specialize in integrating AI and Web3 into
              product flows and have built 40+ projects ranging from NASA
              mission simulations to AI-powered apps, and my certifications span
              frontend, backend, cloud, databases, applied machine learning, and
              AI agents.
            </p>
            <p className="text-xl text-justify text-muted-foreground max-w-3xl mx-auto">
              I’m a business-driven and results-oriented full-stack developer
              who builds fast, reliable, and scalable digital products. I’m
              actively seeking opportunities where I can grow alongside teams,
              drive measurable product KPIs, and build the future leveraging
              full stack, AI, and Web3. If you are looking for an ideal
              candidate, let’s connect.
            </p>
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
                        Graduate Certificate in Artificial Intelligence and Machine Learning
                      </h4>
                      <p className="text-foreground/80 font-medium">University of Toronto</p>
                      <p className="text-sm text-muted-foreground">
                        Concentration: Applied Machine Learning, Blockchain, AI and Web3 Integration, and AI Agents.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-primary">
                        Postgraduate Degree in Full Stack Software Developement
                      </h4>
                      <p className="text-foreground/80 font-medium">Lambton College</p>
                      <p className="text-sm text-muted-foreground">
                        Concentration:  User-Centric Design, Scalable API Architecture, System Design and Security, DevOps, Cloud Native Development.
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
