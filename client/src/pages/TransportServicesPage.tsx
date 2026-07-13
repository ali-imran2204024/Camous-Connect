import React, { useMemo, useState } from 'react';
import {
  FaBell,
  FaBus,
  FaCheck,
  FaChevronRight,
  FaClock,
  FaCloudShowersHeavy,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoute,
  FaShieldAlt,
  FaSnowflake,
  FaStar,
  FaTools,
  FaTrafficLight,
  FaWifi,
} from 'react-icons/fa';

type AlertLevel = 'Critical' | 'Warning' | 'Information';
type BusStatus = 'Running' | 'Delayed' | 'Maintenance' | 'Cancelled';

type TransportAlert = {
  id: number;
  title: string;
  reason: string;
  level: AlertLevel;
};

type BusSnapshot = {
  id: number;
  name: string;
  status: BusStatus;
  location: string;
  nextStop: string;
  eta: string;
  capacity: number;
  occupancy: number;
  driver: string;
  contact: string;
  route: string[];
};

type ScheduleItem = {
  id: number;
  location: string;
  pickupTime: string;
  bus: string;
  period: 'Morning' | 'Afternoon';
};

type ContactItem = {
  id: number;
  title: string;
  phone: string;
  icon: typeof FaBus;
};

type NoticeItem = {
  id: number;
  title: string;
  description: string;
  time: string;
};

const transportAlerts: TransportAlert[] = [
  { id: 1, title: 'Bus-12 Cancelled Today', reason: 'Engine Failure', level: 'Critical' },
  { id: 2, title: 'Bahaddarhat Route Changed', reason: 'Flooding', level: 'Warning' },
  { id: 3, title: 'Bus-11 Delayed', reason: 'Traffic Jam', level: 'Information' },
];

const serviceStatus = [
  {
    id: 1,
    name: 'Bus-01',
    status: 'Running',
    location: 'Muradpur',
    nextStop: 'GEC',
    eta: '10 Min',
    occupancy: 42,
    capacity: 60,
  },
  {
    id: 2,
    name: 'Bus-02',
    status: 'Running',
    location: 'Main Gate',
    nextStop: 'WASA',
    eta: '12 Min',
    occupancy: 36,
    capacity: 60,
  },
  {
    id: 3,
    name: 'Bus-05',
    status: 'Maintenance',
    location: 'Depot',
    nextStop: 'Depot',
    eta: 'Pending',
    occupancy: 0,
    capacity: 60,
  },
  {
    id: 4,
    name: 'Bus-08',
    status: 'Delayed',
    location: 'Bayezid',
    nextStop: 'WASA',
    eta: '22 Min',
    occupancy: 28,
    capacity: 60,
  },
  {
    id: 5,
    name: 'Bus-12',
    status: 'Cancelled',
    location: 'Campus',
    nextStop: 'Campus',
    eta: 'Null',
    occupancy: 0,
    capacity: 60,
  },
  {
    id: 6,
    name: 'Bus-03',
    status: 'Running',
    location: 'GEC',
    nextStop: 'Muradpur',
    eta: '8 Min',
    occupancy: 31,
    capacity: 60,
  },
  {
    id: 7,
    name: 'Bus-07',
    status: 'Running',
    location: 'Bahaddarhat',
    nextStop: 'Campus',
    eta: '17 Min',
    occupancy: 40,
    capacity: 60,
  },
  {
    id: 8,
    name: 'Bus-11',
    status: 'Delayed',
    location: 'WASA',
    nextStop: 'GEC',
    eta: '18 Min',
    occupancy: 25,
    capacity: 60,
  },
];
const routeDirectory = [
  {
    id: 1,
    name: 'Bus-01',
    driver: 'Mr. Karim',
    contact: '01711111111',
    capacity: 60,
    route: [
      'Campus',
      'Muradpur',
      'GEC',
      'WASA',
      'Bahaddarhat',
      'Campus',
    ],
  },
  {
    id: 2,
    name: 'Bus-02',
    driver: 'Mr. Rahman',
    contact: '01722222222',
    capacity: 60,
    route: [
      'Campus',
      'Main Gate',
      'WASA',
      'Bahaddarhat',
      'New Market',
      'Campus',
    ],
  },
  {
    id: 3,
    name: 'Bus-03',
    driver: 'Mr. Hasan',
    contact: '01733333333',
    capacity: 60,
    route: [
      'Campus',
      'GEC',
      'Muradpur',
      'WASA',
      '2 No Gate',
      'Campus',
    ],
  },
  {
    id: 4,
    name: 'Bus-05',
    driver: 'Mr. Alam',
    contact: '01744444444',
    capacity: 60,
    route: [
      'Campus',
      'Muradpur',
      'Bayezid',
      'Oxygen',
      'Campus',
    ],
  },
  {
    id: 5,
    name: 'Bus-07',
    driver: 'Mr. Jalal',
    contact: '01755555555',
    capacity: 60,
    route: [
      'Campus',
      'Bahaddarhat',
      'Chandgaon',
      'Muradpur',
      'Campus',
    ],
  },
  {
    id: 6,
    name: 'Bus-08',
    driver: 'Mr. Akram',
    contact: '01766666666',
    capacity: 60,
    route: [
      'Campus',
      'Bayezid',
      'WASA',
      'Muradpur',
      'Campus',
    ],
  },
  {
    id: 7,
    name: 'Bus-11',
    driver: 'Mr. Noman',
    contact: '01777777777',
    capacity: 60,
    route: [
      'Campus',
      'WASA',
      'GEC',
      'Muradpur',
      'Campus',
    ],
  },
  {
    id: 8,
    name: 'Bus-12',
    driver: 'Mr. Sakib',
    contact: '01788888888',
    capacity: 60,
    route: [
      'Campus',
      'Sholoshahar',
      'GEC',
      'Bahaddarhat',
      'Campus',
    ],
  },
];

const scheduleItems: ScheduleItem[] = [
  { id: 1, location: 'Muradpur', pickupTime: '7:15 AM', bus: 'Bus-01', period: 'Morning' },
  { id: 2, location: 'GEC', pickupTime: '7:25 AM', bus: 'Bus-01', period: 'Morning' },
  { id: 3, location: 'Bahaddarhat', pickupTime: '7:40 AM', bus: 'Bus-01', period: 'Morning' },
  { id: 4, location: 'WASA', pickupTime: '1:25 PM', bus: 'Bus-04', period: 'Afternoon' },
  { id: 5, location: 'Swarighat', pickupTime: '1:40 PM', bus: 'Bus-04', period: 'Afternoon' },
  { id: 6, location: 'Sholoshah', pickupTime: '2:00 PM', bus: 'Bus-09', period: 'Afternoon' },
];

const searchOptions = [
  { id: 1, location: 'Muradpur', bus: 'Bus-01', time: '7:15 AM' },
  { id: 2, location: 'Muradpur', bus: 'Bus-04', time: '8:00 AM' },
  { id: 3, location: 'Muradpur', bus: 'Bus-09', time: '4:15 PM' },
  { id: 4, location: 'GEC', bus: 'Bus-01', time: '7:25 AM' },
  { id: 5, location: 'WASA', bus: 'Bus-04', time: '1:25 PM' },
];

const weatherAlerts = [
  { id: 1, title: 'Waterlogging at Bahaddarhat', detail: 'Alternate route activated until noon.', icon: FaCloudShowersHeavy, tone: 'bg-blue-50 text-blue-700' },
  { id: 2, title: 'Heavy Fog Warning', detail: 'Expect delays on the GEC corridor.', icon: FaSnowflake, tone: 'bg-sky-50 text-sky-700' },
  { id: 3, title: 'Road Construction at GEC', detail: 'Use the campus loop for the next 2 hours.', icon: FaExclamationTriangle, tone: 'bg-orange-50 text-orange-700' },
];

const notices: NoticeItem[] = [
  { id: 1, title: 'Winter Schedule Activated', description: 'Routes now follow the fog-safe timetable.', time: '11 Jul 2026' },
  { id: 2, title: 'New Route Added', description: 'A direct campus loop now connects WASA to Muradpur.', time: '08 Jul 2026' },
  { id: 3, title: 'Route Modified', description: 'Bahaddarhat service now avoids the flooded junction.', time: '05 Jul 2026' },
  { id: 4, title: 'Special Event Shuttle', description: 'Extra buses will operate after evening seminars.', time: '01 Jul 2026' },
];

const contacts: ContactItem[] = [
  { id: 1, title: 'Transport Office', phone: '017XXXXXXXX', icon: FaBus },
  { id: 2, title: 'Chief Driver', phone: '018XXXXXXXX', icon: FaShieldAlt },
  { id: 3, title: 'Maintenance Office', phone: '016XXXXXXXX', icon: FaTools },
  { id: 4, title: 'Security Office', phone: '015XXXXXXXX', icon: FaMapMarkerAlt },
  { id: 5, title: 'Emergency Driver', phone: '019XXXXXXXX', icon: FaPhoneAlt },
];

const stats = [
  { id: 1, label: 'Total Buses', value: '15', gradient: 'from-blue-600 to-sky-500' },
  { id: 2, label: 'Running', value: '12', gradient: 'from-emerald-500 to-teal-500' },
  { id: 3, label: 'Delayed', value: '2', gradient: 'from-amber-400 to-orange-400' },
  { id: 4, label: 'Maintenance', value: '1', gradient: 'from-red-500 to-rose-500' },
];

const notifications = [
  { id: 1, title: 'Bus-01 Left Campus', time: '7:10 AM' },
  { id: 2, title: 'Bus-07 Reached Muradpur', time: '7:35 AM' },
  { id: 3, title: 'Bus-12 Delayed', time: '8:00 AM' },
  { id: 4, title: 'Route Updated for Bahaddarhat', time: '8:20 AM' },
];

const getStatusTone = (status: BusStatus) => {
  switch (status) {
    case 'Running':
      return 'bg-emerald-500 text-white';
    case 'Delayed':
      return 'bg-amber-500 text-white';
    case 'Maintenance':
      return 'bg-red-500 text-white';
    case 'Cancelled':
      return 'bg-slate-700 text-white';
    default:
      return 'bg-slate-500 text-white';
  }
};

const getAlertTone = (level: AlertLevel) => {
  switch (level) {
    case 'Critical':
      return 'bg-red-500 text-white';
    case 'Warning':
      return 'bg-orange-500 text-white';
    default:
      return 'bg-blue-500 text-white';
  }
};

const TransportServicesPage = () => {
  const [query, setQuery] = useState('Muradpur');
  const [selectedLocation, setSelectedLocation] = useState('Muradpur');
  const [selectedBus, setSelectedBus] = useState('Bus-01');
  const [feedbackCategory, setFeedbackCategory] = useState('Bus Delay');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [copiedContact, setCopiedContact] = useState<number | null>(null);

  const favoriteBus = useMemo(
    () => ({
      name: 'Bus-07',
      location: 'North Gate',
      nextStop: 'Central Plaza',
      eta: '12 Min',
      status: 'Running' as BusStatus,
    }),
    [],
  );

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return searchOptions.filter((item) => item.location.toLowerCase().includes(normalized));
  }, [query]);

  const etaResult = useMemo(() => {
    const bus = serviceStatus.find((item) => item.name === selectedBus) ?? serviceStatus[0];
    return {
      bus: bus.name,
      location: bus.location,
      arrivalTime: bus.eta,
      waitTime: bus.status === 'Running' ? '7 Min' : 'Pending',
    };
  }, [selectedBus]);

  const liveBus = useMemo(() => serviceStatus.find((item) => item.name === selectedBus) ?? serviceStatus[0], [selectedBus]);

  const handleCopy = async (phone: string, id: number) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(phone);
        setCopiedContact(id);
        window.setTimeout(() => setCopiedContact(null), 1500);
      } catch {
        setCopiedContact(null);
      }
    }
  };

  const handleFeedbackSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!feedbackMessage.trim()) {
      setFeedbackSent(false);
      return;
    }
    setFeedbackSent(true);
    setFeedbackMessage('');
    setFeedbackCategory('Bus Delay');
  };

  return (
    <div className="space-y-12 px-2 py-8 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] bg-gradient-to-br from-sky-600 via-blue-700 to-orange-500 p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">
              <FaBus /> CUET Transport Services
            </p>
            <h1 className="text-4xl font-black sm:text-5xl">CUET Transport Services</h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold text-white/90 sm:text-xl">
              Track buses, schedules, route updates, transport notices, and future GPS tracking from one modern dashboard.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Live updates</p>
                <p className="mt-3 text-xl font-bold">Route changes, fog alerts, and traffic delays in one view.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Campus support</p>
                <p className="mt-3 text-xl font-bold">Reliable service visibility for daily student travel.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-sky-500 p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-sky-100">Live preview</p>
                  <p className="mt-3 text-3xl font-black">🚌 Smart shuttle tracker</p>
                </div>
                <div className="rounded-full bg-white/20 p-3">
                  <FaMapMarkerAlt size={22} />
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/15 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Routes</p>
                  <p className="mt-2 text-2xl font-black">15</p>
                </div>
                <div className="rounded-3xl bg-white/15 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Riders</p>
                  <p className="mt-2 text-2xl font-black">900+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {transportAlerts.map((alert) => (
          <div key={alert.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className={`inline-flex rounded-full px-4 py-2 text-lg font-bold ${getAlertTone(alert.level)}`}>
              {alert.level === 'Critical' ? '⚠️' : alert.level === 'Warning' ? '🚧' : 'ℹ️'} {alert.level}
            </div>
            <h2 className="mt-4 text-2xl font-black text-slate-900">{alert.title}</h2>
            <p className="mt-3 text-red-500 font-bold text-xl">Reason: {alert.reason}</p>
          </div>
        ))}
      </section>


      <section className="w-full">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-sm">
              <FaTrafficLight size={24} />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-500">Today&apos;s service status</p>
              <h2 className="text-3xl font-black text-slate-900">Live service overview</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceStatus.map((item) => (
              <div key={item.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{item.name}</h3>
                    <p className="text-lg text-black/80 font-bold">{item.location}</p>
                  </div>
                  <span className={`rounded-full px-3 py-2 text-sm font-semibold ${getStatusTone(item.status)}`}>{item.status}</span>
                </div>
                <div className="mt-4 grid gap-3 text-sm text-black/80 font-semibold">
                  <div className="rounded-2xl bg-orange-100 p-3">Next stop: {item.nextStop}</div>
                  <div className="rounded-2xl bg-blue-100 p-3">ETA: {item.eta}</div>
                  <div className="rounded-2xl bg-orange-100 p-3">Occupancy: {item.occupancy}/{item.capacity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </section>

   
      

        
    
<section className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg">
  <div className="mb-8">
    <h2 className="text-4xl font-black text-orange-600">
      Daily Route Directory of All Buses
    </h2>

    <p className="mt-2 text-lg font-bold text-slate-500">
      Explore all active CUET transport routes, drivers, capacities, and route stops.
    </p>
  </div>

  <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
    {routeDirectory.map((route) => (
      <div
        key={route.id}
        className="
          rounded-[1.5rem]
          border
          border-slate-200
          bg-slate-50
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
        "
      >
        <div className="flex items-center justify-between">
          <div>

            <h3 className="mt-2 text-3xl font-black text-slate-900">
              {route.name}
            </h3>
          </div>

          <span className="rounded-full bg-sky-100 px-3 py-2 text-lg font-bold text-sky-700">
            Capacity {route.capacity}
          </span>
        </div>

        <div className="mt-6 rounded-2xl bg-orange-100 p-4 shadow-sm">
          <p className="text-lg text-slate-500">
            Driver
          </p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            {route.driver}
          </p>

          <p className="mt-3 text-lg text-slate-500">
            Contact
          </p>

          <p className="mt-1 text-lg font-bold text-blue-700">
            {route.contact}
          </p>
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-lg font-bold text-slate-800">
            Route 
          </h4>

          <div className="flex flex-wrap items-center gap-2">
            {route.route.map((stop, index) => (
              <React.Fragment key={`${route.id}-${stop}`}>
                <span className="rounded-full bg-blue-200 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  {stop}
                </span>

                {index !== route.route.length - 1 && (
                  <FaChevronRight className="text-slate-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

     

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500 text-white shadow-sm">
              <FaTrafficLight size={24} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Student feedback</p>
              <h2 className="text-3xl font-black text-slate-900">Share a transport concern</h2>
            </div>
          </div>
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">
            <select
              value={feedbackCategory}
              onChange={(event) => setFeedbackCategory(event.target.value)}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option>Bus Delay</option>
              <option>Driver Behavior</option>
              <option>Schedule Issue</option>
              <option>Route Problem</option>
              <option>Overcrowding</option>
              <option>Cleanliness</option>
            </select>
            <textarea
              rows={5}
              value={feedbackMessage}
              onChange={(event) => setFeedbackMessage(event.target.value)}
              placeholder="Describe your feedback or complaint"
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <button type="submit" className="w-full rounded-full bg-blue-600 px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1">
              Submit feedback
            </button>
            {feedbackSent && <p className="text-sm font-semibold text-emerald-600">Thanks! Your feedback has been recorded.</p>}
          </form>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-sm">
              <FaRoute size={24} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Transport statistics</p>
              <h2 className="text-3xl font-black text-slate-900">Daily service snapshot</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {stats.map((item) => (
              <div key={item.id} className={`rounded-[1.5rem] bg-gradient-to-br ${item.gradient} p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
                <p className="text-sm uppercase tracking-[0.2em] text-white/80">{item.label}</p>
                <p className="mt-4 text-4xl font-black">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-700 via-sky-700 to-orange-500 p-8 text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-100">Smart transport future</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">🚀 GPS tracking coming soon</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/90">Live tracking, arrival prediction, push notifications, occupancy monitoring, and smart route suggestions will make student travel safer and easier.</p>
          </div>
          <div className="rounded-[1.5rem] bg-white/15 p-5 backdrop-blur">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <FaWifi /> Live tracking
            </div>
            <div className="mt-3 flex items-center gap-3 text-lg font-semibold">
              <FaClock /> Arrival prediction
            </div>
            <div className="mt-3 flex items-center gap-3 text-lg font-semibold">
              <FaBell /> Push notifications
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportServicesPage;
