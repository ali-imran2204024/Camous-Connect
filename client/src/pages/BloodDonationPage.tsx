import React from 'react';

const emergencyRequests = [
  {
    id: 1,
    bloodGroup: 'O+',
    required: '2 Bags',
    patient: 'Abdur Rahman',
    hospital: 'Chattogram Medical College Hospital',
    deadline: 'Today 8:00 PM',
    contact: '017XXXXXXXX',
    status: 'Critical',
    badge: 'Critical',
    color: 'bg-red-500 text-white',
  },
  {
    id: 2,
    bloodGroup: 'B-',
    required: '1 Bag',
    patient: 'Samira Akter',
    hospital: 'Evercare Hospital',
    deadline: 'Today 10:30 PM',
    contact: '018XXXXXXXX',
    status: 'High',
    badge: 'High',
    color: 'bg-orange-500 text-white',
  },
  {
    id: 3,
    bloodGroup: 'AB+',
    required: '1 Bag',
    patient: 'Rony Mia',
    hospital: 'National Hospital',
    deadline: 'Today 9:45 PM',
    contact: '019XXXXXXXX',
    status: 'Normal',
    badge: 'Normal',
    color: 'bg-sky-500 text-white',
  },
];

const bloodAlerts = [
  { id: 1, label: 'New O+ Request', location: 'CMCH', time: '1 Hour Ago' },
  { id: 2, label: 'New B- Request', location: 'Evercare Hospital', time: '15 Minutes Ago' },
];

const bloodStats = [
  { group: 'O+', donors: 85, color: 'from-red-500 to-rose-500' },
  { group: 'A+', donors: 72, color: 'from-orange-400 to-red-400' },
  { group: 'B+', donors: 64, color: 'from-sky-500 to-blue-500' },
  { group: 'AB+', donors: 23, color: 'from-purple-500 to-fuchsia-500' },
  { group: 'O-', donors: 12, color: 'from-rose-600 to-red-600' },
  { group: 'B-', donors: 9, color: 'from-indigo-600 to-sky-600' },
  { group: 'A-', donors: 8, color: 'from-amber-500 to-orange-500' },
  { group: 'AB-', donors: 4, color: 'from-violet-600 to-fuchsia-600' },
];

const donors = [
  {
    id: 1,
    name: 'Ahmed Hasan',
    bloodGroup: 'A+',
    department: 'CSE',
    lastDonation: '3 Months Ago',
    contact: '018XXXXXXX1',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Sadia Karim',
    bloodGroup: 'O-',
    department: 'EEE',
    lastDonation: '5 Weeks Ago',
    contact: '018XXXXXXX2',
    status: 'Available',
  },
  {
    id: 3,
    name: 'Rifat Chowdhury',
    bloodGroup: 'B+',
    department: 'ME',
    lastDonation: '1 Month Ago',
    contact: '018XXXXXXX3',
    status: 'Busy',
  },
];

const leaderboard = [
  { id: 1, name: 'Ahmed Hasan', donations: 12, rank: '🥇', color: 'bg-red-500/10 border-red-500' },
  { id: 2, name: 'Rakib Ahmed', donations: 10, rank: '🥈', color: 'bg-orange-500/10 border-orange-500' },
  { id: 3, name: 'Nafis Hassan', donations: 8, rank: '🥉', color: 'bg-amber-500/10 border-amber-500' },
];

const activeRequests = [
  { id: 1, group: 'O+', bags: '2 Bags', place: 'CMCH', time: '1 Hour Ago', urgency: 1 },
  { id: 2, group: 'B-', bags: '1 Bag', place: 'Evercare', time: '15 Minutes Ago', urgency: 2 },
  { id: 3, group: 'AB+', bags: '1 Bag', place: 'National Hospital', time: '30 Minutes Ago', urgency: 3 },
];

const stories = [
  { id: 1, label: 'O+ Request Fulfilled', patient: 'Patient Received: 2 Bags', donors: 2, date: '10 July 2026' },
  { id: 2, label: 'A- Support Delivered', patient: 'Patient Received: 1 Bag', donors: 1, date: '08 July 2026' },
  { id: 3, label: 'B+ Emergency Closed', patient: 'Patient Received: 3 Bags', donors: 2, date: '05 July 2026' },
];

const partners = [
  'CUET Medical Center',
  'Chattogram Medical College Hospital',
  'National Hospital',
  'CSCR',
  'Evercare Hospital',
];

const BloodDonationPage = () => {
  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-red-600 via-red-700 to-[#7f1d1d] p-10 text-white shadow-2xl">
        <div className="max-w-5xl">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xl font-bold text- shadow-sm">
            Emergency Blood Donation & Support
          </p>
          <h1 className="text-5xl font-black sm:text-6xl">Blood Donation & Support</h1>
          <p className="mt-4 max-w-3xl text-xl font-semibold text-red-100/90">
            A platform for emergency blood requests, donor registration, donor search, and rapid community support.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <p className="text-lg  font-bold text-black">Fast Response</p>
              <p className="mt-3 text-2xl font-bold">Instant emergency visibility</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <p className="text-lg  font-bold text-black">Community Reach</p>
              <p className="mt-3 text-2xl font-bold">Connect requesters with donors quickly</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-black text-[#b91c1c]">Emergency Blood Requests</h2>
            <p className="mt-2 font-bold text-xl ">
              Urgent blood needs are surfaced first so donors can respond without delay.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {emergencyRequests.map((request) => (
            <div
              key={request.id}
              className="rounded-[1.75rem] border border-red-200/50 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="rounded-[1.75rem] bg-gradient-to-r from-red-500 to-red-700 p-6 text-white">
                <p className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xl font-bold ">
                  🚨 URGENT
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg  font-bold text-white-600">Blood Group</p>
                    <p className="mt-2 text-4xl font-black">{request.bloodGroup}</p>
                  </div>
                  <span className={`rounded-full px-4 py-2 text-lg font-bold ${request.color}`}>
                    {request.badge}
                  </span>
                </div>
              </div>

              <div className="space-y-3 p-6">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-lg  font-bold text-black">Required</p>
                  <p className="mt-2 text-xl font-bold text-red-500">{request.required}</p>
                </div>
                <div className="grid gap-4 rounded-3xl bg-red-50/80 p-4">
                  <div>
                    <p className="text-lg  font-semibold text-black">Patient :</p>
                    <p className="mt-2 text-xl font-bold text-red-500">{request.patient}</p>
                  </div>
                  <div>
                    <p className="text-lg  font-semibold text-black">Hospital:</p>
                    <p className="mt-2 text-xl font-bold text-red-500">{request.hospital}</p>
                  </div>
                  <div>
                    <p className="text-lg  font-semibold text-black">Required Before:</p>
                    <p className="mt-2 text-xl font-bold text-red-500">{request.deadline}</p>
                  </div>
                  <div>
                    <p className="text-lg  font-semibold text-black">Contact:</p>
                    <p className="mt-2 text-xl font-bold text-red-500">{request.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 :grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.75rem] border border-red-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-2xl text-white shadow-sm">
              🔔
            </span>
            <div>
              <h2 className="text-4xl font-black text-[#b91c1c]">Blood Alerts</h2>
              <p className="mt-2 text-xl text-black font-bold">Receive instant notifications when blood requests match your registered blood group.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {bloodAlerts.map((alert) => (
              <div key={alert.id} className="rounded-3xl border border-red-200/80 bg-red-50 p-5 transition-all duration-300 hover:bg-red-100">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-bold text-slate-900">{alert.label}</p>
                  <span className="rounded-full bg-red-500 px-4 py-2 text-lg font-semibold text-white">{alert.time}</span>
                </div>
                <p className="mt-3 text-lg font-bold text-slate-600">{alert.location}</p>
              </div>
            ))}
          </div>
        </div>

            <div className="rounded-[1.75rem] border border-red-100 bg-gradient-to-br from-red-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-red-500 text-2xl text-white flex items-center justify-center shadow-sm">🔎</div>
            <div>
              <h2 className="text-3xl font-black text-[#b91c1c]">Search Donors</h2>
              <p className="mt-2 text-black fot-bold text-lg">Filter donors by blood group, department, and availability.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <select className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100">
                <option>Blood Group</option>
                <option>O+</option>
                <option>A+</option>
                <option>B+</option>
                <option>AB+</option>
                <option>O-</option>
                <option>A-</option>
                <option>B-</option>
                <option>AB-</option>
              </select>
              <input type="text" placeholder="Department" className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
              <select className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100">
                <option>Availability</option>
                <option>Available</option>
                <option>Busy</option>
                <option>Not Available</option>
              </select>
            </div>
            <button type="button" className="w-full rounded-full bg-red-600 px-6 py-4 text-xl font-bold text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-1">
              Search
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {donors.map((donor) => (
              <div key={donor.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{donor.name}</p>
                    <p className="text-lg text-black font-bold">{donor.department}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-red-500 px-5 py-3 text-2xl font-bold text-white">{donor.bloodGroup}</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-3">
                    <p className="text-lg text-slate-500">Last Donation</p>
                    <p className="text-xl font-semibold text-slate-900">{donor.lastDonation}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3">
                    <p className="text-lg text-slate-500">Contact</p>
                    <p className="text-xl font-semibold text-slate-900">{donor.contact}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3">
                    <p className="text-lg text-slate-500">Status</p>
                    <p className="text-xl font-semibold text-slate-900">{donor.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="rounded-[1.75rem] border border-red-100 bg-gradient-to-br from-red-50 to-white p-8 shadow-lg">
          <h2 className="text-4xl font-black text-[#991b1b]">Blood Group Statistics</h2>
          <p className="mt-2 text-xl text-black font-bold">A snapshot of current registered donors by blood group.</p>

          <div className="mt-8 flex flex-col text-center items-center gap-6 lg:flex-row lg:items-start">
            <div className="relative h-56 w-56 rounded-full border-8 border-red-100 bg-white shadow-inner" style={{ background: 'conic-gradient(#ef4444 0 28%, #f97316 28% 46%, #3b82f6 46% 64%, #8b5cf6 64% 78%, #e11d48 78% 90%, #0f766e 90% 100%)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex  items-center justify-center rounded-full bg-white text-center text-sm font-bold text-slate-900 shadow-lg">
                 
                </div>
              </div>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2">
              {bloodStats.map((stat) => (
                <div key={stat.group} className={`rounded-3xl border border-red-100 bg-gradient-to-r ${stat.color} p-4 text-white shadow transition-all duration-300 hover:-translate-y-1`}>
                  <p className="text-4xl font-bold uppercase  text-black">{stat.group}</p>
                  <p className="mt-3 text-3xl font-black">{stat.donors}</p>
                  <p className="text-lg font-semibold">Donors</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 :grid-cols-1">
        <div className="rounded-[1.75rem] border border-red-100 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-red-500 text-2xl text-white flex items-center justify-center shadow-sm">+</div>
            <div>
              <h2 className="text-3xl font-black text-[#b91c1c]">Donor Registration</h2>
              <p className="mt-2 text-slate-600 text-lg font-bold">Become a registered donor and help the campus community respond faster.</p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 :grid-cols-2">
              <label className="space-y-2 text-lg font-semibold text-slate-700">
                Full Name
                <input type="text" className="w-full rounded-3xl border border-slate-200 bg-orange-200 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100" placeholder="Enter your name" />
              </label>
              <label className="space-y-2 text-lg font-semibold text-slate-700">
                Student ID
                <input type="text" className="w-full rounded-3xl border border-slate-200 bg-orange-200 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100" placeholder="2004xxxx" />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-lg font-semibold text-slate-700">
                Department
                <input type="text" className="w-full rounded-3xl border border-slate-200 bg-orange-200 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100" placeholder="CSE" />
              </label>
              <label className="space-y-2 text-lg font-semibold text-slate-700">
                Blood Group
                <select className="w-full rounded-3xl border border-slate-200 bg-orange-200  px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100">
                  <option>O+</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>AB+</option>
                  <option>O-</option>
                  <option>A-</option>
                  <option>B-</option>
                  <option>AB-</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-lg font-semibold text-slate-700">
                Phone Number
                <input type="tel" className="w-full rounded-3xl border border-slate-200 bg-orange-200 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100" placeholder="01XXXXXXXXX" />
              </label>
              <label className="space-y-2 text-lg font-semibold text-slate-700">
                Last Donation Date
                <input type="date" className="w-full rounded-3xl border border-slate-200 bg-orange-200 px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
              </label>
            </div>

           

            <label className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-red-300">
              <input type="checkbox" className="h-5 w-5 rounded-md border-slate-300 text-red-600 focus:ring-red-500" />
              I agree to be contacted for emergency blood requests.
            </label>

            <button type="button" className="w-full rounded-full bg-red-600 px-6 py-4 text-xl font-bold text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-1">
              Register as Donor
            </button>
          </form>
        </div>

        
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-red-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-red-500 text-2xl text-white flex items-center justify-center shadow-sm">⭐</div>
            <div>
              <h2 className="text-3xl font-black text-[#b91c1c]">Regular Donor Showcase</h2>
              <p className="mt-2 text-black font-bold">Highlighting frequent donors who keep the community ready.</p>
            </div>
          </div>

          <div className="space-y-4">
            {donors.map((donor) => (
              <div key={donor.id} className="rounded-3xl border border-slate-200 bg-red-50/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-red-500 text-xl font-black text-white">{donor.name.split(' ').map((part) => part[0]).join('')}</div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">{donor.name}</p>
                    <p className="text-sm font-semibold text-slate-500">{donor.department}</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-slate-500">Blood Group</p>
                    <p className="text-lg font-bold text-slate-900">{donor.bloodGroup}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-sm text-slate-500">Last Donation</p>
                    <p className="text-lg font-bold text-slate-900">{donor.lastDonation}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-sm text-slate-500">Contact: {donor.contact}</p>
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-700">{donor.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-red-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-red-500 text-2xl text-white flex items-center justify-center shadow-sm">🏆</div>
              <div>
                <h2 className="text-3xl font-black text-[#b91c1c]">Top Donors</h2>
                <p className="mt-2 text-black font-bold">A leaderboard of the most active campus donors.</p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {leaderboard.map((item) => (
                <div key={item.id} className={`rounded-3xl border ${item.color} bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-black">{item.rank} {item.name}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-500">{item.donations} Donations</p>
                    </div>
                    <div className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">Rank {item.id}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-red-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-red-500 text-2xl text-white flex items-center justify-center shadow-sm">📊</div>
              <div>
                <h2 className="text-3xl font-black text-[#b91c1c]">Active Request Board</h2>
                <p className="mt-2 text-black font-bold">Live dashboard view of active urgent blood requests.</p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              {activeRequests.sort((a, b) => a.urgency - b.urgency).map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 bg-red-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-red-100">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.group}</p>
                      <p className="mt-2 text-2xl font-black text-slate-900">{item.bags}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-500">{item.place}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 :grid-cols-2">
        <div className="rounded-[1.75rem] border border-red-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-red-500 text-2xl text-white flex items-center justify-center shadow-sm">✅</div>
            <div>
              <h2 className="text-3xl font-black text-[#b91c1c]">Blood Donation Eligibility Checker</h2>
              <p className="mt-2 font-bold text-slate-600">Check if you are ready to donate again based on your last donation date.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4 rounded-3xl border border-red-100 bg-red-50 p-6">
            <label className="space-y-2 text-lg font-bold text-slate-700">
              Last Donation Date
              <input type="date" className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100" />
            </label>
            <button type="button" className="w-full rounded-full bg-red-600 px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-1">
              Check Eligibility
            </button>
            <div className="rounded-3xl bg-white p-5 text-slate-900 shadow-sm">
              <p className="text-2xl font-bold text-green-600">✅ You are eligible to donate blood.</p>
              <p className="mt-2 text-black font-bold">Your last donation was more than 90 days ago. Campus Connect keeps donors ready for emergency support.</p>
            </div>
          </div>
        </div>

       
      </section>

     
    </div>
  );
};

export default BloodDonationPage;
