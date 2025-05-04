// app/events/[id]/page.js
import Image from 'next/image';
import Link from 'next/link';

// This is a placeholder for fetching event data
// In a real app, you'd fetch this data from an API or database
const events = [
  {
    id: 1,
    title: 'Programming for everyone',
    date: 'May 12, 2021',
    commentCount: 25,
    location: '123 San Somewhere',
    description: 'A beginner-friendly workshop designed to introduce programming concepts to people from all backgrounds. No prior experience required!',
    organizer: 'Tech Community Hub',
    image: '/images/1.jpg',
  },
  {
    id: 2,
    title: 'Networking for introverts',
    date: 'May 30, 2021',
    host: 'Sam West',
    location: '456 New Ways',
    description: 'Learn effective networking strategies tailored for introverts. Build meaningful connections without draining your social battery.',
    organizer: 'Quiet Connections',
    image: '/images/2.jpg',
  },
  {
    id: 3,
    title: 'Networking for extroverts',
    date: 'April 10, 2022',
    host: 'Sarah P',
    commentCount: 12,
    description: 'Enhance your natural networking abilities and learn how to make the most of your social energy in professional settings.',
    organizer: 'Outgoing Professionals Group',
    image: '/images/3.jpg',
  },
];

export default function EventDetail({ params }) {
  // Find the event that matches the ID from the URL
  const event = events.find(e => e.id === parseInt(params.id));
  
  // Handle case where event is not found
  if (!event) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold text-red-500">Event Not Found</h1>
          <p className="mt-4">The event you're looking for doesn't exist.</p>
          <Link href="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Event header */}
        <div className="relative h-64 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold">{event.title}</h1>
            <p className="mt-2">{event.date}</p>
          </div>
        </div>
        
        {/* Event details */}
        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
            {event.location && (
              <div>
                <span className="font-semibold">Location:</span> {event.location}
              </div>
            )}
            {event.organizer && (
              <div>
                <span className="font-semibold">Organizer:</span> {event.organizer}
              </div>
            )}
            {event.host && (
              <div>
                <span className="font-semibold">Host:</span> {event.host}
              </div>
            )}
            {event.commentCount && (
              <div>
                <span className="font-semibold">Comments:</span> {event.commentCount}
              </div>
            )}
          </div>
          
          <h2 className="text-xl font-semibold mb-4">About this event</h2>
          <p className="text-gray-700 mb-8">{event.description}</p>
          
          <div className="flex justify-between">
            <Link href="/" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
              ← Back to Events
            </Link>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}