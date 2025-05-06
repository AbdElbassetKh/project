"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Project {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:shadow-lg",
        featured ? "col-span-full md:col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="bg-black/50 backdrop-blur-sm text-white border-white/20">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="outline" className="bg-black/50 backdrop-blur-sm text-white border-white/20">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex space-x-2 mt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="bg-black/50 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
                  <Plus className="h-4 w-4 mr-1" />
                  Quick View
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <div className="grid gap-4">
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <Image 
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-3 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex space-x-3 mt-6">
                      <Button asChild>
                        <Link href={`/work/${project.slug}`}>
                          View Case Study
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button variant="outline" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Site
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button asChild variant="outline" size="sm" className="bg-black/50 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              <Link href={`/work/${project.slug}`}>
                View Case Study
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{project.excerpt}</p>
      </div>
    </div>
  );
}