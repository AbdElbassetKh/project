import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import ServiceCard from '@/components/service-card';
import TestimonialCarousel from '@/components/testimonial-carousel';
import ProcessTimeline from '@/components/process-timeline';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">Services</h1>
          <p className="text-xl text-muted-foreground mb-0">
            Comprehensive design and development solutions tailored to your specific needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        {/* Process Section */}
        <div className="my-24">
          <SectionHeading 
            title="My Process"
            subtitle="A structured approach to delivering exceptional results for every project."
          />
          
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className="my-24 max-w-5xl mx-auto">
          <SectionHeading 
            title="Pricing"
            subtitle="Transparent pricing options to suit different project requirements."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Basic Package */}
            <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="p-6 bg-muted/50">
                <h3 className="text-xl font-bold font-heading mb-2">Basic</h3>
                <p className="text-3xl font-bold mb-2">$2,500+</p>
                <p className="text-sm text-muted-foreground">Perfect for small businesses</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>5-7 page responsive website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Contact form integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>2 weeks of support</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact?package=basic">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Standard Package */}
            <div className="border rounded-lg overflow-hidden shadow-md relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                Popular
              </div>
              <div className="p-6 bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold font-heading mb-2">Standard</h3>
                <p className="text-3xl font-bold mb-2">$5,000+</p>
                <p className="text-sm opacity-90">For growing businesses</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>10-15 page custom website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Custom contact forms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>CMS integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Detailed analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>1 month of support</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact?package=standard">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="p-6 bg-muted/50">
                <h3 className="text-xl font-bold font-heading mb-2">Premium</h3>
                <p className="text-3xl font-bold mb-2">$10,000+</p>
                <p className="text-sm text-muted-foreground">For established businesses</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Custom web application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Complete brand identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>E-commerce functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Custom animations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>3 months of support</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact?package=premium">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-muted-foreground">
              Need a custom solution? <Link href="/contact" className="text-primary hover:underline">Contact me</Link> for a personalized quote.
            </p>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="my-24">
          <SectionHeading 
            title="Client Testimonials"
            subtitle="Hear what clients have to say about working with me."
          />
          
          <div className="mt-16">
            <TestimonialCarousel />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="my-24 max-w-3xl mx-auto">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about my services and process."
          />
          
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-xl font-bold font-heading mb-3">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on scope and complexity. A basic website typically takes 2-4 weeks, while more complex web applications can take 2-3 months. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-heading mb-3">Do you offer ongoing maintenance?</h3>
              <p className="text-muted-foreground">
                Yes, I offer monthly maintenance packages to keep your website secure, updated, and running smoothly. These can be customized based on your specific needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-heading mb-3">What is your payment structure?</h3>
              <p className="text-muted-foreground">
                I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange a milestone-based payment schedule.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-heading mb-3">Do you work with clients remotely?</h3>
              <p className="text-muted-foreground">
                Yes, I work with clients worldwide. Communication happens through video calls, email, and project management tools to ensure clear and consistent collaboration regardless of location.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-heading mb-3">What information do you need to start a project?</h3>
              <p className="text-muted-foreground">
                To get started, I'll need a clear description of your project goals, target audience, any existing brand guidelines, and examples of websites you like. A detailed brief helps ensure we're aligned from the beginning.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-24 bg-primary text-primary-foreground p-12 rounded-lg max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your vision and create something exceptional together.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Request a Free Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}