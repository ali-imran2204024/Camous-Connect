import { Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from '../../logo.png';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClubEventsPage from './pages/ClubEventsPage';
import ProgrammingContestPage from './pages/events/ProgrammingContestPage';
import WebDevelopmentWorkshopPage from './pages/events/WebDevelopmentWorkshopPage';
import HackathonPage from './pages/events/HackathonPage';
import TechSeminarPage from './pages/events/TechSeminarPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import EmergencyServicesPage from './pages/EmergencyServicesPage';
import PlaceholderPage from './pages/PlaceholderPage';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

function AppShell() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1f2937]">
      <header className="sticky top-0 z-20 border-b border-[#e5e7eb] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Campus Connect logo" className="h-12 w-13 rounded-full object-cover shadow" />
            <Link to="/" className="text-3xl font-black  text-[#1e3a8a] transition hover:text-orange-600">
              Campus Connect
            </Link>
          </div>
          <nav className="flex items-center gap-2 text-xl font-semibold text-blue-600">
            <Link to="/" className="rounded-full px-4 py-3 text-[#1e3a8a]  bg-orange-300 transition hover:bg-[#7CFC00] hover:bg-[#7CFC00]">Home</Link>
            <Link to="/about" className="rounded-full px-4 py-3 text-[#1e3a8a]  bg-orange-300 transition hover:bg-[#7CFC00] hover:bg-[#7CFC00]">About</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="rounded-full bg-[#10b981] px-4 py-2 text-white transition hover:bg-[#0f9f6f]">Dashboard</Link>
                <button onClick={logout} className="rounded-full border border-[#e5e7eb] px-4 py-2 text-[#1f2937] transition hover:bg-[#f8fafc]">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="rounded-full border border-[#e5e7eb] px-4 py-2 bg-orange-300 text-[#1f2937] transition hover:bg-[#7CFC00]">Login</Link>
                <Link to="/register" className="rounded-full border border-[#e5e7eb] px-4 py-2 bg-orange-300 text-[#1f2937] transition hover:bg-[#7CFC00]">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/club-events" element={<ClubEventsPage />} />
          <Route path="/emergency-services" element={<EmergencyServicesPage />} />
          <Route path="/national-events" element={<PlaceholderPage title="National & Inter-University Events" description="This module is being prepared. You will be able to explore competitions and collaboration opportunities here soon." />} />
          <Route path="/scholarships" element={<PlaceholderPage title="Scholarships & Research" description="Scholarship and research opportunities will appear here soon." />} />
          <Route path="/jobs" element={<PlaceholderPage title="Jobs & Internships" description="Career opportunities will be listed here soon." />} />
          <Route path="/blood-donation" element={<PlaceholderPage title="Blood Donation & Emergency Support" description="This page is being prepared for urgent support and donation requests." />} />
          <Route path="/lost-and-found" element={<PlaceholderPage title="Lost & Found" description="Lost and found items will be listed here soon." />} />
          <Route path="/news" element={<PlaceholderPage title="News & Updates" description="Latest campus updates will be displayed here soon." />} />
          <Route path="/transport" element={<PlaceholderPage title="Transport" description="Transport routes and schedules will be available here soon." />} />
          <Route path="/event/1" element={<ProgrammingContestPage />} />
          <Route path="/event/2" element={<WebDevelopmentWorkshopPage />} />
          <Route path="/event/3" element={<HackathonPage />} />
          <Route path="/event/4" element={<TechSeminarPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}

export default App;
