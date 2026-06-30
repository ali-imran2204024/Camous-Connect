const pillars = [
  'Role-based dashboards for students, clubs, staff, and administrators.',
  'A modular structure for future growth across events, services, and announcements.',
  'Responsive design and dark-mode-ready UI for a modern campus experience.',
];

const AboutPage = () => {
  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">About the platform</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Built for student welfare, engagement, and support.</h1>
      </div>
      <p className="max-w-3xl text-slate-600 dark:text-slate-300">
        Campus Connect is a student welfare platform designed to help students discover campus opportunities, access support services, and manage student life from one central hub.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            {pillar}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;
