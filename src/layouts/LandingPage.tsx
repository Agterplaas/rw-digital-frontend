import React from 'react';
import Navbar from '@/shared/layouts/landingPage/components/Navbar';

type Props = {
  children?: React.ReactNode;
};

function LandingPage({ children }: Props) {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute top-24 h-[calc(100vh-6rem)] w-screen overflow-x-hidden">{children}</div>
    </div>
  );
}

export default LandingPage;
