import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold font-heading text-primary mb-6">404</h1>
        <h2 className="text-2xl font-bold font-heading mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}