"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/theme-toggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-10",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-2xl font-heading tracking-tight"
        >
          JD.
        </Link>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="sm"
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors relative group",
                pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                  pathname === link.path && "scale-x-100"
                )}
              ></span>
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] z-50 bg-background/95 backdrop-blur-sm md:hidden">
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={closeMenu}
                  className={cn(
                    "px-4 py-2 text-lg font-medium transition-colors",
                    pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}