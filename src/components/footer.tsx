import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <CodeXml className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg">Event Hub - Studygram</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Event Hub - Studygram. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
