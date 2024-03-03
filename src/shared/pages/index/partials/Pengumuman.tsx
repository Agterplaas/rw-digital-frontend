import dayjs from 'dayjs';
import { PengumumanInterface } from '../interfaces';

interface PropsInterface {
  items?: PengumumanInterface[];
}

function Pengumuman({ items }: PropsInterface) {
  return (
    <section className="flex h-full flex-col">
      <div className="flex h-full flex-1 flex-col gap-10 overflow-y-auto px-10 py-8">
        {items?.map(({ date, content }, index) => (
          <div key={index} className="flex flex-col gap-3">
            <p className="text-xl font-semibold text-red-600">{dayjs(date).format('dddd, DD MMMM YYYY')}</p>
            <p className="text-xl">{content}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-10 py-8">
        <button className="text-xl font-semibold text-red-700">{`<< Sebelumnya`}</button>
        <button className="text-xl font-semibold text-red-700">{`Selanjutnya >>`}</button>
      </div>
    </section>
  );
}

export default Pengumuman;
