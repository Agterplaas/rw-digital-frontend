import { BreadCrumb } from 'primereact/breadcrumb';
import { Icon } from '@iconify/react';
import { MenuItem } from 'primereact/menuitem';
import Navbar from '@/shared/layouts/landingPage/components/Navbar';
import Sidebar from '@/shared/layouts/adminPage/components/Sidebar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type PropsType = {
  children?: React.ReactNode;
};

const home: MenuItem = {
  icon: <Icon icon="ic:round-home" className="h-5 w-5" />,
  url: '/admin'
};

function AdminPage({ children }: PropsType) {
  const { pathname } = useLocation();

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const newPathname = pathname.split('/admin/')[1];

    newPathname.split('/').forEach((path) => {
      setMenuItems((menuItems) => [...menuItems, { label: path.split('-').join(' ') }]);
    });

    return () => {
      setMenuItems([]);
    };
  }, [pathname]);

  return (
    <div className="relative">
      <Navbar />
      <div className="absolute top-24 flex h-[calc(100vh-6rem)] w-screen gap-20 overflow-x-hidden pr-20">
        <Sidebar />
        <section className="flex w-full flex-col gap-5 py-4">
          <BreadCrumb
            model={menuItems}
            home={home}
            pt={{ root: { className: 'border-none' }, label: { className: 'capitalize' } }}
          />
          <div className="w-full rounded-md bg-base p-10">{children}</div>
        </section>
      </div>
    </div>
  );
}

export default AdminPage;
