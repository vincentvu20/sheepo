import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components';

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
