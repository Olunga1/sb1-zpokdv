import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Organic Farming Workshop',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'Green Valley Farm, Nairobi',
    image: 'https://images.unsplash.com/photo-1592991538534-00972b6f59ab?auto=format&fit=crop&q=80',
    description: 'Learn organic farming techniques from experienced farmers.'
  },
  {
    id: '2',
    title: 'Farmers Market Day',
    date: '2024-03-20',
    time: '8:00 AM',
    location: 'Central Market, Mombasa',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80',
    description: 'Join us for a day of fresh produce and local crafts.'
  }
];

const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ event }: { event: Event }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="space-y-2">
        <div className="flex items-center text-gray-500">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Events;