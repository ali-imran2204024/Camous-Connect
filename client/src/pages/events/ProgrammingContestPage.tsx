import { Link } from 'react-router-dom';

const ProgrammingContestPage = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black text-[coral]">Programming Contest</h1>
          <p className="mt-2 text-2xl font-bold text-[black]">Showcase your coding skills</p>
        </div>
        <Link
          to="/club-events"
          className="inline-flex items-center justify-center rounded-full border border-[black] bg-white px-9 py-2.5 text-xl font-bold text-[coral] transition hover:bg-orange -50"
        >
          ← Back
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Event Card */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <div className="mb-6 border-b border-[#e5e7eb] pb-6">
              <p className="text-xl font-bold  tracking-wider text-[black]">Organized by</p>
              <p className="mt-2 text-4xl font-bold text-[#1e3a8a]">Computer Club</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xl font-semibold  tracking-wider text-[black]">Date</p>
                <p className="mt-2 text-2xl font-bold text-[Red]">June 15, 2026</p>
              </div>
              <div>
                <p className="text-xl font-semibold  tracking-wider text-[black]">Time</p>
                <p className="mt-2 text-2xl font-bold text-[red]">10:00 AM - 3:00 PM</p>
              </div>
              <div>
                <p className="text-xl font-semibold  tracking-wider text-[black]">Venue</p>
                <p className="mt-2 text-2xl font-bold text-[red]">CSE Department</p>
              </div>
              <div>
                <p className="text-xl font-semibold  tracking-wider text-[black]">Registration Deadline</p>
                <p className="mt-2 text-2xl font-bold text-[red]">June 10, 2026</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">About This Event</h2>
            <p className="mt-4 leading-relaxed  text-xl font-semibold text-[black]">
              Join us for an exciting programming contest where you can showcase your coding skills and compete with peers. 
              Various difficulty levels available for all participants. This is a great opportunity to challenge yourself, 
              learn from others, and win amazing prizes!
            </p>
          </div>

          {/* Contest Details */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Contest Format</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="text-xl">🏆</span>
                <div>
                  <p className="font-bold text-xl text-[#111827]">Contest Type</p>
                  <p className=" font-semibold text-xl text-[Crimson]">Team-wise Programming Contest</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">👥</span>
                <div>
                  <p className="font-bold text-xl text-[#111827]">Team Size</p>
                  <p className=" font-semibold text-xl text-[Crimson]">Maximum 3 Members</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">💻</span>
                <div>
                  <p className="font-bold text-xl text-[#111827]">Platform</p>
                  <p className=" font-semibold text-xl text-[Crimson]">Codeforces</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">⏱</span>
                <div>
                  <p className="font-bold text-xl text-[#111827]">Duration</p>
                  <p className=" font-semibold text-xl text-[Crimson]">3 Hours</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-xl">📝</span>
                <div>
                  <p className="font-bold text-xl text-[#111827]">Number of Problems</p>
                  <p className=" font-semibold text-xl text-[Crimson]">5-7</p>
                </div>
              </li>
            </ul>
          </div>
            
             {/* Schedule */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Event Schedule</h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">10:00</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Contest start</p>
                  <p className="text-lg font-bold text-[#6b7280]">Check-in and start the battle</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">12:55</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Submission Deadline</p>
                  <p className="text-lg font-bold text-[#6b7280]">Final submissions required</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">01:00</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Lunch Break</p>
                  <p className="text-lg font-bold text-[#6b7280]">Receive your lunch showing token from booth</p>
                </div>
              </div>
             
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">02:00</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Prize & Awards</p>
                  <p className="text-lg font-bold text-[#6b7280]">Receive awards from guests</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">03:00</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Program End</p>
                  <p className="text-lg font-bold text-[#6b7280]">Thanks all to participate</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <div className=" w-[500px] rounded-2xl border border-[#1e3a8a] bg-gradient-to-br from-blue-50 to-blue-100 p-7 shadow-lg">
            <h3 className="text-3xl font-bold text-[#1e3a8a]">Ready to Compete?</h3>
            <div className="mt-6 space-y-3">
              <button className="w-full rounded-full bg-orange-600 px-6 py-3 text-base font-bold text-lg text-white transition hover:bg-blue-700">
                Register Team
              </button>
              <button className="w-full rounded-full bg-orange-600 px-6 py-3 text-base font-bold text-lg text-white transition hover:bg-blue-700">
                Join as Volunteer
              </button>
            </div>
          </div>

          {/* Key Info */}
          <div className=" w-[500px] rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-[#1e3a8a]">Key Information</h3>
            <ul className="mt-4 space-y-3 text-xl">
              <li className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span className=" text-2xl font-bold text-[black]">Registration Fee: 300 taka/team</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className=" text-2xl font-bold text-[black]">Category: Competition (Offline)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className=" text-2xl font-bold text-[black]">Location: CSE Department</span>
              </li>
            </ul>
          </div>

          {/* Prizes */}
          <div className=" w-[500px] rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-[#1e3a8a]">Prizes</h3>
            <ul className="mt-4 space-y-5 ">
              <li className="flex justify-between text-sm">
                <span className=" text-2xl font-bold text-[black]">🥇 1st Place</span>
                <span className="text-2xl font-bold text-[black]">14,000 taka</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-2xl font-bold text-[black]">🥈 2nd Place</span>
                <span className="text-2xl font-bold text-[black]">10,000 taka</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-2xl font-bold text-[black]">🥉 3rd Place</span>
                <span className="text-2xl font-bold text-[black]">7,000 taka</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingContestPage;
