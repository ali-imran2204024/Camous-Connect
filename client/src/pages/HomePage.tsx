import { Link } from 'react-router-dom';
import { FaBell, FaBriefcase, FaBus, FaGraduationCap, FaHeartbeat } from 'react-icons/fa';
import overviewImage from '../../../Details overview.png';
import SectionCard from '../components/ui/SectionCard';

const modules = [
  {
  title: 'Club & Intra University Events',
  description: 'Discover clubs, join events, volunteer, and manage registrations from one place.',
  badge: 'Community',
  badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
  image: '/club.jpg',
},
  {
    title: 'Jobs & Internships',
    description: 'Browse curated opportunities with deadlines, filters, and direct application links.',
    badge: 'Career',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-500',

    image: '/job.jpg',
  },
  {
    title: 'Scholarships & Research',
    description: 'Explore funding, research roles, TA and RA opportunities for students.',
    badge: 'Academics',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-500',

    image: '/research.jpg',
  },
  {
    title: 'Emergency Services',
    description: 'Fast access to medical schedules, blood donation drives, and emergency contacts.',
    badge: 'Support',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-500',

    image: 'emergency.png',
  },
  {
    title: 'Transport',
    description: 'Track routes, schedules, notices, and future-ready transport updates.',
    badge: 'Mobility',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-500',

    image: 'bus.png',
  },
  {
    title: 'News & Updates',
    description: 'Stay current with announcements, university news, and club notices.',
    badge: 'Updates',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-500',

    image: 'news.jpg',
  },
  {
    title: 'Nation & Inter university event',
    description: 'Discover national and inter-university events, competitions, and collaboration opportunities.',
    badge: 'Events',
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-500',

    image: 'national.png',
  },
];

const highlights = [
  {
    icon: FaGraduationCap,
    title: 'Student-Centered',
    text: 'Built for welfare, engagement, and daily student life support.',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600 border-blue-600',
    hoverColor: 'hover:bg-blue-100',
  },
  {
    icon: FaBriefcase,
    title: 'Career Ready',
    text: 'Access internships, campus hiring, and professional opportunities.',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600 border-green-600',
    hoverColor: 'hover:bg-green-100',
  },
  {
    icon: FaHeartbeat,
    title: 'Support Access',
    text: 'Emergency and wellbeing help with a simple, reliable experience.',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600 border-red-600',
    hoverColor: 'hover:bg-red-100',
  },
  {
    icon: FaBus,
    title: 'Campus Mobility',
    text: 'Transport schedules and route visibility in one place.',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600 border-orange-600',
    hoverColor: 'hover:bg-orange-100',
  },
];

const HomePage = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-[#e5e7eb] bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#10b981] p-8 text-white shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xl font-semibold text-black-200 backdrop-blur">
              <FaBell /> Student Welfare & Opportunity Platform
            </div>
            <h1 className="text-6xl text-orange-500 font-bold leading-tight sm:text-5xl">Everything a student needs, all in one place.</h1>
            <p className="mt-4 text-3xl font-bold text-white ">Campus Connect brings together club events, internships, scholarships, emergency services, transport, and university updates in one smart student platform.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/login" className=" rounded-full bg-orange-600 px-12 py-4 text-base font-bold text-xl text-white transition hover:bg-blue-700">Get Started</a>
              <a href="/register" className=" rounded-full bg-orange-600 px-12 py-4 text-base font-bold text-xl text-white transition hover:bg-blue-700">Join With Us</a>
            </div>
          </div>
          <div className="w-full lg:max-w-[420px]">
            <img src={overviewImage} alt="Campus Connect overview" className="h-72 w-full rounded-[1.5rem] border border-white/20 object-cover shadow-2xl lg:h-[420px]" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {highlights.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className={`
          rounded-3xl
          border
          border-[#e5e7eb]
          bg-SlateGray
          p-6
          shadow-md
          transition-all
          duration-500
          hover:-translate-y-3
          hover:scale-105
          hover:shadow-2xl
          ${item.hoverColor}
        `}
      >
        <div
          className={`
            mb-4
            inline-flex
            rounded-2xl
            p-4
            ${item.bgColor}
            ${item.iconColor}
          `}
        >
          <Icon size={28} />
        </div>

        <h3 className={`text-2xl font-bold ${item.iconColor}`}>
          {item.title}
        </h3>

        <p className="mt-3 text-base leading-relaxed text-[#4b5563] font-medium">
          {item.text}
        </p>
      </div>
    );
  })}
</section>

      <section className="rounded-[2rem] border border-[#e5e7eb] bg-[#FFFAF0]  p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-4xl font-bold   text-orange-600">Core modules</p>
            <h2 className="text-2xl font-bold text-[#1f2937]">Everything students need in one platform</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link
  key={module.title}
  to={module.title === 'Club & Intra University Events' ? '/club-events' : '#'}
  className="group block"
>
              <SectionCard title={module.title} description={module.description} badge={module.badge} badgeColor={module.badgeColor} image={module.image} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
