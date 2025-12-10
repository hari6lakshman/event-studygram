import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg">EventHub</span>
          </div>
          <nav className="flex gap-4 text-sm text-foreground/60">
            <Link href="#" className="hover:text-foreground">About</Link>
            <Link href="#" className="hover:text-foreground">Contact</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
          </nav>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
