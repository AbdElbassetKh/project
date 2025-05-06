import { process } from '@/lib/data';

export default function ProcessTimeline() {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-1 bg-muted"></div>
      
      {/* Timeline Items */}
      {process.map((item, index) => (
        <div key={index} className="relative z-10">
          <div className={`flex items-center ${index % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'} md:justify-center`}>
            {/* Content */}
            <div className="hidden md:block md:w-5/12"></div>
            
            <div className="z-20 flex items-center justify-center w-16 h-16 rounded-full bg-card border border-border shadow-md">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                {item.step}
              </div>
            </div>
            
            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pt-1 relative z-20`}>
              <div className="p-6 rounded-lg border bg-card shadow-sm">
                <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}