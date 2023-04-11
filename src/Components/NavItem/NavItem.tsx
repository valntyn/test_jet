import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { ItemsType } from '../../types/ItemsType';

import './NavItem.scss';

type PropTypes = {
  item: ItemsType;
};

export const NavItem: React.FC<PropTypes> = ({ item }) => {
  const {
    icon, text, hasArrow, path = '/a',
  } = item;

  return (
    <NavLink
      to={path}
      className={({ isActive }) => classNames('navitem navitem__dimension', {
        'navitem__dimension--active': isActive,
      })}
    >
      <div className="navitem__box">
        <div
          className="navitem__logo"
        >
          {icon}
        </div>
        <p
          className="navitem__text"
        >
          {text}
        </p>
      </div>
      {hasArrow
        && <ArrowRight className="navitem__arrow" />}
    </NavLink>
  );
};
