import { FormForNewItem } from '../Form';
import './CreateBlock.scss';

export const CreateBlock = () => {
  return (
    <div className="create-block">
      <p className="create-block__desc">
        Here, you can add your new word to the vacabulary
      </p>
      <FormForNewItem />
    </div>
  );
};
