import { ItemsType } from '../../types/ItemsType';
import { NavItem } from '../NavItem';
import './Navigation.scss';

type PropTypes = {
  items: ItemsType[]
};

export const Navigation: React.FC<PropTypes> = ({ items }) => {
  return (
    <ul className="navigation">
      {items.map(item => (
        <NavItem item={item} />
      ))}
    </ul>
  );
};
