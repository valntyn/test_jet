import { useState } from 'react';

import { ReactComponent as Menu } from '../../assets/menu-svg.svg';
import { ExerciseBlock } from '../../Components/ExersiceBlock';
import { MainWrapper } from '../../Components/MainWrapper';
import { MobMenu } from '../../Components/MobMenu';

import './ExercisePage.scss';

export const ExercisePage = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <MainWrapper>
      <div className="exersice">
        <div className="exersice__box">
          <h1 className="exersice__title">Here, we will study</h1>
          <button
            type="button"
            className="main__button"
            onClick={() => setIsActive(!isActive)}
          >
            <Menu className="main__menu" />
          </button>
        </div>
        <ExerciseBlock />
        {isActive && <MobMenu isActive={isActive} setIsActive={setIsActive} />}
      </div>
    </MainWrapper>
  );
};
