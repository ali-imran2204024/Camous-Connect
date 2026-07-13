import { useMemo, useState } from 'react';

const categories = [
  'All',
  'Student ID',
  'Wallet',
  'Money',
  'Mobile Phone',
  'Laptop',
  'Bag',
  'Charger',
  'Umbrella',
  'Calculator',
  'Documents',
  'Books',
  'Others',
];

const stats = [
  {
    title: 'Items Reported',
    value: '250+',
    detail: 'Active community reports',
    className: 'from-orange-500 via-amber-400 to-yellow-300',
  },
  {
    title: 'Items Returned',
    value: '190+',
    detail: 'Successful reunions',
    className: 'from-emerald-500 via-green-400 to-lime-300',
  },
  {
    title: 'Success Rate',
    value: '76%',
    detail: 'Reliable recovery flow',
    className: 'from-blue-500 via-cyan-400 to-sky-300',
  },
  {
    title: 'Active Cases',
    value: '60+',
    detail: 'Still being followed up',
    className: 'from-purple-500 via-fuchsia-400 to-pink-300',
  },
];

const lostItemsData = [
  {
    title: 'Student ID Card',
    owner: 'Student Name',
    location: 'Library',
    date: '05 July 2026',
    contact: '01XXXXXXXXX',
    category: 'Student ID',
    status: 'Searching',
    badge: 'Lost',
  },
  {
    title: 'Wallet',
    owner: 'Rafiq Ahmed',
    location: 'Central Cafeteria',
    date: '03 July 2026',
    contact: '01XXXXXXXXX',
    category: 'Wallet',
    status: 'Searching',
    badge: 'Lost',
  },
  {
    title: 'Laptop',
    owner: 'Nusrat Jahan',
    location: 'CSE Building',
    date: '01 July 2026',
    contact: '01XXXXXXXXX',
    category: 'Laptop',
    status: 'Searching',
    badge: 'Lost',
  },
];

const foundItemsData = [
  {
    title: 'Backpack',
    location: 'CSE Building',
    date: '07 July 2026',
    contact: '01XXXXXXXXX',
    category: 'Bag',
    status: 'Waiting for Claim',
    badge: 'Found',
  },
  {
    title: 'Calculator',
    location: 'Math Department',
    date: '06 July 2026',
    contact: '01XXXXXXXXX',
    category: 'Calculator',
    status: 'Waiting for Claim',
    badge: 'Found',
  },
  {
    title: 'Mobile Phone',
    location: 'Bus Stand',
    date: '05 July 2026',
    contact: '01XXXXXXXXX',
    category: 'Mobile Phone',
    status: 'Waiting for Claim',
    badge: 'Found',
  },
];

const returnedItems = [
  { title: 'Wallet Returned', date: '04 July 2026', status: 'Returned Successfully' },
  { title: 'Student ID Returned', date: '02 July 2026', status: 'Owner Reunited' },
  { title: 'Calculator Returned', date: '30 June 2026', status: 'Collected by Owner' },
  { title: 'Mobile Phone Returned', date: '28 June 2026', status: 'Collected by Owner' },
];

const collectionCenters = [
  { title: 'Student Welfare Office', detail: 'Main campus support desk', accent: 'from-orange-500 to-amber-400' },
  { title: 'Central Library', detail: 'Library security counter', accent: 'from-blue-500 to-cyan-400' },
  { title: 'Medical Center', detail: 'Campus first aid and help desk', accent: 'from-emerald-500 to-green-400' },
  { title: 'Hall Office', detail: 'Residential hall assistance', accent: 'from-purple-500 to-fuchsia-400' },
  { title: 'Security Office', detail: 'Emergency item handover', accent: 'from-rose-500 to-red-400' },
];

const emergencyItems = ['Student ID Cards', 'NID Cards', 'Bank Cards', 'Passports', 'Academic Certificates'];

const LostAndFoundPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredLostItems = useMemo(() => {
    return lostItemsData.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-10 py-10">
      <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0f766e] p-8 text-white shadow-2xl sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xl font-bold   text-white">CUET student support</p>
            <h1 className="mt-4 text-5xl font-black text-orange-500 sm:text-5xl">CUET Lost & Found</h1>
            <p className="mt-4 max-w-2xl text-xl font-bold text-white sm:text-xl">
              Report lost items, report found items, search existing reports, and help reunite belongings with their owners.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-500 px-5 py-3 text-lg font-bold backdrop-blur transition hover:bg-[#40E0D0]">Fast Report Filing</span>
              <span className="rounded-full bg-orange-500 px-5 py-3 text-lg font-bold backdrop-blur transition hover:bg-[#40E0D0]">Campus-Wide Matching</span>
              <span className="rounded-full bg-orange-500 px-5 py-3 text-lg font-bold backdrop-blur transition hover:bg-[#40E0D0]">Secure Verification</span>
            <span className="rounded-full bg-orange-500 px-5 py-3 text-lg font-bold backdrop-blur transition hover:bg-[#40E0D0]">Report lost & found </span>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-white/10 border border-white/20 p-5 backdrop-blur">
            <p className="text-2xl font-bold  text-blue-50">Today&apos;s updates</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-white/20 p-4">
                <p className="text-2xl font-black">4 new reports</p>
                <p className="text-lg text-blue-50">Submitted in the last 24 hours</p>
              </div>
              <div className="rounded-2xl bg-white/20 p-4">
                <p className="text-2xl font-black">2 possible matches</p>
                <p className="text-lg text-blue-50">Auto-suggested by campus system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`rounded-[1.5rem] bg-gradient-to-br ${stat.className} p-6 text-black shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
          >
            <p className="text-xl font-bold   text-white/90">{stat.title}</p>
            <h3 className="mt-3 text-3xl font-black">{stat.value}</h3>
            <p className="mt-2 text-xl  font-medium text-white/90">{stat.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black text-[#1e3a8a]">Search & Filter</h2>
            <p className="mt-2 text-lg font-bold text-slate-600">Find an item quickly by name or category.</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by item name..."
              className="w-full rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-lg outline-none ring-0 focus:border-blue-500 md:min-w-[260px]"
            />
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-lg outline-none focus:border-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-[#ED3207] text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-orange-100'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

          <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-black text-[#1e3a8a]">Active Lost Items</h2>
              <p className="mt-1 text-lg font-bold text-slate-600">Current requests awaiting a safe return.</p>
            </div>
            <span className="rounded-full bg-orange-100 px-3 py-2 text-sm font-semibold text-[#ED3207]">{filteredLostItems.length} visible</span>
          </div>

          <div className="mt-6 grid gap-4">
            {filteredLostItems.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-amber-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-[#111827]">💳 {item.title}</h3>
                    <p className="mt-1 text-lg text-slate-600">Owner: {item.owner}</p>
                  </div>
                  <span className="rounded-full bg-orange-600 px-4 py-2 text-lg font-semibold text-white">{item.badge}</span>
                </div>
                <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  <p><span className="font-semibold">Lost Location:</span> {item.location}</p>
                  <p><span className="font-semibold">Lost Date:</span> {item.date}</p>
                  <p><span className="font-semibold">Contact:</span> {item.contact}</p>
                  <p><span className="font-semibold">Status:</span> {item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-black text-[#1e3a8a]">Active Found Items</h2>
              <p className="mt-1 text-lg font-bold text-slate-600">Items handed over to campus support.</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-lg font-semibold text-emerald-700">{foundItemsData.length} visible</span>
          </div>

          <div className="mt-6 grid gap-4">
            {foundItemsData.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-[#111827]">🎒 {item.title}</h3>
                    <p className="mt-1 text-lg text-slate-600">Found at the campus location below.</p>
                  </div>
                  <span className="rounded-full bg-emerald-600 px-4 py-2 text-lg font-semibold text-white">{item.badge}</span>
                </div>
                <div className="mt-4 grid gap-2  text-slate-700 sm:grid-cols-2">
                  <p><span className="font-semibold">Found Location:</span> {item.location}</p>
                  <p><span className="font-semibold">Found Date:</span> {item.date}</p>
                  <p><span className="font-semibold">Finder Contact:</span> {item.contact}</p>
                  <p><span className="font-semibold">Status:</span> {item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-orange-100 p-3 text-2xl">🧾</div>
            <div>
              <h2 className="text-3xl font-black text-[#1e3a8a]">Report Lost Item</h2>
              <p className="text-lg font-bold text-slate-600">Share details to help the campus community spot your missing item.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Item Name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-500" placeholder="e.g. Student ID Card" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Category
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-500">
                {categories.filter((category) => category !== 'All').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Lost Location
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-500" placeholder="Library, CSE Building..." />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Lost Date
              <input type="date" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-500" />
            </label>
            <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
              Description
              <textarea className="mt-2 min-h-[90px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-500" placeholder="Add a short description of the item and key features." />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Contact Number
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-500" placeholder="01XXXXXXXXX" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Reward (Optional)
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-500" placeholder="Tk 500" />
            </label>
            <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
              Upload Photo
              <input type="file" className="mt-2 w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500" />
            </label>
          </div>

          <button className="mt-6 rounded-full bg-[#ED3207] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600">
            Report Lost Item
          </button>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-100 p-3 text-2xl">🧭</div>
            <div>
              <h2 className="text-3xl font-black text-[#1e3a8a]">Report Found Item</h2>
              <p className="text-lg font-bold text-slate-600">Help the owner by sharing what you found and where you found it.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Item Name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="e.g. Backpack" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Category
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500">
                {categories.filter((category) => category !== 'All').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Found Location
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Hall, Gate, Lab..." />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Found Date
              <input type="date" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500" />
            </label>
            <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
              Description
              <textarea className="mt-2 min-h-[90px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="Mention color, brand, and any identifying marks." />
            </label>
            <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
              Finder Contact Number
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-emerald-500" placeholder="01XXXXXXXXX" />
            </label>
            <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
              Upload Photo
              <input type="file" className="mt-2 w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500" />
            </label>
          </div>

          <button className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-700">
            Report Found Item
          </button>
        </div>
      </section>

      

      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
        <h2 className="text-3xl font-black text-[#1e3a8a]">Recently Returned Items</h2>
        <p className="mt-2 text-lg font-bold text-slate-600">These items were successfully matched and handed back.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {returnedItems.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex items-center gap-2 text-lg font-black text-emerald-700">
                <span>✅</span>
                <span>{item.title}</span>
              </div>
              <p className="mt-3 text-lg text-slate-600">Date: {item.date}</p>
              <p className="mt-2 text-lg font-semibold text-emerald-700">{item.status}</p>
            </div>
          ))}
        </div>
      </section>

      

      
    </div>
  );
};

export default LostAndFoundPage;
