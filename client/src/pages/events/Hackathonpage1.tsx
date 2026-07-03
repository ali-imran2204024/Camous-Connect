import { Link } from 'react-router-dom';

const HackathonPage = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black text-[#f59e0b]">Campus Hackathon</h1>
          <p className="mt-2 text-xl text-[#6b7280]">24 Hours of Innovation & Collaboration</p>
        </div>
        <Link
          to="/club-events"
          className="inline-flex items-center justify-center rounded-full border border-[#f59e0b] bg-white px-6 py-2.5 text-sm font-semibold text-[#f59e0b] transition hover:bg-amber-50"
        >
          ← Back
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Event Card */}
          <div className="rounded-2xl border border-[#fcd34d] bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg">
            <div className="mb-6 border-b border-[#f59e0b] pb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Organized by</p>
              <p className="mt-2 text-3xl font-bold text-[#f59e0b]">Robotics Club</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Date</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">July 1, 2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Time</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">9:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Venue</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">Innovation Hub</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Registration Deadline</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">June 25, 2026</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">What is the Hackathon?</h2>
            <p className="mt-4 leading-relaxed text-[#4b5563]">
              A full-day hackathon event where teams collaborate to build innovative solutions to real-world problems. 
              Prizes, mentorship, and networking opportunities await all participants. Whether you're a beginner or an 
              experienced developer, there's something for everyone. Learn from industry experts, meet like-minded innovators, 
              and showcase your creativity!
            </p>
          </div>

          {/* Schedule */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">Event Schedule</h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-semibold text-[#f59e0b]">09:00</div>
                <div>
                  <p className="font-semibold text-[#111827]">Registration & Breakfast</p>
                  <p className="text-sm text-[#6b7280]">Check-in and meet other participants</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-semibold text-[#f59e0b]">10:00</div>
                <div>
                  <p className="font-semibold text-[#111827]">Kickoff & Problem Statements</p>
                  <p className="text-sm text-[#6b7280]">Introduction and theme announcement</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-semibold text-[#f59e0b]">10:30</div>
                <div>
                  <p className="font-semibold text-[#111827]">Hacking Begins</p>
                  <p className="text-sm text-[#6b7280]">Start building your solution</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-semibold text-[#f59e0b]">01:00</div>
                <div>
                  <p className="font-semibold text-[#111827]">Lunch Break</p>
                  <p className="text-sm text-[#6b7280]">Refuel and network</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-semibold text-[#f59e0b]">05:00</div>
                <div>
                  <p className="font-semibold text-[#111827]">Mentoring & Pitch Coaching</p>
                  <p className="text-sm text-[#6b7280]">Guidance from industry experts</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-semibold text-[#f59e0b]">06:30</div>
                <div>
                  <p className="font-semibold text-[#111827]">Submission Deadline</p>
                  <p className="text-sm text-[#6b7280]">Final submissions required</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-semibold text-[#f59e0b]">07:00</div>
                <div>
                  <p className="font-semibold text-[#111827]">Project Presentations & Awards</p>
                  <p className="text-sm text-[#6b7280]">Showcase your work and celebrate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Themes */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">Potential Themes</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#fcd34d] bg-amber-50 p-4">
                <p className="font-semibold text-[#111827]">🌍 Sustainability</p>
                <p className="text-sm text-[#6b7280]">Solutions for environmental challenges</p>
              </div>
              <div className="rounded-lg border border-[#fcd34d] bg-amber-50 p-4">
                <p className="font-semibold text-[#111827]">🏥 HealthTech</p>
                <p className="text-sm text-[#6b7280]">Innovative healthcare solutions</p>
              </div>
              <div className="rounded-lg border border-[#fcd34d] bg-amber-50 p-4">
                <p className="font-semibold text-[#111827]">📚 EdTech</p>
                <p className="text-sm text-[#6b7280]">Revolutionizing education</p>
              </div>
              <div className="rounded-lg border border-[#fcd34d] bg-amber-50 p-4">
                <p className="font-semibold text-[#111827]">🚀 Open Innovation</p>
                <p className="text-sm text-[#6b7280]">Any innovative idea</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <div className="rounded-2xl border border-[#f59e0b] bg-gradient-to-br from-amber-50 to-amber-100 p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#f59e0b]">Register Your Team</h3>
            <div className="mt-6 space-y-3">
              <button className="w-full rounded-full bg-[#f59e0b] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#d97706]">
                Register Now
              </button>
              <button className="w-full rounded-full border-2 border-[#f59e0b] px-6 py-3 text-base font-semibold text-[#f59e0b] transition hover:bg-amber-50">
                Volunteer
              </button>
            </div>
            <p className="mt-4 text-xs text-[#6b7280]">Last seats filling up! Register before June 25.</p>
          </div>

          {/* Quick Info */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Quick Details</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-lg">👥</span>
                <span className="text-[#6b7280]">Team Size: 2-4 members</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">💰</span>
                <span className="text-[#6b7280]">Free registration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <span className="text-[#6b7280]">Total Prize: $2000</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🍕</span>
                <span className="text-[#6b7280]">Meals & snacks provided</span>
              </li>
            </ul>
          </div>

          {/* Prizes */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Prize Pool</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex justify-between text-sm font-semibold">
                <span className="text-[#6b7280]">🥇 1st Prize</span>
                <span className="text-[#f59e0b]">$1000</span>
              </li>
              <li className="flex justify-between text-sm font-semibold">
                <span className="text-[#6b7280]">🥈 2nd Prize</span>
                <span className="text-[#f59e0b]">$600</span>
              </li>
              <li className="flex justify-between text-sm font-semibold">
                <span className="text-[#6b7280]">🥉 3rd Prize</span>
                <span className="text-[#f59e0b]">$400</span>
              </li>
            </ul>
          </div>

          {/* Judges */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Judges</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p className="text-[#6b7280]">Industry experts from leading tech companies</p>
              <p className="text-xs text-[#9ca3af]">Judging criteria: Innovation, Feasibility, Impact, Presentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
