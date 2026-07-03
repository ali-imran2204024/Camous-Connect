import { Link } from 'react-router-dom';

const WebDevelopmentWorkshopPage = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black text-[#10b981]">Web Development Workshop</h1>
          <p className="mt-2 text-xl text-[#6b7280]">Master modern web development</p>
        </div>
        <Link
          to="/club-events"
          className="inline-flex items-center justify-center rounded-full border border-[#10b981] bg-white px-6 py-2.5 text-sm font-semibold text-[#10b981] transition hover:bg-emerald-50"
        >
          ← Back
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Event Card */}
          <div className="rounded-2xl border border-[#d1fae5] bg-gradient-to-br from-emerald-50 to-white p-8 shadow-lg">
            <div className="mb-6 border-b border-[#10b981] pb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Organized by</p>
              <p className="mt-2 text-3xl font-bold text-[#10b981]">Career Club</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Date</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">June 22, 2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Time</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">1:00 PM - 4:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Venue</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">Tech Lab 3</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Registration Deadline</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">June 18, 2026</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">Workshop Overview</h2>
            <p className="mt-4 leading-relaxed text-[#4b5563]">
              Learn modern web development practices with hands-on projects. This comprehensive workshop covers HTML, CSS, 
              JavaScript, and popular frameworks. Perfect for beginners and intermediate developers looking to enhance their 
              web development skills. Our expert instructors will guide you through practical exercises and real-world projects.
            </p>
          </div>

          {/* Curriculum */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">Workshop Curriculum</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-lg border-l-4 border-[#10b981] bg-emerald-50 p-4">
                <p className="font-semibold text-[#111827]">🎯 Session 1: HTML & CSS Fundamentals (1:00 - 1:45 PM)</p>
                <p className="mt-2 text-sm text-[#6b7280]">Build a strong foundation with semantic HTML and modern CSS techniques</p>
              </div>
              <div className="rounded-lg border-l-4 border-[#10b981] bg-emerald-50 p-4">
                <p className="font-semibold text-[#111827]">⚡ Session 2: JavaScript Essentials (1:45 - 2:30 PM)</p>
                <p className="mt-2 text-sm text-[#6b7280]">Master JavaScript fundamentals and DOM manipulation</p>
              </div>
              <div className="rounded-lg border-l-4 border-[#10b981] bg-emerald-50 p-4">
                <p className="font-semibold text-[#111827]">🚀 Session 3: Frameworks & Best Practices (2:30 - 4:00 PM)</p>
                <p className="mt-2 text-sm text-[#6b7280]">Explore React/Vue and industry best practices with live coding demo</p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">What You Need</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="text-lg">✓</span>
                <span className="text-[#6b7280]">Laptop with a code editor (VS Code recommended)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">✓</span>
                <span className="text-[#6b7280]">Basic knowledge of HTML and CSS</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">✓</span>
                <span className="text-[#6b7280]">Node.js installed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-lg">✓</span>
                <span className="text-[#6b7280]">Enthusiasm to learn!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <div className="rounded-2xl border border-[#10b981] bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#10b981]">Join the Workshop</h3>
            <div className="mt-6 space-y-3">
              <button className="w-full rounded-full bg-[#10b981] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#059669]">
                Register Now
              </button>
              <button className="w-full rounded-full border-2 border-[#10b981] px-6 py-3 text-base font-semibold text-[#10b981] transition hover:bg-emerald-50">
                Volunteer
              </button>
            </div>
          </div>

          {/* Key Info */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Quick Facts</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-lg">👥</span>
                <span className="text-[#6b7280]">Max 50 participants</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className="text-[#6b7280]">3 hours hands-on</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <span className="text-[#6b7280]">Certificate included</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">💻</span>
                <span className="text-[#6b7280]">Offline at Tech Lab 3</span>
              </li>
            </ul>
          </div>

          {/* Instructor */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Your Instructor</h3>
            <div className="mt-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-[#10b981]"></div>
                <div>
                  <p className="font-semibold text-[#111827]">Sarah Johnson</p>
                  <p className="text-xs text-[#6b7280]">Senior Web Developer</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-[#6b7280]">10+ years experience in web development with expertise in React and modern tooling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentWorkshopPage;
