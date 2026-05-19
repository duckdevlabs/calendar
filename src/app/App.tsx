import { useState } from 'react';
import { WelcomeSection } from './components/builder/WelcomeSection';
import { CustomizationPanel } from './components/builder/CustomizationPanel';
import { LandingPreview } from './components/builder/LandingPreview';
import { DeploySection } from './components/builder/DeploySection';
import { Button } from './components/ui/button';
import { Palette, Eye } from 'lucide-react';

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  primaryColorName: string;
}

export interface ProfessionalData {
  name: string;
  title: string;
  specialization: string;
  phone: string;
  email: string;
  whatsapp: string;
  location: string;
  bio: string;
  credentials: string[];
  availableSessionTypes: string[];
  heroImage: string;
  aboutImage: string;
}

const defaultTheme: ThemeConfig = {
  primaryColor: '#10b981',
  secondaryColor: '#059669',
  accentColor: '#d1fae5',
  primaryColorName: 'emerald',
};

const defaultData: ProfessionalData = {
  name: 'Dr. Sarah Mitchell',
  title: 'Clinical Psychologist',
  specialization: 'Cognitive Behavioral Therapy & Anxiety Disorders',
  phone: '+1234567890',
  email: 'contact@sarahmitchell.com',
  whatsapp: '+1234567890',
  location: 'San Francisco, CA',
  bio: 'With over 10 years of experience in clinical psychology, I specialize in helping individuals overcome anxiety, depression, and life transitions. My approach combines evidence-based cognitive behavioral therapy with mindfulness techniques to help you achieve lasting change.',
  credentials: [
    'PhD in Clinical Psychology',
    'Licensed Clinical Psychologist (CA)',
    'Certified CBT Practitioner',
    '10+ Years Experience'
  ],
  availableSessionTypes: ['online', 'in-person'],
  heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop',
  aboutImage: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
};

export default function App() {
  const [currentView, setCurrentView] = useState<'welcome' | 'builder' | 'deploy'>('welcome');
  const [showCustomization, setShowCustomization] = useState(false);
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [professionalData, setProfessionalData] = useState<ProfessionalData>(defaultData);

  const handleStartCustomization = () => {
    setCurrentView('builder');
    setShowCustomization(true);
  };

  const handlePreviewMode = () => {
    setShowCustomization(false);
  };

  const handleEditMode = () => {
    setShowCustomization(true);
  };

  const handleDeploy = () => {
    setCurrentView('deploy');
    setShowCustomization(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'welcome' && (
        <WelcomeSection onStartCustomization={handleStartCustomization} />
      )}

      {currentView === 'builder' && (
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Customization Panel - Slides in/out */}
          <div className={`
            fixed lg:relative top-0 left-0 h-full bg-white border-r border-gray-200 
            transition-transform duration-300 z-40
            ${showCustomization ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            w-full lg:w-96 overflow-y-auto
          `}>
            <CustomizationPanel
              theme={theme}
              setTheme={setTheme}
              professionalData={professionalData}
              setProfessionalData={setProfessionalData}
              onDeploy={handleDeploy}
              onClose={() => setShowCustomization(false)}
            />
          </div>

          {/* Preview Area */}
          <div className="flex-1 overflow-y-auto">
            {/* Mobile Controls */}
            <div className="lg:hidden fixed top-4 right-4 z-30 flex gap-2">
              {!showCustomization && (
                <Button
                  onClick={handleEditMode}
                  size="lg"
                  className="shadow-lg"
                  style={{ 
                    backgroundColor: theme.primaryColor,
                  }}
                >
                  <Palette className="mr-2 h-5 w-5" />
                  Customize
                </Button>
              )}
            </div>

            {/* Desktop Preview Mode Toggle */}
            <div className="hidden lg:block fixed top-4 right-4 z-30">
              <Button
                onClick={() => setShowCustomization(!showCustomization)}
                variant="outline"
                size="lg"
                className="shadow-lg bg-white"
              >
                {showCustomization ? (
                  <>
                    <Eye className="mr-2 h-5 w-5" />
                    Preview Only
                  </>
                ) : (
                  <>
                    <Palette className="mr-2 h-5 w-5" />
                    Edit Mode
                  </>
                )}
              </Button>
            </div>

            <LandingPreview theme={theme} professionalData={professionalData} />
          </div>

          {/* Overlay for mobile */}
          {showCustomization && (
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 z-30"
              onClick={() => setShowCustomization(false)}
            />
          )}
        </div>
      )}

      {currentView === 'deploy' && (
        <DeploySection 
          theme={theme}
          professionalData={professionalData}
          onBack={() => setCurrentView('builder')}
        />
      )}
    </div>
  );
}
