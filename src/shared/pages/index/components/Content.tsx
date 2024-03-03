import { MenuItem } from 'primereact/menuitem';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import { PengumumanInterface } from '../interfaces';
import Pengumuman from '../partials/Pengumuman';
import TanggalPenting from '../partials/TanggalPenting';

const pengumumanItems: PengumumanInterface[] = [
  {
    date: '03/04/2024',
    content: `It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed`
  },
  {
    date: '03/19/2024',
    content: `It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed`
  },
  {
    date: '03/24/2024',
    content: `It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed`
  }
];

const menuItems: MenuItem[] = [{ label: 'PENGUMUMAN' }, { label: 'TANGGAL PENTING' }];

function Content() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="grid h-[539px] w-5/6 grid-cols-2 grid-rows-1 bg-red-800">
      <div className="flex flex-col justify-center p-5 text-white">
        <h1 className="text-[40px] font-semibold uppercase">Rw - Digital</h1>
        <div className="text-xl font-semibold">
          <p>Selamat Datang di sistem website RW-Digital.</p>
          <p>Aplikasi ini menyediakan informasi seputar lingkungan Rukun Warga 12</p>
        </div>
      </div>
      <div className="flex h-full flex-col bg-white">
        <TabMenu
          model={menuItems}
          activeIndex={activeIndex}
          ptOptions={{ mergeProps: true }}
          pt={{
            menu: { className: 'grid grid-cols-2' },
            action: (event) => ({
              className: [
                'justify-center border-0 rounded-none',
                event?.props.activeIndex === event?.context.index ? 'bg-white text-black' : 'bg-stone-500 text-white'
              ]
            })
          }}
          onTabChange={(e) => setActiveIndex(e.index)}
        />
        <div className="h-full flex-1 overflow-hidden">
          {activeIndex === 0 ? <Pengumuman items={pengumumanItems} /> : <TanggalPenting items={pengumumanItems} />}
        </div>
      </div>
    </section>
  );
}

export default Content;
