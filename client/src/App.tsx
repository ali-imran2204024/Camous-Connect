import { Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from '../../logo.png';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/DashboardPage';
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
            <img src={logo} alt="Campus Connect logo" className="h-10 w-10 rounded-full object-cover shadow" />
            <Link to="/" className="text-xl font-black tracking-tight text-[#1e3a8a] transition hover:text-[#142a5e]">
              Campus Connect
            </Link>
          </div>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="rounded-full px-3 py-2 text-[#6b7280] transition hover:bg-[#f8fafc] hover:text-[#1f2937]">Home</Link>
            <Link to="/about" className="rounded-full px-3 py-2 text-[#6b7280] transition hover:bg-[#f8fafc] hover:text-[#1f2937]">About</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="rounded-full bg-[#10b981] px-4 py-2 text-white transition hover:bg-[#0f9f6f]">Dashboard</Link>
                <button onClick={logout} className="rounded-full border border-[#e5e7eb] px-4 py-2 text-[#1f2937] transition hover:bg-[#f8fafc]">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="rounded-full border border-[#e5e7eb] px-4 py-2 text-[#1f2937] transition hover:bg-[#f8fafc]">Login</Link>
                <Link to="/register" className="rounded-full border border-[#e5e7eb] px-4 py-2 text-[#1f2937] transition hover:bg-[#f8fafc]">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        </Routes>
      </main>
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
