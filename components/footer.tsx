import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold font-heading mb-4">John Doe</h3>
          <p className="text-muted-foreground mb-4 max-w-xs">
            Freelance UI/UX Designer & Web Developer crafting beautiful digital experiences.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:contact@johndoe.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold font-heading mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold font-heading mb-4">Contact</h3>
          <p className="text-muted-foreground mb-2">contact@johndoe.com</p>
          <p className="text-muted-foreground mb-4">+1 (555) 123-4567</p>
          <p className="text-sm text-muted-foreground/80">
            San Francisco, CA
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}