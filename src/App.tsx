import { APIOptions, PrimeReactProvider, addLocale } from 'primereact/api';
import locale from '@/shared/components/prime/locale';
import { RouterProvider } from 'react-router-dom';
import router from './routes/root';
import 'dayjs/locale/id';
import dayjs from 'dayjs';

function App() {
  // dayjs setup
  dayjs.locale('id');

  // prime setup
  addLocale('id', locale.id);
  const primeOptions: Partial<APIOptions> = {
    locale: 'id'
  };

  return (
    <>
      <PrimeReactProvider value={primeOptions}>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </>
  );
}

export default App;
