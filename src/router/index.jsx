import { createBrowserRouter } from 'react-router-dom'
import WargaIndex from '../pages/warga/Index';

const routes = [
    {
        path: '/warga',
        element: <WargaIndex/>
    }
];

const router = createBrowserRouter(routes);

export default router;