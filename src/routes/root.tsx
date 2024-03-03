import { createBrowserRouter } from 'react-router-dom';

// pages
import Index from '@/pages/Index';

const route = createBrowserRouter([
  {
    index: true,
    element: <Index />
  }
]);

export default route;
