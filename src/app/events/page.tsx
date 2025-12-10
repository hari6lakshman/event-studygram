
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { events } from '@/lib/events';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-center mb-12 text-primary">
        All Events & Hackathons
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card border-4 border-primary">
            <CardContent className="p-6 flex-1">
              <CardTitle className="text-xl font-headline mb-2">{event.title}</CardTitle>
              <p className='text-sm text-muted-foreground'>{event.date}</p>
              <p className='text-sm text-muted-foreground mb-2'>{event.location}</p>
              <p className="text-sm text-foreground/80 mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
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
  );
}
