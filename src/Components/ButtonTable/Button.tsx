import classNames from 'classnames';

import './Button.scss';
import { Words } from '../../types/wordsType';

type PropTypes = {
  word: Words;
  onChange: (word: Words) => void;
  status: boolean;
  children: React.ReactNode;
};

export const Button: React.FC<PropTypes> = ({
  word,
  onChange,
  children = '',
  status = false,
}) => {
  return (
    <button
      type="button"
      onClick={() => onChange(word)}
      className={classNames('button', {
        'button--active': status,
      })}
    >
      {children}
    </button>
  );
};
