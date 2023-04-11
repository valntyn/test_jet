/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, SetStateAction } from 'react';

import { Navigation } from '../Navigation';
import { MENU } from '../Sidebar/constants';

import './MobMenu.scss';

type PropTypes = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>
};

export const MobMenu: React.FC<PropTypes> = ({ setIsActive, isActive }) => {
  return (
    <div
      className={
        isActive
          ? 'mobmenu mobmenu--active'
          : 'mobmenu'
      }
      onClick={() => setIsActive(false)}
    >
      <div className="mobmenu__blur" />
      <div className="mobmenu__content">
        <div className="mobmenu__header">
          <Navigation items={MENU} />
        </div>
      </div>
    </div>
  );
};
