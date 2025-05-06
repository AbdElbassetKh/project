"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/section-heading';
import ContactForm from '@/components/contact-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      setSelectedPackage(packageParam);
    }
  }, [searchParams]);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4">
        <SectionHeading
          title="Contact Me"
          subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <div className="bg-card rounded-lg border shadow-sm p-8">
              <h3 className="text-2xl font-bold font-heading mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-md">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">contact@johndoe.com</p>
                    <p className="text-muted-foreground text-sm">Usually responds within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-md">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Monday - Friday, 9am - 5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-md">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                    <p className="text-muted-foreground text-sm">Available for remote work worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-md">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Response Time</h4>
                    <p className="text-muted-foreground text-sm">You can expect to hear back from me within 24-48 hours.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <h4 className="font-medium mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-card rounded-lg border shadow-sm p-8">
              <h3 className="text-2xl font-bold font-heading mb-6">Send a Message</h3>
              
              {selectedPackage && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Selected Package</label>
                  <Select defaultValue={selectedPackage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <ContactForm />
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-2xl font-bold font-heading mb-6 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2">What happens after I submit the form?</h4>
              <p className="text-muted-foreground">After receiving your message, I'll review your requirements and get back to you within 1-2 business days to schedule an initial consultation call.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Do you work with clients internationally?</h4>
              <p className="text-muted-foreground">Yes, I work with clients worldwide and am comfortable collaborating across different time zones.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">How detailed should my project description be?</h4>
              <p className="text-muted-foreground">The more details you can provide, the better I can understand your needs. However, don't worry if you don't have everything figured out—we can discuss and refine your ideas during our consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}