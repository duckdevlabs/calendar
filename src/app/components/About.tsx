import { Award, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  bio: string;
  credentials: string[];
}

export function About({ bio, credentials }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-2">
              <p className="text-emerald-600">About Me</p>
              <h2 className="text-gray-900">
                Dedicated to Your Mental Wellness
              </h2>
            </div>

            <p className="text-gray-600">
              {bio}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <Award className="h-5 w-5" />
                <span>Credentials & Qualifications</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
