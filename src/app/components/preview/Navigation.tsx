import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import type { ThemeConfig } from '../../App';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  professionalName: string;
  theme: ThemeConfig;
}

export function Navigation({ isMenuOpen, setIsMenuOpen, professionalName, theme }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Book Session', id: 'booking' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="transition-colors hover:opacity-80"
              style={{ color: theme.primaryColor }}
            >
              {professionalName.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:opacity-80 transition-colors"
                style={{ 
                  color: item.label === 'Book Session' ? theme.primaryColor : undefined 
                }}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('booking')}
              className="preview-primary-bg preview-primary-hover"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                style={{ 
                  backgroundColor: item.label === 'Book Session' ? theme.accentColor : undefined,
                  color: item.label === 'Book Session' ? theme.primaryColor : undefined 
                }}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('booking')}
              className="w-full preview-primary-bg preview-primary-hover"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
