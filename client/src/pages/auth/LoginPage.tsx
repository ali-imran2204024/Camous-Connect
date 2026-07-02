import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, type UserRole } from '../../contexts/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] py-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center gap-6 rounded-[2rem] bg-white/95 p-8 shadow-xl ring-1 ring-slate-200 lg:p-12">
          <div className="inline-flex rounded-full border border-[#1e3a8a] bg-[#eff6ff] px-4 py-2 text-sm font-semibold text-[#1e3a8a]">
            Secure campus access
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight text-[#1e3a8a] sm:text-5xl">Welcome back to Campus Connect</h1>
            <p className="mt-4 text-lg text-slate-600 sm:text-xl">Access welfare services, campus opportunities, and campus updates from a single student hub.</p>
          </div>
          <div className="grid gap-4 rounded-[1.75rem] bg-[#1e3a8a] p-6 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#bfdbfe]">Student experience</p>
            <p className="text-xl font-semibold leading-relaxed">One secure login brings you closer to campus support, events, scholarship access, and transport updates.</p>
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950/5 p-2">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80" alt="Campus life illustration" className="h-64 w-full rounded-[1.5rem] object-cover shadow-xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-3xl font-black tracking-tight text-[#1f2937]">Log In</h3>
                <p className="mt-2 text-sm text-[#6b7280]">Use your email and password to continue.</p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f2937]">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-3xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#dbeafe]"
                  placeholder="student@campus.edu"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-medium text-[#1f2937]">Password</label>
                  <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-sm font-medium text-[#1e3a8a] transition hover:text-[#142a5e]">
                    {showPassword ? <FaEyeSlash className="inline" /> : <FaEye className="inline" />} {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-3xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#dbeafe]"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f2937]">Role</label>
                <select
                  title="Select user role"
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full rounded-3xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#dbeafe]"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="font-medium text-[#1e3a8a] transition hover:text-[#142a5e]">Forgot password?</a>
              </div>

              <button className="w-full rounded-3xl bg-gradient-to-r from-[#1e3a8a] to-[#10b981] px-4 py-3 font-semibold text-white shadow-lg shadow-[#1e3a8a]/20 transition hover:from-[#142a5e] hover:to-[#0f9f6f]">Log In</button>

              <p className="text-sm text-[#6b7280]">
                Don’t have an account? <Link to="/register" className="font-semibold text-[#1e3a8a]">Register now</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
