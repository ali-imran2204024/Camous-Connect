import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, type UserRole } from '../../contexts/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(name, email, password, role);
    navigate('/dashboard');
  };

  return (
    <div className="mx-auto flex min-h-[75vh] max-w-4xl items-center justify-center px-4 py-4">
      <div className="w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_-24px_rgba(15,23,42,0.35)]">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#10b981] p-8 text-white sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_45%)]" />
          <div className="relative">
            <div className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">Join the community</div>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Create your Campus Connect account</h2>
            <p className="mt-3 max-w-lg text-base text-purple-100 sm:text-lg">Open the door to student opportunities, support services, and campus updates with a smooth registration flow.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-50 p-8 sm:p-10">
          <div>
            <h3 className="text-3xl font-black tracking-tight text-[#1f2937]">Register</h3>
            <p className="mt-2 text-sm text-[#6b7280]">Set up your account to get started.</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#1f2937]">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-2xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#dbeafe]" placeholder="Ayesha Rahman" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#1f2937]">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#dbeafe]" placeholder="you@example.com" />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-[#1f2937]">Password</label>
              <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="text-sm font-medium text-[#1e3a8a] transition hover:text-[#142a5e]">
                {showPassword ? <FaEyeSlash className="inline" /> : <FaEye className="inline" />} {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#1f2937] shadow-sm outline-none transition focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#dbeafe]" placeholder="••••••••" />
          </div>

          <button className="w-full rounded-2xl bg-[#10b981] px-4 py-3 font-semibold text-white shadow-lg shadow-[#10b981]/20 transition hover:bg-[#0f9f6f]">Create Account</button>

          <p className="text-sm text-[#6b7280]">
            Already have an account? <Link to="/login" className="font-semibold text-[#1e3a8a]">Log in now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
