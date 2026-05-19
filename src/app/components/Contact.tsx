import { Mail, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ContactProps {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
}

export function Contact({ email, phone, whatsapp, location }: ContactProps) {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: email,
      action: () => window.location.href = `mailto:${email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: phone,
      action: () => window.location.href = `tel:${phone}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Send a message',
      action: openWhatsApp,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: location,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">Get in Touch</p>
          <h2 className="text-gray-900 mb-4">
            Contact Me
          </h2>
          <p className="text-gray-600">
            Have questions or want to learn more? Feel free to reach out. 
            I'm here to help you on your journey to better mental health.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 mb-1">{method.label}</p>
                        <p className="text-gray-600 break-words">{method.value}</p>
                        {method.action && (
                          <Button
                            variant="link"
                            className="p-0 h-auto text-emerald-600 hover:text-emerald-700 mt-2"
                            onClick={method.action}
                          >
                            {method.label === 'WhatsApp' ? 'Open WhatsApp' : 'Contact now'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Office Hours */}
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 mb-2">Office Hours</p>
                  <div className="space-y-1 text-gray-700">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                  <p className="text-gray-600 mt-3">
                    Emergency appointments available upon request
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
