import { Brain, Heart, Users, Sparkles, Video, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Brain,
    title: 'Anxiety & Stress Management',
    description: 'Learn effective techniques to manage anxiety, reduce stress, and regain control of your thoughts and emotions.',
  },
  {
    icon: Heart,
    title: 'Depression Treatment',
    description: 'Evidence-based therapy to help you overcome depression and rediscover joy and meaning in your life.',
  },
  {
    icon: Users,
    title: 'Relationship Counseling',
    description: 'Improve communication, resolve conflicts, and build stronger, healthier relationships.',
  },
  {
    icon: Sparkles,
    title: 'Personal Growth',
    description: 'Develop self-awareness, build confidence, and achieve your personal and professional goals.',
  },
  {
    icon: Video,
    title: 'Online Sessions',
    description: 'Convenient virtual therapy sessions from the comfort of your home via secure video conferencing.',
  },
  {
    icon: MapPin,
    title: 'In-Person Sessions',
    description: 'Traditional face-to-face therapy in a comfortable, private, and welcoming office environment.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">Services</p>
          <h2 className="text-gray-900 mb-4">
            How I Can Help You
          </h2>
          <p className="text-gray-600">
            I offer a range of therapeutic services tailored to your unique needs, 
            available both online and in-person.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
