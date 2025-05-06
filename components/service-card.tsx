import { cn } from '@/lib/utils';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <div className={cn(
      "relative group overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 to-primary/10 z-0 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="mb-4 bg-primary/10 text-primary w-12 h-12 rounded-md flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
        
        <h3 className="text-xl font-bold font-heading mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
}
