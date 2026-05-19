import { Award, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import type { ThemeConfig } from '../../App';

interface AboutProps {
  bio: string;
  credentials: string[];
  aboutImage: string;
  theme: ThemeConfig;
}

export function About({ bio, credentials, aboutImage, theme }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={aboutImage}
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-2">
              <p className="preview-primary-text">About Me</p>
              <h2 className="text-gray-900">
                Dedicated to Your Mental Wellness
              </h2>
            </div>

            <p className="text-gray-600">
              {bio}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2 preview-primary-text">
                <Award className="h-5 w-5" />
                <span>Credentials & Qualifications</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 preview-primary-text flex-shrink-0 mt-0.5" />
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
