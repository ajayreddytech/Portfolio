import { Briefcase, Database, Brain, Code2, Cloud, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    company: 'NeuroLume',
    role: ' Full Stack Developer',
    period: 'Mar 2024 – Feb 2026',
    icon: Cloud,
achievements: [
    'Architected and deployed 8 full-stack applications across e-commerce, healthcare, and real estate using React, Next.js, Express.js, AWS, and MongoDB; owned full SDLC from architectural design to deployment, resulting in 100% on-time client delivery and securing 3 contract extensions.',

    'Engineered high-throughput backend architectures and secure GraphQL/REST APIs using Node.js, Python (Flask), and PostgreSQL; implemented OAuth 2.0 and JWT authentication, maintaining sub-200ms API response times alongside 99.9% production system uptime.',

    'Spearheaded the development of responsive web and mobile interfaces from Figma prototypes using React, Next.js, React Native, TypeScript, Redux, and Tailwind CSS; optimized rendering pipelines to cut asset load times by 40% and increase cross-platform user engagement by 25%.',

    'Optimized client database schemas and API query layers across PostgreSQL and MongoDB by implementing Redis caching layers and custom B-tree indexing; slashed server latency by 50% while decreasing AWS cloud infrastructure overhead by 20%.',

    'Automated client deployment and QA pipelines by engineering multi-environment CI/CD workflows using Docker, AWS (EC2, S3, Lambda), and GitHub Actions; integrated Jest test suites, accelerating release cycles by 35% and dropping post-release production bugs by 60%.',

    'Deployed production-ready conversational AI agents featuring automated intent classification and context-aware retrieval pipelines via FastAPI and modern LLM APIs; streamlined client support operations by resolving 40% of routine user inquiries autonomously.'
],
  },
  {
    company: 'Google Developer Student Club LCIT',
    role: 'Mobile Application Developer',
    period: 'Jan 2023 – Apr 2023',
    icon: Code,
    achievements: [
    'Designed and implemented the "HACK-LCIT" mobile app using React Native, creating a QR code scanning system and a milestone-based tracking feature, which boosted participant engagement and handled 200 users seamlessly.',
'Engineered a gamified milestone tracking system to award points automatically upon task completion, improving user motivation and boosting active participation by 40% compared to previous events.',
'Developed a real-time social leaderboard and peer challenge system, encouraging friendly competition among participants, increasing active engagement by 22%, and driving repeat app usage throughout the event.',
'Optimized app performance and UI responsiveness by modularizing React Native components and streamlining state management, which ensured smooth navigation and reduced latency by 25%, enhancing the overall user experience.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building the Future with Full Stack, AI, and Web3
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={exp.company}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                      <div className="h-4 w-4 rounded-full bg-primary shadow-glow"></div>
                    </div>

                    <div className={`md:grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:direction-rtl'}`}>
                      <div className={isEven ? 'md:text-left' : 'md:col-start-2'}>
                        <Card className="gradient-card p-6 md:p-8 border-border/50 shadow-lg hover:shadow-glow transition-all duration-300">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                              <p className="text-primary font-semibold">{exp.company}</p>
                              <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                            </div>
                          </div>

                          <ul className="space-y-3 mt-6">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 text-foreground/80">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
