import { useState } from 'react';
import { CheckCircle, Rocket, Mail, Link as LinkIcon, ArrowLeft, Copy, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import type { ThemeConfig, ProfessionalData } from '../../App';
import { toast } from 'sonner';

interface DeploySectionProps {
  theme: ThemeConfig;
  professionalData: ProfessionalData;
  onBack: () => void;
}

export function DeploySection({ theme, professionalData, onBack }: DeploySectionProps) {
  const [deploymentData, setDeploymentData] = useState({
    email: '',
    subdomain: '',
    customDomain: '',
  });
  const [isDeployed, setIsDeployed] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatedUrl = deploymentData.subdomain 
    ? `https://${deploymentData.subdomain}.psychlanding.com` 
    : null;

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();

    if (!deploymentData.email || !deploymentData.subdomain) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate deployment
    setTimeout(() => {
      setIsDeployed(true);
      toast.success('Your landing page has been deployed successfully!');
    }, 1500);
  };

  const handleCopyUrl = () => {
    if (generatedUrl) {
      navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      toast.success('URL copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isDeployed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Editor
          </Button>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
              <Rocket className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-gray-900 mb-4">
              Deploy Your Landing Page
            </h1>
            <p className="text-gray-600 text-xl">
              You're just one step away from launching your professional landing page
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Deployment Settings</CardTitle>
              <CardDescription>
                Configure your landing page URL and contact information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDeploy} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={deploymentData.email}
                    onChange={(e) => setDeploymentData({ ...deploymentData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                  <p className="text-gray-500 text-sm">
                    We'll send your landing page details and admin access to this email
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subdomain">
                    Choose Your Subdomain *
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="subdomain"
                      value={deploymentData.subdomain}
                      onChange={(e) => setDeploymentData({ 
                        ...deploymentData, 
                        subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '') 
                      })}
                      placeholder="yourname"
                      required
                    />
                    <div className="flex items-center px-4 bg-gray-100 rounded-md whitespace-nowrap text-gray-600">
                      .psychlanding.com
                    </div>
                  </div>
                  {deploymentData.subdomain && (
                    <p className="text-emerald-600 text-sm">
                      Your URL will be: {generatedUrl}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customDomain">
                    Custom Domain (Optional)
                  </Label>
                  <Input
                    id="customDomain"
                    value={deploymentData.customDomain}
                    onChange={(e) => setDeploymentData({ ...deploymentData, customDomain: e.target.value })}
                    placeholder="www.yourdomain.com"
                  />
                  <p className="text-gray-500 text-sm">
                    Connect your own domain (can be configured after deployment)
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-blue-900 mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Your landing page will be deployed instantly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>You'll receive an email with your admin dashboard access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>You can update your content anytime from the dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>All booking requests will be sent to your email</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Deploy My Landing Page
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-500">
              By deploying, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Success State
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6 animate-pulse">
            <CheckCircle className="h-12 w-12 text-emerald-600" />
          </div>
          <h1 className="text-gray-900 mb-4">
            🎉 Congratulations!
          </h1>
          <p className="text-gray-600 text-xl">
            Your landing page is now live and ready to receive visitors
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Landing Page Is Live!</CardTitle>
            <CardDescription>Share this URL with your clients and colleagues</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={generatedUrl || ''}
                readOnly
                className="text-emerald-600"
              />
              <Button
                onClick={handleCopyUrl}
                variant="outline"
                className="flex-shrink-0"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => window.open(generatedUrl || '', '_blank')}
                className="flex-1"
                style={{ backgroundColor: theme.primaryColor }}
              >
                <LinkIcon className="mr-2 h-4 w-4" />
                Visit Your Landing Page
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-2">Check Your Email</h3>
              <p className="text-gray-600">
                We've sent setup instructions and admin access to {deploymentData.email}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Rocket className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-gray-900 mb-2">Next Steps</h3>
              <p className="text-gray-600">
                Share your landing page and start receiving booking requests!
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-white mb-4">Need Help?</h3>
            <p className="text-emerald-50 mb-6">
              Our support team is here to help you get the most out of your landing page
            </p>
            <Button 
              variant="outline" 
              className="bg-white text-emerald-700 hover:bg-emerald-50 border-0"
            >
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
