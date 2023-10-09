import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components';

export const MainLayout = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
