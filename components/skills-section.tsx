"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';

export default function SkillsSection() {
  const [selectedTab, setSelectedTab] = useState('design');
  
  const renderSkills = (category: 'design' | 'development' | 'soft') => {
    return skills[category].map((skill, index) => (
      <div key={index} className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-muted-foreground">{skill.proficiency}%</span>
        </div>
        <Progress value={skill.proficiency} className="h-2" />
      </div>
    ));
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="design" onValueChange={(value) => setSelectedTab(value as 'design' | 'development' | 'soft')}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="design">Design Tools</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="design" className="mt-0">
          {renderSkills('design')}
        </TabsContent>
        
        <TabsContent value="development" className="mt-0">
          {renderSkills('development')}
        </TabsContent>
        
        <TabsContent value="soft" className="mt-0">
          {renderSkills('soft')}
        </TabsContent>
      </Tabs>
    </div>
  );
}