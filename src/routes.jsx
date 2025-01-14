import { Homepage } from './components/Homepage/Homepage.jsx';
import { Storefront } from './components/Storefront/Storefront.jsx';

const routes = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/storefront',
    element: <Storefront />,
  }
];

export { routes };
