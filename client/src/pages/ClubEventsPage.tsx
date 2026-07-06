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
                  className="rounded-full bg-blue-600 px-7 py-2.5 text-white text-xl font-bold hover:bg-blue-700"
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Events Section */}
     
<div className="mt-16">
  <div className="text-center">
    <h2 className="text-4xl font-black text-[#ED3207] sm:text-5xl">
      Recent Events
    </h2>

    <p className="mt-3 text-2xl font-bold text-[#141413]">
      Highlights from recently completed club activities.
    </p>
  </div>

  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
    <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
      <div className="mb-4 flex justify-between">
        <span className="rounded-full bg-green-600 px-4 py-2 text-xl font-bold text-white">
          Completed
        </span>
      </div>

      <h3 className="text-2xl font-bold text-[#111827]">
        Coding Marathon 2026
      </h3>

      <p className="mt-2 text-xl font-bold text-[#1e3a8a]">
        Computer Club
      </p>

      <div className="mt-5 space-y-2 text-base text-lg font-bold text-[#374151]">
        <p>📅 May 20, 2025</p>
        <p>📍 CSE Building</p>
        <p>👥 150 Participants</p>
        <p>🏆 Winner: Team ByteForce</p>
      </div>
    </div>

    <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
      <div className="mb-4 flex justify-between">
        <span className="rounded-full bg-green-600 px-4 py-2 text-xl font-bold text-white">
          Completed
        </span>
      </div>

      <h3 className="text-2xl font-bold text-[#111827]">
        AI Workshop
      </h3>

      <p className="mt-2 text-xl font-bold text-[#1e3a8a]">
        Career Club
      </p>

      <div className="mt-5 space-y-2 text-base text-lg font-bold text-[#374151]">
        <p>📅 April 15, 2025</p>
        <p>📍 Tech Lab 3</p>
        <p>👥 100 Participants</p>
        <p>🎓 Certificates Issued</p>
      </div>
    </div>

    <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-purple-200 p-6 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
      <div className="mb-4 flex justify-between">
        <span className="rounded-full bg-green-600 px-4 py-2 text-xl font-bold text-white">
          Completed
        </span>
      </div>

      <h3 className="text-2xl font-bold text-[#111827]">
        Robotics Challenge
      </h3>

      <p className="mt-2 text-xl font-bold text-[#1e3a8a]">
        Robotics Club
      </p>

      <div className="mt-5 space-y-2 text-base text-lg font-bold text-[#374151]">
        <p>📅 March 10, 2025</p>
        <p>📍 Robotics Lab</p>
        <p>👥 80 Participants</p>
        <p>🏆 Winner: Team The 100</p>
      </div>
    </div>

  </div>
</div>


{/* Event Statistics */}
<div className="mt-20">
  <div className="text-center">
    <h2 className="text-4xl font-black text-[#ED3207] sm:text-5xl">
      Event Statistics
    </h2>

    <p className="mt-3 text-2xl font-bold text-[#141413]">
      A quick overview of club activities and student engagement.
    </p>
  </div>

  {/* Statistics Cards */}
  <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-5xl font-black">120+</h3>
      <p className="mt-2 text-xl font-bold">Total Events</p>
    </div>

    <div className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-5xl font-black">3500+</h3>
      <p className="mt-2 text-xl font-bold">Participants</p>
    </div>

    <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-5xl font-black">10+</h3>
      <p className="mt-2 text-xl font-bold">Active Clubs</p>
    </div>

    <div className="rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-5xl font-black">450+</h3>
      <p className="mt-2 text-xl font-bold">Volunteers</p>
    </div>
  </div>

  {/* Colorful Progress Bars */}
  <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">
    <h3 className="text-3xl font-bold text-[#1e3a8a]">
      Event Category Distribution
    </h3>

    <div className="mt-8 space-y-6">

      <div>
        <div className="mb-2 flex justify-between text-lg font-bold">
          <span>Competitions</span>
          <span>40%</span>
        </div>
        <div className="h-5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
        </div>
      </div>

      <div>
        <div className="mb-2 flex justify-between text-lg font-bold">
          <span>Workshops</span>
          <span>30%</span>
        </div>
        <div className="h-5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        </div>
      </div>

      <div>
        <div className="mb-2 flex justify-between text-lg font-bold">
          <span>Seminars</span>
          <span>20%</span>
        </div>
        <div className="h-5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
      </div>

      <div>
        <div className="mb-2 flex justify-between text-lg font-bold">
          <span>Hackathons</span>
          <span>10%</span>
        </div>
        <div className="h-5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-[10%] rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
        </div>
      </div>

    </div>
  </div>

  {/* Pie Chart Style */}
  <div className="mt-12 flex justify-center">
    <div className="flex flex-col items-center rounded-3xl bg-white p-8 shadow-xl">
      <h3 className="mb-6 text-3xl font-bold text-[#1e3a8a]">
        Event Participation
      </h3>

      <div
        className="h-72 w-72 rounded-full"
        style={{
          background:
            "conic-gradient(#ef4444 0% 40%, #3b82f6 40% 70%, #8b5cf6 70% 90%, #22c55e 90% 100%)",
        }}
      ></div>

      <div className="mt-6 grid grid-cols-2 gap-4 text-lg font-bold">
        <div>🔴 Competitions</div>
        <div>🔵 Workshops</div>
        <div>🟣 Seminars</div>
        <div>🟢 Hackathons</div>
      </div>
    </div>
  </div>
 </div>

        {/* Existing Clubs at CUET */}
  <div className="mt-20">
     <div className="text-center">
      <h2 className="text-4xl font-black text-[#ED3207] sm:text-5xl">
      Existing Clubs at CUET
    </h2>

    <p className="mt-3 text-2xl font-bold text-[#141413]">
      Explore the active clubs and student organizations at CUET.
    </p>
  </div>

   <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-2">

    {[
      {
        name: "IEEE CUET Student Branch",
        image: "/ieee.jpg",
        website: "ieeecuetsb.org",
        email: "ieeecuetsbofficial@cuet.ac.bd",
        facebook: "facebook.com/ieeecuetsb",
      },
      {
        name: "ASCE Student Chapter, CUET",
        image: "/asce.jpg",
        website: "ascecuet.org",
        email: "asce@cuet.ac.bd",
        facebook: "facebook.com/ascecuet",
      },
      {
        name: "RMA",
        image: "/rma.jpg",
        website: "rmacuet.org",
        email: "rma@cuet.ac.bd",
        facebook: "facebook.com/rmacuet",
      },
      {
        name: "ACI-CUET Chapter",
        image: "/aci.jpg",
        website: "acicuet.org",
        email: "aci@cuet.ac.bd",
        facebook: "facebook.com/acicuet",
      },
      {
        name: "CUET Photographic Society",
        image: "/cps.jpg",
        website: "cpscuet.org",
        email: "cps@cuet.ac.bd",
        facebook: "facebook.com/cpscuet",
      },
      {
        name: "ASRO",
        image: "/asro.jpg",
        website: "asrocuet.org",
        email: "asro@cuet.ac.bd",
        facebook: "facebook.com/asrocuet",
      },
      {
        name: "Joyoddhoney",
        image: "/joyoddhoney.jpg",
        website: "joyoddhoney.org",
        email: "joyoddhoney@cuet.ac.bd",
        facebook: "facebook.com/joyoddhoney",
      },
      {
        name: "Green for Peace",
        image: "/greenforpeace.jpg",
        website: "greenforpeace.org",
        email: "greenforpeace@cuet.ac.bd",
        facebook: "facebook.com/greenforpeace",
      },
      {
        name: "CUET Career Club",
        image: "/careerclub.jpg",
        website: "careerclub.org",
        email: "careerclub@cuet.ac.bd",
        facebook: "facebook.com/cuetcareerclub",
      },
      {
        name: "Computer Club",
        image: "/computerclub.jpg",
        website: "computerclub.org",
        email: "computerclub@cuet.ac.bd",
        facebook: "facebook.com/cuetcomputerclub",
      },
      {
        name: "Debating Society",
        image: "/debating.jpg",
        website: "debatingcuet.org",
        email: "debating@cuet.ac.bd",
        facebook: "facebook.com/cuetdebating",
      },
    ].map((club) => (
      <div
        key={club.name}
        className="
          overflow-hidden
          rounded-3xl
          border
          border-[#e5e7eb]
          bg-orange-100
          shadow-lg
          transition-all
          duration-500
          text-center
          text-[#1f2937]
          hover:-translate-y-3
          hover:scale-[1.02]
          hover:shadow-2xl
        "
      > 
        <div className="overflow-hidden">
          <img
            src={club.image}
            alt={club.name}
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#1e3a8a]">
            {club.name}
          </h3>

          <div className="mt-5 space-y-2 text-xl text-left">
            <p>
              <span className="font-bold text-[#ED3207]">
                🌐 Website:
              </span>{" "}
              {club.website}
            </p>

            <p>
              <span className="font-bold text-[#ED3207]">
                ✉ Email:
              </span>{" "}
              {club.email}
            </p>

            <p>
              <span className="font-bold text-[#ED3207]">
                📘 Facebook:
              </span>{" "}
              {club.facebook}
            </p>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>


</div>





    
  );
};

export default ClubEventsPage;
 