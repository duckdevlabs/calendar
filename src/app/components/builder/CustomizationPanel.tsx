import { useState } from 'react';
import { X, Palette, Type, Image as ImageIcon, Save, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import type { ThemeConfig, ProfessionalData } from '../../App';
import { Separator } from '../ui/separator';

interface CustomizationPanelProps {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  professionalData: ProfessionalData;
  setProfessionalData: (data: ProfessionalData) => void;
  onDeploy: () => void;
  onClose: () => void;
}

const colorPresets = [
  { name: 'emerald', primary: '#10b981', secondary: '#059669', accent: '#d1fae5', label: 'Emerald' },
  { name: 'blue', primary: '#3b82f6', secondary: '#2563eb', accent: '#dbeafe', label: 'Blue' },
  { name: 'purple', primary: '#a855f7', secondary: '#9333ea', accent: '#f3e8ff', label: 'Purple' },
  { name: 'rose', primary: '#f43f5e', secondary: '#e11d48', accent: '#ffe4e6', label: 'Rose' },
  { name: 'amber', primary: '#f59e0b', secondary: '#d97706', accent: '#fef3c7', label: 'Amber' },
  { name: 'teal', primary: '#14b8a6', secondary: '#0d9488', accent: '#ccfbf1', label: 'Teal' },
];

export function CustomizationPanel({ 
  theme, 
  setTheme, 
  professionalData, 
  setProfessionalData,
  onDeploy,
  onClose 
}: CustomizationPanelProps) {
  const [activeTab, setActiveTab] = useState('colors');

  const handleColorChange = (preset: typeof colorPresets[0]) => {
    setTheme({
      primaryColor: preset.primary,
      secondaryColor: preset.secondary,
      accentColor: preset.accent,
      primaryColorName: preset.name,
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-gray-900">Customize Your Landing</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-gray-600">
          Personalize your landing page with your brand colors and content
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <div className="px-6 pt-4 border-b border-gray-200 bg-white sticky top-[120px] z-10">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Colors</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Services</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Colors Tab */}
          <TabsContent value="colors" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>Choose a color scheme for your landing page</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {colorPresets.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => handleColorChange(preset)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        theme.primaryColorName === preset.name
                          ? 'border-gray-900 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full flex-shrink-0"
                          style={{ backgroundColor: preset.primary }}
                        />
                        <div className="text-left">
                          <p className="text-gray-900">{preset.label}</p>
                          <p className="text-gray-500 text-xs">{preset.primary}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label>Current Theme Preview</Label>
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-2">
                      <div 
                        className="h-12 rounded-md"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                      <p className="text-gray-600 text-xs text-center">Primary</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div 
                        className="h-12 rounded-md"
                        style={{ backgroundColor: theme.secondaryColor }}
                      />
                      <p className="text-gray-600 text-xs text-center">Secondary</p>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div 
                        className="h-12 rounded-md border-2"
                        style={{ backgroundColor: theme.accentColor }}
                      />
                      <p className="text-gray-600 text-xs text-center">Accent</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
                <CardDescription>Update your personal and professional details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={professionalData.name}
                    onChange={(e) => setProfessionalData({ ...professionalData, name: e.target.value })}
                    placeholder="Dr. Sarah Mitchell"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    value={professionalData.title}
                    onChange={(e) => setProfessionalData({ ...professionalData, title: e.target.value })}
                    placeholder="Clinical Psychologist"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input
                    id="specialization"
                    value={professionalData.specialization}
                    onChange={(e) => setProfessionalData({ ...professionalData, specialization: e.target.value })}
                    placeholder="Cognitive Behavioral Therapy"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={professionalData.bio}
                    onChange={(e) => setProfessionalData({ ...professionalData, bio: e.target.value })}
                    placeholder="Tell visitors about yourself..."
                    rows={5}
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={professionalData.email}
                    onChange={(e) => setProfessionalData({ ...professionalData, email: e.target.value })}
                    placeholder="contact@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={professionalData.phone}
                    onChange={(e) => setProfessionalData({ ...professionalData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    value={professionalData.whatsapp}
                    onChange={(e) => setProfessionalData({ ...professionalData, whatsapp: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={professionalData.location}
                    onChange={(e) => setProfessionalData({ ...professionalData, location: e.target.value })}
                    placeholder="San Francisco, CA"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Credentials</CardTitle>
                <CardDescription>Your qualifications and certifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {professionalData.credentials.map((credential, index) => (
                  <div key={index} className="space-y-2">
                    <Label>Credential {index + 1}</Label>
                    <Input
                      value={credential}
                      onChange={(e) => {
                        const newCredentials = [...professionalData.credentials];
                        newCredentials[index] = e.target.value;
                        setProfessionalData({ ...professionalData, credentials: newCredentials });
                      }}
                      placeholder="e.g., PhD in Clinical Psychology"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Image URLs</CardTitle>
                <CardDescription>Update profile and about section images</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="heroImage">Hero Image URL</Label>
                  <Input
                    id="heroImage"
                    value={professionalData.heroImage}
                    onChange={(e) => setProfessionalData({ ...professionalData, heroImage: e.target.value })}
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aboutImage">About Image URL</Label>
                  <Input
                    id="aboutImage"
                    value={professionalData.aboutImage}
                    onChange={(e) => setProfessionalData({ ...professionalData, aboutImage: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>

      {/* Footer Actions */}
      <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0">
        <Button 
          onClick={onDeploy}
          className="w-full"
          size="lg"
          style={{ 
            backgroundColor: theme.primaryColor,
          }}
        >
          <Save className="mr-2 h-5 w-5" />
          Save & Deploy Landing
        </Button>
      </div>
    </div>
  );
}
