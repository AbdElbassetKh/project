import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }
  
  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
  const nextProject = projects[currentIndex + 1] || projects[0];
  
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/work" className="hover:text-primary">Work</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{project.title}</span>
        </div>
        
        {/* Project Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
          
          {project.liveUrl && (
            <Button asChild variant="outline" className="mb-10">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Site
              </a>
            </Button>
          )}
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg mb-16">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Project Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold font-heading mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                This project involved a complete redesign of the client's digital presence, focusing on improving user experience, accessibility, and conversion rates. The new design incorporates modern design principles while maintaining the brand's established identity.
              </p>
              <p className="text-muted-foreground">
                Working closely with stakeholders, we conducted extensive user research to understand pain points and opportunities for improvement. This informed our design decisions and resulted in a more intuitive and engaging user journey.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-heading mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium block">Client:</span>
                  <span className="text-muted-foreground">Company Name</span>
                </div>
                <div>
                  <span className="font-medium block">Timeline:</span>
                  <span className="text-muted-foreground">8 weeks</span>
                </div>
                <div>
                  <span className="font-medium block">Role:</span>
                  <span className="text-muted-foreground">Lead Designer & Developer</span>
                </div>
                <div>
                  <span className="font-medium block">Deliverables:</span>
                  <span className="text-muted-foreground">UX Research, UI Design, Development, Testing</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-12" />
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading mb-6">The Problem</h2>
            <p className="text-muted-foreground mb-6">
              The client was struggling with a dated website that wasn't meeting modern user expectations. Key issues included:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li>Poor mobile experience with non-responsive layouts</li>
              <li>Confusing navigation that made finding information difficult</li>
              <li>Slow page load times affecting SEO and user retention</li>
              <li>Outdated visual design that didn't reflect the brand's current positioning</li>
            </ul>
            <p className="text-muted-foreground">
              Additionally, the client was experiencing high bounce rates and low conversion rates, indicating that visitors were not finding what they needed or were not being effectively guided toward conversion actions.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading mb-6">The Solution</h2>
            <p className="text-muted-foreground mb-6">
              Our approach focused on creating a user-centered design that addressed the core issues while introducing new features to enhance the overall experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li>Fully responsive design optimized for all device sizes</li>
              <li>Restructured information architecture for intuitive navigation</li>
              <li>Performance optimization for faster page loads</li>
              <li>Modernized visual design aligned with current brand guidelines</li>
              <li>Streamlined conversion pathways with clear calls-to-action</li>
            </ul>
            <p className="text-muted-foreground">
              We implemented a component-based design system that ensured consistency across the site while allowing for flexibility in content presentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Design process wireframe"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Final design mockup"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading mb-6">Results & Impact</h2>
            <p className="text-muted-foreground mb-6">
              The redesigned website delivered significant improvements across key metrics:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border text-center">
                <p className="text-3xl font-bold text-primary mb-2">40%</p>
                <p className="text-sm text-muted-foreground">Increase in Conversion Rate</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <p className="text-3xl font-bold text-primary mb-2">25%</p>
                <p className="text-sm text-muted-foreground">Decrease in Bounce Rate</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <p className="text-3xl font-bold text-primary mb-2">65%</p>
                <p className="text-sm text-muted-foreground">Increase in Mobile Usage</p>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <p className="text-3xl font-bold text-primary mb-2">3x</p>
                <p className="text-sm text-muted-foreground">Improved Page Load Speed</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              The client reported increased customer satisfaction and positive feedback on the new design. The improved user experience has contributed to higher engagement and better retention rates.
            </p>
          </div>
          
          <Separator className="my-12" />
          
          {/* Project Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-16">
            <Button asChild variant="outline" className="mb-4 sm:mb-0">
              <Link href={`/work/${prevProject.slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link href={`/work/${nextProject.slug}`}>
                Next Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}