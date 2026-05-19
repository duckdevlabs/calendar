import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Video, MapPin, User, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Calendar } from './ui/calendar';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { toast } from 'sonner';

interface BookingProps {
  availableSessionTypes: string[];
  professionalName: string;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export function Booking({ availableSessionTypes, professionalName }: BookingProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [sessionType, setSessionType] = useState<string>(availableSessionTypes[0] || 'online');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime) {
      toast.error('Please select a date and time');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    // This would normally send data to backend
    toast.success('Booking request submitted! You will receive a confirmation email shortly.');
    
    // Reset form
    setDate(undefined);
    setSelectedTime('');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-emerald-600 mb-2">Book a Session</p>
          <h2 className="text-gray-900 mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-gray-600">
            Choose your preferred date, time, and session type. I'll confirm your 
            appointment within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>
                Fill in your information and select your preferred appointment time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Session Type */}
                <div className="space-y-3">
                  <Label>Session Type</Label>
                  <RadioGroup value={sessionType} onValueChange={setSessionType}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {availableSessionTypes.includes('online') && (
                        <div className="relative">
                          <RadioGroupItem 
                            value="online" 
                            id="online" 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="online"
                            className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-emerald-600 peer-data-[state=checked]:bg-emerald-50 cursor-pointer transition-all"
                          >
                            <Video className="h-6 w-6 text-emerald-600" />
                            <span>Online Session</span>
                            <span className="text-gray-500 text-center">
                              Via secure video call
                            </span>
                          </Label>
                        </div>
                      )}
                      {availableSessionTypes.includes('in-person') && (
                        <div className="relative">
                          <RadioGroupItem 
                            value="in-person" 
                            id="in-person" 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="in-person"
                            className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-emerald-600 peer-data-[state=checked]:bg-emerald-50 cursor-pointer transition-all"
                          >
                            <MapPin className="h-6 w-6 text-emerald-600" />
                            <span>In-Person</span>
                            <span className="text-gray-500 text-center">
                              At the office
                            </span>
                          </Label>
                        </div>
                      )}
                    </div>
                  </RadioGroup>
                </div>

                {/* Date and Time Selection */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Select Date
                    </Label>
                    <div className="border rounded-lg p-3 bg-white">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Select Time
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            selectedTime === time
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                              : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 text-gray-900">
                    <User className="h-5 w-5 text-emerald-600" />
                    Your Information
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me briefly what you'd like to work on..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  Request Appointment
                </Button>

                <p className="text-gray-500 text-center">
                  By submitting this form, you agree to receive appointment confirmations 
                  and reminders via email and SMS.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
