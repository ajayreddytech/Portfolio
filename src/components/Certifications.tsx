import { Award, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: 'Frontend Development Certification',
    description: 'Mastered React, Contexts, Hooks, Firebase, Redux, TypeScript, PWAs; Built Fashion E-com store for Monarch Styles.',
    link: 'https://drive.google.com/file/d/1HejR0wxyoHMFINvCZUdhIjHmjOiItjYJ/view?usp=drive_link',
  },
  {
    title: 'Backend Development Certification',
    description: 'Learned Node.js, Express.js, GraphQL, WebSockets, OAuth, Docker; Developed NASA Mission Control Dashboard.',
    link: 'https://drive.google.com/file/d/1CxtejauzZ8AtWtwkWm-La4X0HFYNMfZj/view?usp=drive_link',
  },
  {
    title: 'MongoDB Certification',
    description: 'Proficiency in MongoDB for building NoSQL database schemas, queries, and aggregations, tailored for full stack applications.',
    link: 'https://drive.google.com/file/d/1miAXwdrkBjwKqlxM8O4SoGA-R9om5bxw/view?usp=drive_link',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    description: 'Learned IAM, EC2, S3, Lambda, DynamoDB, API Gateway and 40+ services; Deployed a Full-stack app using Amplify.',
    link: 'https://drive.google.com/file/d/1cN4rxQBTHrwf2t0GqHy6LOPluFyOGwp4/view?usp=drive_link',
  },
  {
    title: 'JavaScript Advanced',
    description: 'Deep understanding of modern JavaScript, ES6+, asynchronous programming, and frontend-backend integration in MERN stack.',
    link: 'https://drive.google.com/file/d/1eV4JBilc8VkOAGNKST8gYrTqQwQr38jG/view?usp=drive_link',
  },
  {
    title: 'Python Developer Bootcamp',
    description: 'Comprehensive Python programming for scripting, automation, and backend development.',
    link: 'https://drive.google.com/file/d/1-2Ea4DvPHqTCmJkWIQ74YjBaDIV_3APG/view?usp=drive_link',
  },
  {
    title: 'The Complete SQL and Databases Bootcamp',
    description: 'Learned MySQL, PostgreSQL, MongoDB, DocumentDB, FirestoreDB; Solved Keiko Corp\’s Data Breach Case.',
    link: 'https://drive.google.com/file/d/1ZpYCFAscSpJRFTnJjqYPCbnCJhwoHKXm/view?usp=drive_link',
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Fundamentals of DSA in JavaScript and Python, optimizing code efficiency and problem-solving skills.',
    link: 'https://drive.google.com/file/d/1QXYmUZVZU-019YSqdzTLcOkJmY2VbEh0/view?usp=drive_link',
  },
  {
    title: 'Java Advanced',
    description: 'Advanced Java programming, OOP concepts, and building robust backend applications.',
    link: 'https://drive.google.com/file/d/1Yt-QdZiGwEDtoYWAFpAoeFRJu4Qo2fzw/view?usp=drive_link',
  },
  {
    title: 'Java Programming: Solving Problems with Software',
    description: 'Problem-solving using Java, data structures, and software design principles.',
    link: 'https://drive.google.com/file/d/1SOssYvf2NKM48Bj_gEIlqzcmkDfvlKPA/view?usp=drive_link',
  },
  {
    title: 'System Design and Architecture',
    description: 'Key principles of scalable system design, microservices, APIs, and architecture for full stack applications.',
    link: 'https://drive.google.com/file/d/1vqU-kLb28KzCwgABRyqyb6zInoOJlvlS/view?usp=drive_link',
  },
  {
    title: 'Prompt Engineering and Working with LLMs',
    description: 'Techniques for designing effective prompts and workflows with large language models.',
    link: 'https://drive.google.com/file/d/11dL4WJpqv6QrawojTFZd_WT52G_eCz7F/view?usp=drive_link',
  },
  {
    title: 'AI, Machine Learning, and Data Science Bootcamp',
    description: 'Foundations in AI/ML, data processing, supervised/unsupervised learning, and Azure data services.',
    link: 'Built projects on Image classification, Heart disease prediction, Price forecasting; Led LLM performance research.',
  },
  {
    title: 'Responsive Web Design',
    description: 'Building mobile-first, responsive web pages with CSS, Flexbox, Grid, and modern UI frameworks.',
    link: 'https://drive.google.com/file/d/1itpc__6uWGMf7VL7SDGVIWkTkLwDXlYg/view?usp=drive_link',
  },
  {
    title: 'SEO Bootcamp',
    description: 'Optimizing web applications for search engines, meta tags, and performance best practices.',
    link: 'https://drive.google.com/file/d/1lhbsMMDLJlHPbsQiYH3GdvltC-I4jcja/view?usp=drive_link',
  },
  {
    title: 'Version Control Bootcamp',
    description: 'Version control using Git, collaboration via GitHub, and managing full stack projects efficiently.',
    link: 'https://drive.google.com/file/d/1EEaQTfjoYpIt_lHNA27KKkB_Sn9tH9Un/view?usp=drive_link',
  },
  {
    title: 'Microsoft Excel Certification',
    description: 'Advanced Excel skills for data analysis, reporting, and automating tasks in software projects.',
    link: 'https://drive.google.com/file/d/1lXSgYl0DjoH2S8o1KucD_fdM7ogG_H7d/view?usp=drive_link',
  },
  {
    title: 'Web3 and Blockchain Masterclass',
    description: 'Introduction to blockchain, smart contracts, and decentralized application development.',
    link: 'https://drive.google.com/file/d/1MudcXK88CDarkFi3XdkEtdc4cjnXG6GL/view?usp=drive_link',
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
                    <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{cert.description}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <Button
                      variant="link"
                      className="text-primary hover:text-primary/80 p-0 h-auto"
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
