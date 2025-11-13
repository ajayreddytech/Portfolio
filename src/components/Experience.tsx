import { Briefcase, Database, Brain, Code2, Cloud, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    company: 'NeuroLume',
    role: ' Full Stack Developer',
    period: 'Jun 2024 – May 2025',
    icon: Cloud,
    achievements: [
    'Developed an end-to-end subscription checkout system using React, Node.js, and Stripe with secure tokenization and webhooks, reducing checkout abandonment by 35% and boosting MRR by 18% within first two months of launch.',
'Engineered an AI recommendation engine using user behavior data, integrated into the subscription checkout flow, boosting upsells by 15%, average order value by 10%, and delivering actionable insights for product decisions.',
'Optimized backend performance by profiling slow API endpoints, creating MongoDB indexes, and adding Redis cache, reducing average response time by 73% and peak CPU usage by 40%, thereby doubling the concurrent user capacity.',
'Transformed the frontend experience by modularizing UI components and applying code-splitting and lazy loading, improving load times by 57% and increasing user signup conversions by 12% through a smoother and faster interface.',
'Streamlined development and deployment processes by setting up CI/CD pipelines in Jenkins with automated testing in Jest, which increased deployment frequency from monthly to weekly and reduced post-release bug fixes by 70%.',

    ],
  },
  {
    company: 'Research & Innovation, Lambton College',
    role: 'Full Stack Developer',
    period: 'May 2023 – Apr 2024',
    icon: Database,
    achievements: [
    'Led the development of a real-time user profile dashboard with React, Node.js, and MongoDB, integrating dynamic charts and live updates, which boosted user engagement by 14% and cut support tickets by 25% within three months.',
'Engineered an anomaly detection system using Python and scikit-learn to flag unusual user activity, integrated into thedashboard, reducing undetected errors by 40% and increasing actionable insights for product managers by 30%.',
'Enhanced API efficiency by refactoring endpoints, optimizing MongoDB queries, and adding pagination, which cut APIresponse time by 45% and reduced server memory usage by 30%, enabling smoother peak traffic handling.',
'Dockerized and deployed the dashboard on AWS EC2 with Auto Scaling and a Load Balancer, enabling it to handle 5,000 API requests per minute, reducing downtime by 40%, and maintaining reliable performance under peak load.',
'Automated repetitive testing and validation workflows by creating Jest unit and integration tests, integrated into AWS CI/CD pipelines, which reduced QA time by 28%, caught bugs earlier, and improved deployment stability by 35%.',

    ],
  },
  {
    company: 'Google Developer Student Club LCIT',
    role: 'Front End Developer',
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
