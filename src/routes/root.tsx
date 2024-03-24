import { createBrowserRouter } from 'react-router-dom';

// pages
import Index from '@/pages/Index';
import KelolaData from '@/pages/admin/manajemen-warga/KelolaData';

const route = createBrowserRouter([
  {
    index: true,
    element: <Index />
  },
  {
    path: '/admin/manajemen-warga/kelola-data',
    element: <KelolaData />
  }
]);

export default route;
