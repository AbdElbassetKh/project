import Image from 'next/image';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import SkillsSection from '@/components/skills-section';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4">
        {/* Intro Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="John Doe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="md:col-span-7 order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Hello! I'm John Doe, a freelance UI/UX designer and web developer based in San Francisco, specializing in creating beautiful, functional digital experiences.
              </p>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience working with startups, agencies, and established businesses, I've developed a deep understanding of what makes digital products successful. My approach combines aesthetic sensibility with technical expertise to create solutions that not only look great but also deliver measurable results.
              </p>
              <p className="text-muted-foreground mb-8">
                When I'm not designing or coding, you'll find me exploring the latest design trends, contributing to open-source projects, or hiking in the mountains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Section */}
        <div className="max-w-4xl mx-auto my-20">
          <SectionHeading
            title="Background"
            subtitle="My journey in design and development."
            align="left"
          />
          
          <div className="mt-10">
            <h3 className="text-xl font-bold font-heading mb-4">Education</h3>
            <div className="border-l-2 border-primary/20 pl-6 space-y-8 ml-4">
              <div>
                <div className="flex items-center">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -ml-[1.9rem]"></div>
                  <h4 className="text-lg font-bold">Master's in Interactive Design</h4>
                </div>
                <p className="text-muted-foreground mb-1">California Institute of Arts, 2018</p>
                <p className="text-sm text-muted-foreground">
                  Specialized in user experience design and interactive prototyping.
                </p>
              </div>
              
              <div>
                <div className="flex items-center">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -ml-[1.9rem]"></div>
                  <h4 className="text-lg font-bold">Bachelor's in Computer Science</h4>
                </div>
                <p className="text-muted-foreground mb-1">University of California, 2016</p>
                <p className="text-sm text-muted-foreground">
                  Focus on web technologies and human-computer interaction.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-bold font-heading mb-4">Professional Experience</h3>
            <div className="border-l-2 border-primary/20 pl-6 space-y-8 ml-4">
              <div>
                <div className="flex items-center">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -ml-[1.9rem]"></div>
                  <h4 className="text-lg font-bold">Freelance Designer & Developer</h4>
                </div>
                <p className="text-muted-foreground mb-1">Self-employed, 2020 - Present</p>
                <p className="text-sm text-muted-foreground">
                  Working with clients across various industries to design and develop digital products. Specializing in creating cohesive brand experiences and intuitive user interfaces.
                </p>
              </div>
              
              <div>
                <div className="flex items-center">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -ml-[1.9rem]"></div>
                  <h4 className="text-lg font-bold">Senior UX Designer</h4>
                </div>
                <p className="text-muted-foreground mb-1">Design Agency Inc., 2018 - 2020</p>
                <p className="text-sm text-muted-foreground">
                  Led design projects for major clients in e-commerce, finance, and healthcare. Conducted user research, created wireframes, prototypes, and final designs.
                </p>
              </div>
              
              <div>
                <div className="flex items-center">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -ml-[1.9rem]"></div>
                  <h4 className="text-lg font-bold">UI Developer</h4>
                </div>
                <p className="text-muted-foreground mb-1">Tech Startup, 2016 - 2018</p>
                <p className="text-sm text-muted-foreground">
                  Collaborated with design and product teams to implement responsive interfaces for web applications. Focused on accessibility and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto my-20 bg-muted/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-heading mb-6">My Philosophy</h2>
          <p className="text-muted-foreground mb-4">
            I believe that great design goes beyond aesthetics—it's about solving real problems and creating meaningful experiences. My work is guided by these principles:
          </p>
          <ul className="space-y-3 text-muted-foreground list-disc pl-6">
            <li><span className="font-medium">User-Centered Approach:</span> Understanding user needs is the foundation of effective design.</li>
            <li><span className="font-medium">Simplicity:</span> Finding the clearest, most elegant solution to complex problems.</li>
            <li><span className="font-medium">Accessibility:</span> Creating inclusive experiences that work for everyone.</li>
            <li><span className="font-medium">Continuous Improvement:</span> Regularly refining designs based on feedback and data.</li>
            <li><span className="font-medium">Balance:</span> Harmonizing business goals with user needs to create sustainable solutions.</li>
          </ul>
        </div>
        
        {/* Skills Section */}
        <div id="skills" className="max-w-4xl mx-auto my-20">
          <SectionHeading
            title="Skills & Expertise"
            subtitle="A comprehensive overview of my technical and creative abilities."
          />
          
          <div className="mt-10">
            <SkillsSection />
          </div>
        </div>
        
        {/* Personal Interests */}
        <div className="max-w-4xl mx-auto my-20">
          <SectionHeading
            title="Beyond Work"
            subtitle="A glimpse into my interests and hobbies outside of design and development."
            align="left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-xl font-bold font-heading mb-4">Interests</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="font-medium min-w-32 inline-block">Photography:</span>
                  <span>Exploring street and landscape photography in my free time.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-32 inline-block">Open Source:</span>
                  <span>Contributing to open-source projects focusing on design systems.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-32 inline-block">Hiking:</span>
                  <span>Discovering new trails and natural landscapes.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-32 inline-block">Reading:</span>
                  <span>Books on design thinking, psychology, and science fiction.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-heading mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground mb-4">
                I'm passionate about continued education and staying current with industry trends and technologies. Recent areas of focus include:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Design systems and component libraries</li>
                <li>Interaction design and micro-animations</li>
                <li>Web performance optimization</li>
                <li>Accessibility standards and implementations</li>
                <li>Emerging UI/UX methodologies</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto my-20 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects and consulting work. If you have a project in mind or want to discuss potential collaboration, I'd love to hear from you.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}