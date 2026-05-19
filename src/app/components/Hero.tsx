import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  name: string;
  title: string;
  specialization: string;
  whatsapp: string;
}

export function Hero({ name, title, specialization, whatsapp }: HeroProps) {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <section id="hero" className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-emerald-600">Welcome</p>
              <h1 className="text-gray-900">
                {name}
              </h1>
              <p className="text-gray-600 text-xl">
                {title}
              </p>
              <p className="text-gray-500">
                {specialization}
              </p>
            </div>

            <p className="text-gray-600">
              Taking the first step towards better mental health takes courage. 
              I'm here to provide a safe, supportive space where you can explore 
              your thoughts and feelings, develop coping strategies, and work 
              towards positive change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToBooking}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Session
              </Button>
              <Button 
                onClick={openWhatsApp}
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-emerald-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop"
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-300 rounded-full -z-10 hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
