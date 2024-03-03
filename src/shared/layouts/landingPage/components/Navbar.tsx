import logo from '/logo/svg/rukun_warga_logo.svg';
import { NavLink } from 'react-router-dom';

interface NavbarItemsInterface {
  name: string;
  path: string;
}

const navbarItems: NavbarItemsInterface[] = [
  {
    name: 'Beranda',
    path: '/'
  },
  {
    name: 'Organisasi',
    path: '/organisasi'
  },
  {
    name: 'FAQ',
    path: '/faq'
  },
  {
    name: 'Login',
    path: '/login'
  }
];

function Navbar() {
  return (
    <div className="fixed top-0 z-[9999] flex h-24 w-full items-center justify-between bg-gray-50 px-5 py-1">
      <section className="flex items-center gap-4">
        <div className="flex h-full items-center after:ml-4 after:block after:h-[60px] after:w-[2px] after:bg-neutral-500">
          <img src={logo} alt="rukun warga logo" className="w-[74px]" />
        </div>
        <h1 className="text-xl font-bold text-neutral-600">Rukun Warga 12</h1>
      </section>
      <section className="flex gap-10">
        {navbarItems.map(({ name, path }, index) => (
          <div key={index}>
            <NavLink
              to={path}
              className={({ isActive }) => `${isActive ? 'text-red-700' : 'text-neutral-700'} text-xl font-semibold`}
            >
              {name}
            </NavLink>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Navbar;
