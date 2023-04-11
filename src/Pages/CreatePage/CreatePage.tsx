import { useState } from 'react';

import { ReactComponent as Menu } from '../../assets/menu-svg.svg';
import { CreateBlock } from '../../Components/CreateBlock';
import { MainWrapper } from '../../Components/MainWrapper';
import { MobMenu } from '../../Components/MobMenu';

import './CreatePage.scss';

export const CreatePage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <MainWrapper>
      <div className="create-page">
        <div className="create-page__box">
          <h1 className="create-page__title"> Here, we will create words </h1>
          <button
            type="button"
            className="main__button"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu className="main__menu" />
          </button>
        </div>
        <CreateBlock />
      </div>
      {isActive && <MobMenu isActive={isActive} setIsActive={setIsActive} />}
    </MainWrapper>
  );
};
