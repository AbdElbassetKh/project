import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Typewriter from '@/components/typewriter';
import SectionHeading from '@/components/section-heading';
import ProjectCard from '@/components/project-card';
import ServiceCard from '@/components/service-card';
import { projects, services } from '@/lib/data';

export default function Home() {
  // Get featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
        <div className="container px-4 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight mb-6">
              John Doe
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Freelance UI/UX Designer & Web Developer
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl font-medium mb-8 h-12">
              <span>I create </span>
              <Typewriter 
                texts={['beautiful interfaces.', 'engaging experiences.', 'digital solutions.', 'successful products.']} 
                delay={100}
                className="text-primary font-semibold"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-md px-6">
                <Link href="/work">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-md px-6">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <Button variant="ghost" size="icon" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Snippet Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate UI/UX designer and web developer with over 5 years of experience creating digital experiences that users love. Combining aesthetics with functionality, I help businesses succeed in the digital landscape through thoughtful design and clean code.
            </p>
            <Button asChild variant="link" className="mt-6">
              <Link href="/about">
                Learn more about me
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section className="py-20">
        <div className="container px-4">
          <SectionHeading
            title="Featured Work"
            subtitle="A selection of my recent projects spanning various industries and platforms."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                featured={project.id === '1'}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <SectionHeading
            title="Skills Overview"
            subtitle="A snapshot of my technical abilities and expertise."
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
                alt="Figma" 
                width={48} 
                height={48}
                className="mb-3"
              />
              <span className="font-medium">Figma</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                alt="React" 
                width={48} 
                height={48}
                className="mb-3"
              />
              <span className="font-medium">React</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                alt="TypeScript" 
                width={48} 
                height={48}
                className="mb-3"
              />
              <span className="font-medium">TypeScript</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                alt="Next.js" 
                width={48} 
                height={48}
                className="mb-3 dark:invert"
              />
              <span className="font-medium">Next.js</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                alt="Tailwind CSS" 
                width={48} 
                height={48}
                className="mb-3"
              />
              <span className="font-medium">Tailwind</span>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <Image 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                alt="Node.js" 
                width={48} 
                height={48}
                className="mb-3"
              />
              <span className="font-medium">Node.js</span>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/about#skills">
                View Full Skill Set
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Highlight Section */}
      <section className="py-20">
        <div className="container px-4">
          <SectionHeading
            title="Services"
            subtitle="Specialized services tailored to meet your digital needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to bring your ideas to life?</h2>
            <p className="text-lg mb-8 opacity-90">Let's collaborate to create exceptional digital experiences that elevate your brand.</p>
            <Button asChild size="lg" variant="secondary" className="text-md px-6">
              <Link href="/contact">
                Start a Project
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}