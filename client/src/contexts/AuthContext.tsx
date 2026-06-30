import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type UserRole = 'user' | 'admin';

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string, role?: UserRole) => void;
  register: (name: string, email: string, password: string, role: UserRole) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role: UserRole = 'user') => {
    if (!email || !password) return;
    setUser({
      id: 'demo-user',
      name: role === 'admin' ? 'Admin Demo' : 'Ayesha Rahman',
      email,
      role,
    });
  };

  const register = (name: string, email: string, password: string, role: UserRole) => {
    if (!name || !email || !password) return;
    setUser({ id: 'demo-user', name, email, role });
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, register, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
