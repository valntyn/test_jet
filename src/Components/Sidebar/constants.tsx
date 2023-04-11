import { ReactComponent as Product } from '../../assets/3d-square 1.svg';
import { ReactComponent as Dashboard } from '../../assets/key-square.svg';
import { ReactComponent as Customers } from '../../assets/profile.svg';

export const MENU = [
  {
    text: 'Dashboard', icon: <Dashboard />, hasArrow: false, path: '/',
  },
  {
    text: 'Create a word', icon: <Product />, hasArrow: true, path: '/create',
  },
  {
    text: 'Repeat the words',
    icon: <Customers />,
    hasArrow: true,
    path: '/exercise',
  },
];
