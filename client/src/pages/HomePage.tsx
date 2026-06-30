import { FaBell, FaBriefcase, FaBus, FaGraduationCap, FaHeartbeat } from 'react-icons/fa';
import overviewImage from '../../../Details overview.png';
import SectionCard from '../components/ui/SectionCard';

const modules = [
  {
    title: 'Club Programs',
    description: 'Discover clubs, join events, volunteer, and manage registrations from one place.',
    badge: 'Community',
  },
  {
    title: 'Jobs & Internships',
    description: 'Browse curated opportunities with deadlines, filters, and direct application links.',
    badge: 'Career',
  },
  {
    title: 'Scholarships & Research',
    description: 'Explore funding, research roles, TA and RA opportunities for students.',
    badge: 'Academics',
  },
  {
    title: 'Emergency Services',
    description: 'Fast access to medical schedules, blood donation drives, and emergency contacts.',
    badge: 'Support',
  },
  {
    title: 'Transport',
    description: 'Track routes, schedules, notices, and future-ready transport updates.',
    badge: 'Mobility',
  },
  {
    title: 'News & Updates',
    description: 'Stay current with announcements, university news, and club notices.',
    badge: 'Updates',
  },
];

const highlights = [
  { icon: FaGraduationCap, title: 'Student-Centered', text: 'Built for welfare, engagement, and daily student life support.' },
  { icon: FaBriefcase, title: 'Career Ready', text: 'Access internships, campus hiring, and professional opportunities.' },
  { icon: FaHeartbeat, title: 'Support Access', text: 'Emergency and wellbeing help with a simple, reliable experience.' },
  { icon: FaBus, title: 'Campus Mobility', text: 'Transport schedules and route visibility in one place.' },
];

const HomePage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#e5e7eb] bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#10b981] p-8 text-white shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur">
              <FaBell /> Student welfare platform
            </div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Campus Connect keeps every student opportunity in one place.</h1>
            <p className="mt-4 text-lg text-indigo-50">Explore events, jobs, scholarships, emergency help, transport, and updates from a single student-friendly dashboard.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/login" className="rounded-full bg-white px-5 py-3 font-semibold text-[#1e3a8a] shadow hover:bg-[#f8fafc]">Login</a>
              <a href="/register" className="rounded-full border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10">Create Account</a>
            </div>
          </div>
          <div className="w-full lg:max-w-[420px]">
            <img src={overviewImage} alt="Campus Connect overview" className="h-72 w-full rounded-[1.5rem] border border-white/20 object-cover shadow-2xl lg:h-[420px]" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-3 inline-flex rounded-xl bg-[#eff6ff] p-3 text-[#1e3a8a]">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#6b7280]">{item.text}</p>
            </div>
          );
        })}
      </section>

      <section className="rounded-[2rem] border border-[#e5e7eb] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1e3a8a]">Core modules</p>
            <h2 className="text-2xl font-bold text-[#1f2937]">Everything students need in one platform</h2>
          </div>
          <p className="text-sm text-[#6b7280]">All major student welfare modules are organized in one body section for easy browsing.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <SectionCard key={module.title} title={module.title} description={module.description} badge={module.badge} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
