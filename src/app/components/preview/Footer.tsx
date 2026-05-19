import { Heart } from 'lucide-react';
import type { ThemeConfig } from '../../App';

interface FooterProps {
  professionalName: string;
  theme: ThemeConfig;
}

export function Footer({ professionalName, theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4">{professionalName}</h3>
            <p className="text-gray-400">
              Professional psychological services with compassion and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="hover:opacity-80 transition-colors"
                  style={{ color: theme.accentColor }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:opacity-80 transition-colors"
                  style={{ color: theme.accentColor }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#booking" 
                  className="hover:opacity-80 transition-colors"
                  style={{ color: theme.accentColor }}
                >
                  Book Session
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:opacity-80 transition-colors"
                  style={{ color: theme.accentColor }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-colors"
                  style={{ color: theme.accentColor }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-colors"
                  style={{ color: theme.accentColor }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:opacity-80 transition-colors"
                  style={{ color: theme.accentColor }}
                >
                  HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} {professionalName}. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              Made with <Heart className="h-4 w-4" style={{ color: theme.primaryColor }} /> for better mental health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
