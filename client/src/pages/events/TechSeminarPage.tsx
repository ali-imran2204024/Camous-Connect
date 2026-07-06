import { Link } from 'react-router-dom';

const TechSeminarPage = () => {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black text-[coral]">Tech Career Seminar</h1>
          <p className="mt-2 text-2xl font-bold text-[black]">Discover opportunities in the tech industry</p>
        </div>
        <Link
          to="/club-events"
         className="inline-flex items-center justify-center rounded-full border border-[black] bg-white px-9 py-2.5 text-2xl font-bold text-[coral] transition hover:bg-orange -50"
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
              <p className="text-2xl font-bold  tracking-wider text-[black]">Organized by</p>
              <p className="mt-2 text-4xl font-bold text-[#1e3a8a]">Career Club</p>
            </div>

             <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xl font-semibold  tracking-wider text-[black]">Date</p>
                <p className="mt-2 text-2xl font-bold text-[Red]">June 15, 2026</p>
              </div>
              <div>
                <p className="text-xl font-semibold  tracking-wider text-[black]">Time</p>
                <p className="mt-2 text-2xl font-bold text-[red]">02:00 AM - 06:00 PM</p>
              </div>
              <div>
                <p className="text-xl font-semibold  tracking-wider text-[black]">Venue</p>
                <p className="mt-2 text-2xl font-bold text-[red]">CUET IT Incubator</p>
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
            <p className="mt-4 leading-relaxed  text-2xl font-semibold text-[black]">
              Industry experts share insights on the latest technology trends, career paths, and opportunities in the tech sector. Learn from professionals who work at leading tech companies about what it takes to succeed in the industry. A Q&A session will follow where you can ask questions directly to the panelists.
            </p>
          </div>

          {/* Speakers */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Meet Our Guest</h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4 border-l-4 border-[#8b5cf6] bg-purple-50 p-4">
                <div className="h-16 w-16 rounded-lg bg-[#8b5cf6] flex-shrink-0"><img src="/man.jpg" alt="Alex Chen" className="h-full w-full rounded-lg object-cover" /></div>
                <div>
                  <p className="font-bold text-2xl  text-red-600">Abdur Rahman</p>
                  <p className="text-lg font-bold text-[#8b5cf6]">Senior Software Engineer </p>
                  <p className="mt-2 text-lg font-semibold text-black">10+ years in software development, AI/ML specialist</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#8b5cf6] bg-purple-50 p-4">
                <div className="h-16 w-16 rounded-lg bg-[#8b5cf6] flex-shrink-0"><img src="/women.jpg" alt="Maya Patel" className="h-full w-full rounded-lg object-cover" /></div>
                <div>
                  <p className="font-bold text-2xl  text-red-600">Akhi Akter</p>
                  <p className="text-lg font-bold text-[#8b5cf6]">Senior Data Scientist</p>
                  <p className="mt-2 text-lg font-semibold text-black">Expert in machine learning and data analysis</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-4 border-[#8b5cf6] bg-purple-50 p-4">
                <div className="h-16 w-16 rounded-lg bg-[#8b5cf6] flex-shrink-0"><img src="/man.jpg" alt="James Wilson" className="h-full w-full rounded-lg object-cover" /></div>
                <div>
                  <p className="font-bold text-2xl  text-red-600">Pro Mokter </p>
                  <p className="text-lg font-bold text-[#8b5cf6]">Founder & CEO  of TechStartup Inc</p>
                  <p className="mt-2 text-lg font-semibold text-black">Entrepreneurship, startup culture, innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Topics to be Covered</h2>
            <ul className="mt-6 text-xl font-bold text-black space-y-3">
              <li className="flex gap-3 rounded-lg bg-orange-100 p-3">
                <span className="text-lg">🎯</span>
                <span className="text-[#6b7280]"><strong>Career Pathways:</strong> Different roles and specializations in tech</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-blue-100 p-3">
                <span className="text-lg">💡</span>
                <span className="text-[#6b7280]"><strong>Industry Trends:</strong> What's hot in AI, Cloud, Cybersecurity, and Web3</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-orange-100 p-3">
                <span className="text-lg">📈</span>
                <span className="text-[#6b7280]"><strong>Growth Opportunities:</strong> How to advance your career in tech</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-blue-100 p-3">
                <span className="text-lg">🤝</span>
                <span className="text-[#6b7280]"><strong>Networking:</strong> Direct interaction with tech professionals</span>
              </li>
              <li className="flex gap-3 rounded-lg bg-orange-100 p-3">
                <span className="text-lg">❓</span>
                <span className="text-[#6b7280]"><strong>Q&A Session:</strong> Ask anything to our expert panelists</span>
              </li>
            </ul>
          </div>

          {/* Agenda */}
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Event Schedule</h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">02:00</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Event start</p>
                  <p className="text-lg font-bold text-[#6b7280]">Check-in and take your seat</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">03:30</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Tea Break</p>
                  <p className="text-lg font-bold text-[#6b7280]">Take a break and refresh your mind</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">04:00</div>
                <div>
                  <p className="font-bold text-xl text-[black]">Event resume</p>
                  <p className="text-lg font-bold text-[#6b7280]">Continue with the main session</p>
                </div>
              </div>
             
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">05:00</div>
                <div>
                  <p className="font-bold text-xl text-[black]">QNA Session</p>
                  <p className="text-lg font-bold text-[#6b7280]">Ask questions and interact with experts</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-4 border-[#f59e0b] bg-amber-50 p-4">
                <div className="font-bold  text-2xl text-[red]">06:00</div>
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
            <h3 className="text-3xl font-bold text-[#1e3a8a]">Want to Secure Your Goal ?</h3>
            <div className="mt-6 space-y-3">
              <button className="w-full rounded-full bg-orange-600 px-6 py-3 text-base font-bold text-xl text-white transition hover:bg-blue-700">
                Register 
              </button>
              <button className="w-full rounded-full bg-orange-600 px-6 py-3 text-base font-bold text-xl text-white transition hover:bg-blue-700">
                Join as Volunteer
              </button>
            </div>
          </div>

        <div className=" w-[500px] rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-lg">
            <h3 className="text-3xl font-bold text-[#1e3a8a]">Key Information</h3>
            <ul className="mt-4 space-y-3 text-xl">
              <li className="flex items-center gap-2">
                <span className="text-xl">👥</span>
                <span className=" text-xl font-bold text-[black]">Open to all students</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <span className=" text-xl font-bold text-[black]">Free Registration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span className=" text-xl font-bold text-[black]">Location: CUET IT Incubator</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">⏰</span>
                <span className=" text-xl font-bold text-[black]">Duration: 4 Hours</span>
              </li>
            </ul>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default TechSeminarPage;
