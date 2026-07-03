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
    <div className="space-y-8 py-12">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black text-[#111827]">{event.title}</h1>
        <Link
          to="/club-events"
          className="inline-flex items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-6 py-2.5 text-sm font-semibold text-[#1e3a8a] transition hover:bg-[#f8fafc]"
        >
          ← Back
        </Link>
      </div>

      {/* Main Content Card */}
      <div className="rounded-3xl border border-[#e5e7eb] bg-white shadow-lg">
        <div className="p-8 sm:p-10">
          {/* Organizer Club */}
          <div className="mb-8 pb-8 border-b border-[#e5e7eb]">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
              Organized by
            </p>
            <p className="mt-2 text-2xl font-bold text-[#1e3a8a]">{event.club}</p>
          </div>

          {/* Event Details Grid */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            {/* Date */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                Date
              </p>
              <p className="mt-2 text-lg font-semibold text-[#111827]">{event.date}</p>
            </div>

            {/* Time */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                Time
              </p>
              <p className="mt-2 text-lg font-semibold text-[#111827]">{event.time}</p>
            </div>

            {/* Venue */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                Venue
              </p>
              <p className="mt-2 text-lg font-semibold text-[#111827]">{event.venue}</p>
            </div>

            {/* Registration Deadline */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
                Registration Deadline
              </p>
              <p className="mt-2 text-lg font-semibold text-[#111827]">
                {event.registrationDeadline}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 border-t border-[#e5e7eb] pt-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">
              About this event
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">
              {event.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-700 active:scale-95 sm:flex-1">
              Register
            </button>
            <button className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-8 py-3 text-base font-semibold text-blue-600 transition hover:bg-blue-50 active:scale-95 sm:flex-1">
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
