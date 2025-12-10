import Link from 'next/link';
import { Button } from './ui/button';
import { CodeXml } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-lg">Event Hub - Studygram</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {/* <Link href="/events" className="transition-colors hover:text-foreground/80 text-foreground/80 font-medium">
            Events
          </Link> */}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="ghost" asChild>
            <Link href="/organizer/login">Organizer Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
