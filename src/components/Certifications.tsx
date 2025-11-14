import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Frontend Development Certification",
    description:
      "Mastered React, Contexts, Hooks, Firebase, Redux, TypeScript, PWAs; Built Fashion E-commerce store for Monarch Styles.",
    link: "https://drive.google.com/file/d/1HejR0wxyoHMFINvCZUdhIjHmjOiItjYJ/view?usp=drive_link",
  },
  {
    title: "Backend Development Certification",
    description:
      "Learned Node.js, Express.js, GraphQL, WebSockets, OAuth, Docker; Developed NASA Mission Control Dashboard.",
    link: "https://drive.google.com/file/d/1CxtejauzZ8AtWtwkWm-La4X0HFYNMfZj/view?usp=drive_link",
  },
  {
    title: "Database Development Certification",
    description:
      "Learned MySQL, PostgreSQL, MongoDB, DocumentDB, FirestoreDB; Solved Keiko Corp’s Data Breach Case.",
    link: "https://drive.google.com/file/d/1ZpYCFAscSpJRFTnJjqYPCbnCJhwoHKXm/view?usp=drive_link",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    description:
      "Learned IAM, EC2, S3, Lambda, DynamoDB, API Gateway and 40+ services; Deployed a Full-stack app using AWS Amplify.",
    link: "https://drive.google.com/file/d/1cN4rxQBTHrwf2t0GqHy6LOPluFyOGwp4/view?usp=drive_link",
  },
  {
    title: "AI and Machine Learning Practitioner Certification",
    description:
      "Learned Pandas, NumPy, Matplotlib, Scikit-Learn, TensorFlow, Deep learning basics, ML workflows, and Data preprocessing. Built projects on Image Classification, Heart Disease Prediction, and Price Forecasting.",
    link: "https://drive.google.com/file/d/1xpYNxjFccPgO5Jf8IqXh_MG9eUDnBRnd/view?usp=drive_link",
  },
  {
    title: "LLMs and Prompt Engineering Bootcamp",
    description:
      "Mastered LLM concepts, Advanced prompting techniques, and AI agent workflows; Built mini AI apps, conducted MMLU-based LLM performance research on GEMINI, GPT, and CLAUDE, and explored open-source LLMs.",
    link: "https://drive.google.com/file/d/11dL4WJpqv6QrawojTFZd_WT52G_eCz7F/view?usp=drive_link",
  },

  {
    title: "System Design and Architecture",
    description:
      "Mastered System Design concepts including Load Balancers, Job Servers, Job Queues, Edge Servers, Microservices, OLAP & OLTP databases, ACID & BASE database principles, OSI Model, TCP/IP, UDP, Distributed Systems, Server Clustering, CDNs, and CAP Theorem.",
    link: "https://drive.google.com/file/d/1vqU-kLb28KzCwgABRyqyb6zInoOJlvlS/view?usp=drive_link",
  },
  {
    title: "Web3 and Blockchain Masterclass",
    description:
      "Mastered Web3 fundamentals including Blockchain, NFTs, Proof of Work, Proof of Stake, DApps, DAOs, Hard forks, and Crypto tokens.",
    link: "https://drive.google.com/file/d/1MudcXK88CDarkFi3XdkEtdc4cjnXG6GL/view?usp=drive_link",
  },
  {
    title: "Python Developer Bootcamp",
    description:
      "Mastered Python programming, including OOPS, File handling, APIs, Web scraping, Web development using Flask, and Data Analysis. Built projects like Quick Classify, Search Genie, Hacker News Hotlist, and Breach Alert.",
    link: "https://drive.google.com/file/d/1-2Ea4DvPHqTCmJkWIQ74YjBaDIV_3APG/view?usp=drive_link",
  },

];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="gradient-card p-6 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {cert.description}
                    </p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="link"
                        className="text-primary hover:text-primary/80 p-3 h-auto"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
