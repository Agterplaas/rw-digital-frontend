import LandingPage from '@/layouts/LandingPage';
import Content from '@/shared/pages/index/components/Content';
import Statistic from '@/shared/pages/index/components/Statistic';

function Index() {
  return (
    <LandingPage>
      <div className="flex h-full w-full items-center justify-center bg-red-700">
        <Content />
      </div>
      <div className="flex h-full w-full items-center justify-center bg-[#FF5E2B]">
        <Statistic />
      </div>
    </LandingPage>
  );
}

export default Index;
