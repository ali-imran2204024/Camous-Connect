import { useParams, Link } from 'react-router-dom';
import { events } from './ClubEventsPage';

const EventDetailPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = events.find((e) => e.id === parseInt(eventId || '0'));

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20">
        <h1 className="text-3xl font-black text-[#111827]">Event Not Found</h1>
        <p className="text-lg text-[#6b7280]">The event you're looking for doesn't exist.</p>
        <Link
          to="/club-events"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-11 py-12">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black text-[#F54927]">{event.title}</h1> 

        <Link
          to="/club-events"
    className="inline-flex items-center justify-center rounded-full border border-[#E09028] bg-white px-6 py-2.5 text-xl font-bold text-[#F54927] transition hover:bg-[#f8fafc]"
        >
          ← Back
        </Link>
      </div>

      {/* Main Content Card */}
<div className="mx-auto w-full max-w-7xl rounded-lg border border-[#E09028] bg-white shadow-2xl">        <div className="p-8 sm:p-10">
          {/* Organizer Club */}
          <div className="mb-8 pb-8 border-b border-[#E09028]">
            <p className="text-xl font-semibold  tracking-wider text-[#1C1919]">
              Organized by
            </p>
            <p className="mt-2 text-4xl font-bold text-[#1e3a8a]">{event.club}</p>
          </div>

          {/* Event Details Grid */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            {/* Date */}
            <div>
              <p className="text-xl font-semibold uppercase tracking-wider text-[#1C1919]">
                Date
              </p>
              <p className="mt-2 text-2xl font-bold text-[#E60E40]">{event.date}</p>
            </div>

            {/* Time */}
            <div>
              <p className="text-xl font-semibold uppercase tracking-wider text-[#1C1919]">
                Time
              </p>
              <p className="mt-2 text-2xl font-bold text-[#E60E40]">{event.time}</p>
            </div>

            {/* Venue */}
            <div>
              <p className="text-xl font-semibold uppercase tracking-wider text-[#1C1919]">
                Venue
              </p>
              <p className="mt-2 text-2xl font-bold text-[#E60E40]">{event.venue}</p>
            </div>

            {/* Registration Deadline */}
            <div>
              <p className="text-xl font-semibold uppercase tracking-wider text-[#1C1919]">
                Registration Deadline
              </p>
              <p className="mt-2 text-2xl font-bold text-[#E60E40]">
                {event.registrationDeadline}
              </p>
            </div>
                     <div>
  <p className="text-xl font-semibold uppercase tracking-wider text-[#1C1919]">
    Registration Fee
  </p>
  <p className="mt-2 text-2xl font-bold text-[#E60E40]">
    300 taka/team
  </p>
</div>
<div>
  <p className="text-xl font-semibold uppercase tracking-wider text-[#1C1919]">
    Event Category
  </p>
  <p className="mt-2 text-2xl font-bold text-[#E60E40]">
    Competition(Offline)
  </p>
</div>
          </div>
   

          {/* Description */}
         <div className="mb-8 border-t border-[#E09028] pt-8">
  <h2 className="text-3xl font-bold text-[#1e3a8a]">
    About The Event
  </h2>

  <p className="mt-4 text-2xl font-semibold leading-relaxed text-[#111112]">
    {event.description}
  </p>
    <div className="mt-10 border-t border-[#E09028] pt-8">
  <h2 className="text-3xl font-bold text-[#1e3a8a]">
    Event Details
  </h2>

  <ul className="mt-4 text-2xl font-semibold space-y-3 text-[#111112]">
  <li>🏆 Contest Type: Team wise Programming Contest</li>
  <li>👥 Team Size: Maximum 3 Members</li>
  <li>💻 Platform: Codeforces </li>
  <li>⏱ Duration: 3 Hours</li>
  <li>📝 Number of Problems: 5-7</li>
  <li>📜 Certificates for all Participants</li>
</ul>
</div>

  <div className="mt-8">
    <h3 className="text-3xl font-bold text-[#1e3a8a]">
      Rules & Guidelines
    </h3>

    <ul className="mt-4 text-2xl font-semibold space-y-3 text-[#111112]">
     
      <li>✅ Participants must arrive 30 minutes before the event starts.</li>
      <li>✅ Follow event organizers' instructions at all times.</li>
      <li>✅ Maintain professional and respectful behavior.</li>
      <li>✅ Registration must be completed before the deadline.</li>
      <li>✅ Any form of misconduct may lead to disqualification.</li>
       <li>✅ Bring your Laptop and make sure proper internet connection.</li>
    </ul>
  </div>
<div className="mt-10 border-t border-[#E09028] pt-8">
  <h2 className="text-3xl font-bold text-[#1e3a8a]">
    Prizes & Rewards
  </h2>

  <div className="mt-5 grid gap-4 sm:grid-cols-3">
    <div className="rounded-2xl bg-yellow-200 p-5 text-center">
      <h3 className="text-2xl font-bold text-yellow-700">
        🥇 Champion
      </h3>
      <p className="mt-2 font-bold text-xl">
        BDT 13,000 + Trophy
      </p>
    </div>

    <div className="rounded-2xl bg-slate-300 p-5 text-center">
      <h3 className="text-2xl font-bold text-yellow-700">
        🥈 1st Runner-Up
      </h3>
      <p className="mt-2 text-xl font-bold">
        BDT 7,000 + Medal
      </p>
    </div>

    <div className="rounded-2xl bg-orange-200 p-5 text-center">
      <h3 className="text-2xl font-bold text-orange-700">
        🥉 2nd Runner-Up
      </h3>
      <p className="mt-2 text-xl font-bold">
        BDT 5,000 + Medal
      </p>
    </div>
  </div>
</div>

</div>
<div className="mb-8 border-t border-[#E09028] pt-8">
  <h2 className="text-3xl font-bold text-[#1e3a8a]">
    Photo Gallery
  </h2>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="group relative overflow-visible">
  <img
    src="/event1.jpg"
    alt="Event 1"
    className="
      h-52 w-full rounded-2xl object-cover shadow-md
      transition-all duration-500 ease-out
      group-hover:scale-110
      group-hover:shadow-2xl
    "
  />
</div>
   <div className="group relative overflow-visible">
  <img
    src="/event2.jpg"
    alt="Event 2"
    className="
      h-52 w-full rounded-2xl object-cover shadow-md
      transition-all duration-500 ease-out
      group-hover:scale-110
      group-hover:shadow-2xl
    "
  />
</div>
    <div className="group relative overflow-visible">
  <img
    src="/event3.jpg"
    alt="Event 2"
    className="
      h-52 w-full rounded-2xl object-cover shadow-md
      transition-all duration-500 ease-out
      group-hover:scale-110
      group-hover:shadow-2xl
    "
  />
</div>
    <div className="group relative overflow-visible">
  <img
    src="/event4.jpg"
    alt="Event 2"
    className="
      h-52 w-full rounded-2xl object-cover shadow-md
      transition-all duration-500 ease-out
      group-hover:scale-110
      group-hover:shadow-2xl
    "
  />
</div>
    <div className="group relative overflow-visible">
  <img
    src="/event5.jpg"
    alt="Event 2"
    className="
      h-52 w-full rounded-2xl object-cover shadow-md
      transition-all duration-500 ease-out
      group-hover:scale-110
      group-hover:shadow-2xl
    "
  />
</div>

    <div className="group relative overflow-visible">
  <img
    src="/poster.jpg"
    alt="Event 2"
    className="
      h-52 w-full rounded-2xl object-cover shadow-md
      transition-all duration-500 ease-out
      group-hover:scale-110
      group-hover:shadow-2xl
    "
  />
</div>
  </div>
</div>

          {/* Action Buttons */}
          {/* Action Buttons */}
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <button
    className="
      flex-1 rounded-2xl
      bg-gradient-to-r from-blue-600 to-indigo-600
      px-8 py-4
      text-lg font-bold text-white
      shadow-lg
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-[1.02]
      hover:from-blue-700
      hover:to-indigo-700
      hover:shadow-2xl
      active:scale-95
    "
  >
    🚀 Register as Participant
  </button>

  <button
    className="
      flex-1 rounded-2xl
      border-2 border-orange-500
      bg-gradient-to-r from-orange-50 to-amber-50
      px-8 py-4
      text-lg font-bold text-orange-600
      shadow-md
      transition-all duration-300
      hover:-translate-y-1
      hover:scale-[1.02]
      hover:border-orange-600
      hover:bg-gradient-to-r
      hover:from-orange-500
      hover:to-amber-500
      hover:text-white
      hover:shadow-2xl
      active:scale-95
    "
  >
    🙋 Register as Volunteer
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
