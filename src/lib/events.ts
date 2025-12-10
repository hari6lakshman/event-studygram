import data from './events.json';

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  organizerId: string;
  tags: string[];
};

export const events: Event[] = data;
