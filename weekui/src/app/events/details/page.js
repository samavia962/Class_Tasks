// components/EventsList.jsx
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    id: 1,
    title: 'Programming for everyone',
    date: 'May 12, 2021',
    commentCount: 25,
    location: '123 San Somewhere',
    image: '/images/1.jpg',
  },
  {
    id: 2,
    title: 'Networking for introverts',
    date: 'May 30, 2021',
    host: 'Sam West',
    location: '456 New Ways',
    image: '/images/2.jpg',
  },
  {
    id: 3,
    title: 'Networking for extroverts',
    date: 'April 10, 2022',
    host: 'Sarah P',
    commentCount: 12,
    image: '/images/3.jpg',
  },
];

export default function EventsList() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen " >
      {events.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 h-40 relative">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={event.id === 1}
              />
            </div>
            <div className="md:w-3/4 p-4 flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-lg mb-1">{event.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                
                <div className="text-xs text-gray-500">
                  {event.host && <span>From: {event.host} | </span>}
                  {event.location && <span>{event.location}</span>}
                  {event.commentCount && <span>{event.commentCount > 0 && ' | '}Comments: {event.commentCount}</span>}
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}