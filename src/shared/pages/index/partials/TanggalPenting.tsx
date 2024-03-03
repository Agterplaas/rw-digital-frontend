import { PengumumanInterface } from '../interfaces';
import { Calendar } from 'primereact/calendar';
import dayjs from 'dayjs';

interface PropsInterface {
  items?: PengumumanInterface[];
}

function TanggalPenting({ items }: PropsInterface) {
  const dates = items?.map((item) => dayjs(item.date).toDate());

  return (
    <div className="h-full w-full p-10">
      <Calendar
        inline
        selectionMode="multiple"
        value={dates}
        nextIcon={<span>Next</span>}
        prevIcon={<span>Prev</span>}
        ptOptions={{ mergeProps: true }}
        pt={{
          root: { className: 'w-full h-full' },
          panel: { className: 'rounded-none' },
          title: { className: 'flex' },
          monthTitle: { className: 'order-2 hover:text-orange-600' },
          yearTitle: { className: 'hover:text-orange-600' },
          nextButton: { className: 'rounded-lg w-20 bg-orange-600 text-white p-5' },
          previousButton: { className: 'rounded-lg w-20 bg-orange-600 text-white p-5' },
          year: (event) => ({
            className: ['focus:shadow-[0_0_0_0.2rem_#fdba74]', event?.context.selected ? 'bg-orange-100/90' : '']
          }),
          month: (event) => ({
            className: ['focus:shadow-[0_0_0_0.2rem_#fdba74]', event?.context.selected ? 'bg-orange-100/90' : '']
          }),
          dayLabel: (event) => ({
            className: ['rounded-none !outline-0 !shadow-none', event?.context.selected ? 'bg-amber-400' : 'bg-transparent']
          })
        }}
      ></Calendar>
    </div>
  );
}

export default TanggalPenting;
