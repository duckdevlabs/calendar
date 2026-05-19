import { Sparkles, Palette, Zap, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface WelcomeSectionProps {
  onStartCustomization: () => void;
}

const features = [
  {
    icon: Palette,
    title: 'Easy Customization',
    description: 'Change colors, images, and content with a few clicks',
  },
  {
    icon: Zap,
    title: 'Instant Preview',
    description: 'See your changes in real-time as you customize',
  },
  {
    icon: Code,
    title: 'No Coding Required',
    description: 'Build professional landing pages without technical skills',
  },
];

const benefits = [
  'Professional templates designed for psychologists',
  'Mobile-responsive design out of the box',
  'Integrated booking system',
  'WhatsApp and contact forms',
  'Fast deployment and hosting',
  'Custom domain support',
];

export function WelcomeSection({ onStartCustomization }: WelcomeSectionProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-emerald-50">
              <Sparkles className="h-4 w-4" />
              <span>Whitelabel Landing Page Builder</span>
            </div>
            
            <h1 className="text-white">
              Create Your Professional Psychology Landing Page in Minutes
            </h1>
            
            <p className="text-emerald-50 text-xl">
              Build a stunning, conversion-optimized landing page for your psychology practice. 
              No coding required. Fully customizable. Ready to deploy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onStartCustomization}
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl"
              >
                Start Customizing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                onClick={() => {
                  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See How It Works
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Mobile responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-gray-900 mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-gray-600">
              Our platform makes it easy to create a professional online presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-emerald-600 hover:shadow-lg transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Preview */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-gray-900 mb-4">
              Beautiful, Professional Design
            </h2>
            <p className="text-gray-600">
              Here's an example of what your landing page can look like. 
              Fully customizable to match your brand.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl opacity-20 blur-2xl"></div>
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop"
                alt="Landing page preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="mb-2">Customizable Template</p>
                  <h3 className="text-white mb-4">
                    Psychology Practice Landing Page
                  </h3>
                  <Button 
                    onClick={onStartCustomization}
                    className="bg-white text-emerald-700 hover:bg-emerald-50"
                  >
                    Customize This Template
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">
                What's Included?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-0">
                <CardContent className="p-8">
                  <h3 className="text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-emerald-50 mb-6">
                    Create your professional landing page in just a few clicks. 
                    No technical skills required.
                  </p>
                  <Button 
                    onClick={onStartCustomization}
                    size="lg"
                    className="w-full bg-white text-emerald-700 hover:bg-emerald-50"
                  >
                    Start Building Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Trusted by over</p>
                    <p className="text-emerald-600">500+ Professionals</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
