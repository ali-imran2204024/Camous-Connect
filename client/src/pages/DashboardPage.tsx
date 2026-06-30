import { useAuth } from '../contexts/AuthContext';

const cards = [
  { title: 'Upcoming Events', value: '12', detail: 'Club and campus activities' },
  { title: 'Applications', value: '7', detail: 'Jobs, internships, scholarships' },
  { title: 'Volunteer Requests', value: '3', detail: 'Pending approval' },
  { title: 'Announcements', value: '5', detail: 'New updates from campus' },
];

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-700 p-8 text-white shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Role-based dashboard</p>
        <h1 className="mt-3 text-3xl font-bold">Welcome back, {user?.name ?? 'Student'}.</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Here you can manage your student welfare activities, applications, and important campus updates.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500 dark:text-slate-400">{card.title}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{card.value}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Recent Activity</h2>
          <div className="mt-5 space-y-4">
            {['Registered for a hackathon', 'Applied to a scholarship', 'Saved an internship opportunity'].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Quick Access</h2>
          <div className="mt-5 space-y-3">
            {['Club events', 'Jobs', 'Scholarships', 'Emergency contacts'].map((item) => (
              <div key={item} className="rounded-xl bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
