import { useMemo, useState } from 'react';

import { useAppSelector } from '../../app/hooks';
import { Quiz } from '../Quiz/Quiz';
import './ExerciseBlock.scss';

export const ExerciseBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { score } = useAppSelector((state) => state.score);

  const averagePercent = useMemo(() => {
    return score.reduce((a, b) => a + b * 10, 0) / score.length;
  }, [score]);

  return (
    <div className="exercise-block">
      <p className="exercise-block__desc">
        Hello, here you can test your knowledge of the learned words. Here you
        need to choose the correct translation from English
      </p>
      {!isOpen && (
        <button
          type="button"
          className="exercise-block__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Start the exercise
        </button>
      )}
      {isOpen && <Quiz />}
      <p className="exercise-block__result">
        {score.length
          ? `Your average result ${averagePercent.toFixed()}%`
          : 'Try to calculate your average result'}
      </p>
    </div>
  );
};
