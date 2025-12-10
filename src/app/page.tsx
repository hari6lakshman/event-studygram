
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { events } from '@/lib/events';
import Image from 'next/image';

const featuredEvents = events.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4 text-primary">
            Find Your Next Challenge
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
            Discover, learn, and compete in the best hackathons and tech events worldwide. Your next big idea starts here.
          </p>
          <Button asChild size="lg">
            <Link href="/events">
              Explore Events <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Featured Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="flex flex-col overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card border-4 border-primary">
                <CardHeader>
                  <CardTitle className="text-xl font-headline mb-2">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-1">
                  <p className='text-sm text-muted-foreground'>{event.date}</p>
                  <p className='text-sm text-muted-foreground mb-2'>{event.location}</p>
                  <div className="flex gap-2 mt-2">
                    {event.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
