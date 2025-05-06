"use client"

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/section-heading';
import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/data';

// Extract all unique tags
const allTags = Array.from(
  new Set(
    projects.flatMap(project => project.tags)
  )
).sort();

export default function WorkPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;
  
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4">
        <SectionHeading
          title="My Work"
          subtitle="Browse through my recent projects and case studies."
        />
        
        {/* Filter Tags */}
        <div className="my-8 flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTag(null)}
            className="rounded-full"
          >
            All
          </Button>
          
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found with the selected filter.</p>
            <Button 
              variant="link" 
              onClick={() => setSelectedTag(null)}
              className="mt-2"
            >
              Clear filter
            </Button>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold font-heading mb-4">Have a project in mind?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I'm always interested in new challenges and opportunities. Let's discuss how we can work together to bring your vision to life.
          </p>
          <Button asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
}