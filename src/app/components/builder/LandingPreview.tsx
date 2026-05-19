import { useState } from 'react';
import type { ThemeConfig, ProfessionalData } from '../../App';
import { Navigation } from '../preview/Navigation';
import { Hero } from '../preview/Hero';
import { About } from '../preview/About';
import { Services } from '../preview/Services';
import { Booking } from '../preview/Booking';
import { Contact } from '../preview/Contact';
import { Footer } from '../preview/Footer';

interface LandingPreviewProps {
  theme: ThemeConfig;
  professionalData: ProfessionalData;
}

export function LandingPreview({ theme, professionalData }: LandingPreviewProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          .preview-primary-bg { background-color: ${theme.primaryColor} !important; }
          .preview-primary-hover:hover { background-color: ${theme.secondaryColor} !important; }
          .preview-primary-text { color: ${theme.primaryColor} !important; }
          .preview-primary-border { border-color: ${theme.primaryColor} !important; }
          .preview-accent-bg { background-color: ${theme.accentColor} !important; }
          .preview-gradient-from { background: linear-gradient(to bottom, ${theme.accentColor}, white) !important; }
        `}
      </style>

      <Navigation 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        professionalName={professionalData.name}
        theme={theme}
      />
      <main>
        <Hero 
          name={professionalData.name}
          title={professionalData.title}
          specialization={professionalData.specialization}
          whatsapp={professionalData.whatsapp}
          heroImage={professionalData.heroImage}
          theme={theme}
        />
        <About 
          bio={professionalData.bio}
          credentials={professionalData.credentials}
          aboutImage={professionalData.aboutImage}
          theme={theme}
        />
        <Services theme={theme} />
        <Booking 
          availableSessionTypes={professionalData.availableSessionTypes}
          professionalName={professionalData.name}
          theme={theme}
        />
        <Contact 
          email={professionalData.email}
          phone={professionalData.phone}
          whatsapp={professionalData.whatsapp}
          location={professionalData.location}
          theme={theme}
        />
      </main>
      <Footer professionalName={professionalData.name} theme={theme} />
    </div>
  );
}
