import { Link } from 'react-router-dom';

const TechSeminarPage = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black text-[#8b5cf6]">Tech Career Seminar</h1>
          <p className="mt-2 text-xl text-[#6b7280]">Discover opportunities in the tech industry</p>
        </div>
        <Link
          to="/club-events"
          className="inline-flex items-center justify-center rounded-full border border-[#8b5cf6] bg-white px-6 py-2.5 text-sm font-semibold text-[#8b5cf6] transition hover:bg-purple-50"
        >
          ← Back
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Event Card */}
          <div className="rounded-2xl border border-[#ddd6fe] bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg">
            <div className="mb-6 border-b border-[#8b5cf6] pb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Organized by</p>
              <p className="mt-2 text-3xl font-bold text-[#8b5cf6]">Computer Club</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Date</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">July 9, 2026</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Time</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">11:00 AM - 1:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Venue</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">Conference Room B</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7280]">Registration Deadline</p>
                <p className="mt-2 text-xl font-bold text-[#111827]">July 6, 2026</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">About the Seminar</h2>
            <p className="mt-4 leading-relaxed text-[#4b5563]">
              Industry experts share insights on the latest technology trends, career paths, and opportunities in the tech sector. 
              Learn from professionals who work at leading tech companies about what it takes to succeed in the industry. 
              A Q&A session will follow where you can ask questions directly to the panelists.
            </p>
          </div>

          {/* Speakers */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">Meet Our Speakers</h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4 border-l-4 border-[#8b5cf6] bg-purple-50 p-4">
                <div className="h-16 w-16 rounded-lg bg-[#8b5cf6] flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[#111827]">Alex Chen</p>
                  <p className="text-sm text-[#8b5cf6]">Senior Software Engineer @ Google</p>
                  <p className="mt-2 text-sm text-[#6b7280]">10+ years in software development, AI/ML specialist</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#8b5cf6] bg-purple-50 p-4">
                <div className="h-16 w-16 rounded-lg bg-[#8b5cf6] flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[#111827]">Maya Patel</p>
                  <p className="text-sm text-[#8b5cf6]">Product Manager @ Meta</p>
                  <p className="mt-2 text-sm text-[#6b7280]">Leading product teams, career growth strategies</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#8b5cf6] bg-purple-50 p-4">
                <div className="h-16 w-16 rounded-lg bg-[#8b5cf6] flex-shrink-0"></div>
                <div>
                  <p className="font-bold text-[#111827]">James Wilson</p>
                  <p className="text-sm text-[#8b5cf6]">Founder & CEO @ TechStartup Inc</p>
                  <p className="mt-2 text-sm text-[#6b7280]">Entrepreneurship, startup culture, innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">Topics to be Covered</h2>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 rounded-lg bg-purple-50 p-3">
                <span className="text-lg">🎯</span>
                <span className="text-[#6b7280]"><strong>Career Pathways:</strong> Different roles and specializations in tech</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-purple-50 p-3">
                <span className="text-lg">💡</span>
                <span className="text-[#6b7280]"><strong>Industry Trends:</strong> What's hot in AI, Cloud, Cybersecurity, and Web3</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-purple-50 p-3">
                <span className="text-lg">📈</span>
                <span className="text-[#6b7280]"><strong>Growth Opportunities:</strong> How to advance your career in tech</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-purple-50 p-3">
                <span className="text-lg">🤝</span>
                <span className="text-[#6b7280]"><strong>Networking:</strong> Direct interaction with tech professionals</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-purple-50 p-3">
                <span className="text-lg">❓</span>
                <span className="text-[#6b7280]"><strong>Q&A Session:</strong> Ask anything to our expert panelists</span>
              </li>
            </ul>
          </div>

          {/* Agenda */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#111827]">Agenda</h2>
            <div className="mt-6 space-y-3">
              <div className="flex gap-4">
                <div className="min-w-fit font-semibold text-[#8b5cf6]">11:00 - 11:10</div>
                <div>
                  <p className="font-semibold text-[#111827]">Welcome & Introduction</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-fit font-semibold text-[#8b5cf6]">11:10 - 11:35</div>
                <div>
                  <p className="font-semibold text-[#111827]">Talk 1: Career Pathways in Tech</p>
                  <p className="text-sm text-[#6b7280]">By Alex Chen (Google)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-fit font-semibold text-[#8b5cf6]">11:35 - 12:00</div>
                <div>
                  <p className="font-semibold text-[#111827]">Talk 2: Industry Trends & Opportunities</p>
                  <p className="text-sm text-[#6b7280]">By Maya Patel (Meta)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-fit font-semibold text-[#8b5cf6]">12:00 - 12:25</div>
                <div>
                  <p className="font-semibold text-[#111827]">Talk 3: Entrepreneurship & Innovation</p>
                  <p className="text-sm text-[#6b7280]">By James Wilson (TechStartup Inc)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-fit font-semibold text-[#8b5cf6]">12:25 - 1:00</div>
                <div>
                  <p className="font-semibold text-[#111827]">Q&A & Networking</p>
                  <p className="text-sm text-[#6b7280]">Direct interaction with panelists</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Registration Card */}
          <div className="rounded-2xl border border-[#8b5cf6] bg-gradient-to-br from-purple-50 to-purple-100 p-6 shadow-lg">
            <h3 className="text-xl font-bold text-[#8b5cf6]">Secure Your Seat</h3>
            <div className="mt-6 space-y-3">
              <button className="w-full rounded-full bg-[#8b5cf6] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#7c3aed]">
                Register Now
              </button>
              <button className="w-full rounded-full border-2 border-[#8b5cf6] px-6 py-3 text-base font-semibold text-[#8b5cf6] transition hover:bg-purple-50">
                Volunteer
              </button>
            </div>
            <p className="mt-4 text-xs text-[#6b7280]">Limited seats! Early birds get priority.</p>
          </div>

          {/* Key Info */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Event Info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-lg">👥</span>
                <span className="text-[#6b7280]">Open to all students</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">💰</span>
                <span className="text-[#6b7280]">Free admission</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🎓</span>
                <span className="text-[#6b7280]">Certificate provided</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">☕</span>
                <span className="text-[#6b7280]">Refreshments served</span>
              </li>
            </ul>
          </div>

          {/* What to Bring */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">What to Bring</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span className="text-[#6b7280]">Student ID</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span className="text-[#6b7280]">Notebook & pen</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span className="text-[#6b7280]">Business cards (optional)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span className="text-[#6b7280]">Enthusiasm to learn!</span>
              </li>
            </ul>
          </div>

          {/* Why Attend */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Why Attend?</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#6b7280]">
              <li>✨ Learn from industry leaders</li>
              <li>🔗 Expand your professional network</li>
              <li>🎯 Discover career opportunities</li>
              <li>📚 Stay updated on tech trends</li>
              <li>🚀 Get inspired for your future</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-[#111827]">Questions?</h3>
            <p className="mt-3 text-sm text-[#6b7280]">
              Contact us at: <br />
              <span className="font-semibold text-[#8b5cf6]">computerclub@campus.edu</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSeminarPage;
