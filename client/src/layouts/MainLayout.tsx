import { Outlet } from 'react-router-dom';
import logo from '../logo.png';

const MainLayout = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <Outlet />
    </main>
  );
};

export default MainLayout;
