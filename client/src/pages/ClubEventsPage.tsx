import { Link } from 'react-router-dom';

export const events = [
  {
    id: 1,
    title: 'Programming Contest',
    club: 'Computer Club',
    date: 'June 15, 2026',
    time: '10:00 AM - 3:00 PM',
    venue: 'CSE Building ',
    registrationDeadline: 'June 10, 2026',
    description: 'Join us for an exciting programming contest where you can showcase your coding skills and compete with peers. Various difficulty levels available for all participants.',
  },
  {
    id: 2,
    title: 'Web Development Workshop',
    club: 'Career Club',
    date: 'June 22, 2026',
    time: '1:00 PM - 4:00 PM',
    venue: 'Tech Lab 3',
    registrationDeadline: 'June 18, 2026',
    description: 'Learn modern web development practices with hands-on projects. Covers HTML, CSS, JavaScript, and popular frameworks. Perfect for beginners and intermediate developers.',
  },
  {
    id: 3,
    title: 'Campus Hackathon',
    club: 'Robotics Club',
    date: 'July 1, 2026',
    time: '9:00 AM - 6:00 PM',
    venue: 'CUET IT Incubator',
    registrationDeadline: 'June 20, 2026',
    description: 'A full-day hackathon event where teams collaborate to build innovative solutions. Prizes, mentorship, and networking opportunities await all participants.',
  },
  {
    id: 4,
    title: 'Tech Seminar',
    club: 'Computer Club',
    date: 'July 9, 2026',
    time: '11:00 AM - 1:00 PM',
    venue: 'Conference Room B',
    registrationDeadline: 'July 6, 2026',
    description: 'Industry experts share insights on the latest technology trends, career paths, and opportunities in the tech sector. Q&A session included.',
  },
];

const ClubEventsPage = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-black text-[#ED3207] sm:text-5xl">
          Upcoming Events
        </h1>
        <p className="max-w-2xl text-2xl font-bold text-[#141413]">
          Discover exciting events organized by campus clubs. Connect, learn, and grow with your community.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="w-full flex h-80 flex-col rounded-3xl border border-[#e5e7eb] bg-orange-100 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Card Content */}
<div className="flex h-[290px] flex-col items-center text-center p-6">

  <h3 className="text-2xl font-bold text-[#ED3207]">
    {event.title}
  </h3>

  <p className="mt-3 text-xl font-bold text-[#1e3a8a]">
    Organized by
    <br />
    {event.club}
  </p>

  <p className="mt-4 text-lg font-bold text-xl text-gray-500">
    Registration Deadline
  </p>

  <p className="text-xl font-bold text-red-500">
    {event.registrationDeadline}
  </p>

  {/* Button always at bottom */}
  <div className="mt-auto">
    <Link
      to={`/event/${event.id}`}
      className="rounded-full bg-blue-600 px-6 py-2.5 text-white font-semibold hover:bg-blue-700"
    >
      See Details
    </Link>
  </div>

</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubEventsPage;
 