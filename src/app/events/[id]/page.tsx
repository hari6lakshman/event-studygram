
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/lib/events";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const event = events.find(e => e.id === params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/events">
            <ArrowLeft className="mr-2" />
            Back to All Events
          </Link>
        </Button>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden border-4 border-primary">
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4 text-primary">{event.title}</h1>
            <div className="flex flex-wrap gap-4 items-center mb-6 text-muted-foreground">
              <span>{event.date}</span>
              <span>&bull;</span>
              <span>{event.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {event.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
            </div>

            <div className="prose dark:prose-invert max-w-none text-foreground/80">
              <p className="lead">{event.description}</p>
              <p>{event.longDescription}</p>
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg">Register Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
