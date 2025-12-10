import data from './organizers.json';

export type Organizer = {
  id: string;
  email: string;
  password?: string; // Keep password optional for client-side safety
};

export const organizers: Organizer[] = data;
