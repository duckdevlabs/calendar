import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { ThemeConfig } from '../../App';

interface HeroProps {
  name: string;
  title: string;
  specialization: string;
  whatsapp: string;
  heroImage: string;
  theme: ThemeConfig;
}

export function Hero({ name, title, specialization, whatsapp, heroImage, theme }: HeroProps) {
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
    <section id="hero" className="pt-20 pb-16 md:pt-28 md:pb-24 preview-gradient-from">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="preview-primary-text">Welcome</p>
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
                className="preview-primary-bg preview-primary-hover"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Session
              </Button>
              <Button 
                onClick={openWhatsApp}
                variant="outline"
                size="lg"
                className="preview-primary-border preview-primary-text hover:bg-gray-50"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden preview-accent-bg">
              <ImageWithFallback
                src={heroImage}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full -z-10 hidden md:block opacity-30"
              style={{ backgroundColor: theme.primaryColor }}
            ></div>
            <div 
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10 hidden md:block opacity-50"
              style={{ backgroundColor: theme.primaryColor }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
