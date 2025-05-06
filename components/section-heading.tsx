import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  subtitleClassName,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">{title}</h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground max-w-3xl",
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto',
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}