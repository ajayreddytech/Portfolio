import { Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [

  {
    name: 'Bharat L. Vora',
    role: 'GDSC Lead',
    company: 'Google Developer Student Clubs, LCIT.',
    content:
'Working with Ajay on the HACK‑LCIT app was honestly one of the best parts of the event. He took complete ownership of the mobile app — from setting up the QR scanner to building the whole milestone tracking system — and he made it all look effortless. The gamified flow and the social leaderboard were fully his ideas, and they genuinely made the event more fun for everyone. What impressed me most was how he kept optimizing the app even during crunch time. The UI felt fast, clean, and smooth because he kept refining the components and fixing things without ever being asked. We had over 200 participants, and the app ran flawlessly the entire time. Ajay is the kind of developer who understands both the tech and the user side, and it really showed in this project.',
    rating: 5,
  },
    {
    name: 'Harsharan Singh Raina',
    role: 'Lead DM',
    company: 'Walmart Canada',
    content:
    'Ajay is the most welcoming and easy-to-approach guy I have ever met. His interpersonal as well as technical skills are commendable! I worked alongside him at Google Developer student club in Lambton College in Toronto. His innovative ideas and strong coding skills helped the club in organizing a lot of hackathons and various events. I strongly recommend him and wish him best of luck in all his future endeavours.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="gradient-card p-6 md:p-8 border-border shadow-lg hover:shadow-glow transition-all duration-300 animate-slide-up flex flex-col justify-between h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content area */}
                <div className="flex-1 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/30" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author - move outside flex-1 so it stays at the bottom */}
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
