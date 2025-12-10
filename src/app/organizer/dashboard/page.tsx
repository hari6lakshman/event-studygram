"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateEventForm } from "@/components/create-event-form";
import { events } from "@/lib/events";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// For now, we'll assume organizer with ID "1" is logged in.
const ORGANIZER_ID = "1";

export default function OrganizerDashboardPage() {
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
  const organizerEvents = events.filter(event => event.organizerId === ORGANIZER_ID);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Organizer Dashboard</h1>
        <Button onClick={() => setIsCreatingEvent(!isCreatingEvent)}>
          <PlusCircle className="mr-2" />
          {isCreatingEvent ? "Cancel" : "Create New Event"}
        </Button>
      </div>

      {isCreatingEvent ? (
        <CreateEventForm onFinished={() => setIsCreatingEvent(false)} />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Events</CardTitle>
            <CardDescription>Here are the events you've created.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {organizerEvents.length > 0 ? (
              organizerEvents.map(event => (
                <div key={event.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <Image 
                    src={event.imageUrl}
                    alt={event.title}
                    width={150}
                    height={100}
                    className="rounded-md object-cover"
                    data-ai-hint={event.imageHint}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date} &bull; {event.location}</p>
                     <div className="flex flex-wrap gap-2 mt-2">
                        {event.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-8">You haven't created any events yet.</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
