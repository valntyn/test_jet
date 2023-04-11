import './TitleSidebar.scss';
import { ReactComponent as Logo } from '../../assets/setting 1.svg';

export const TitleSidebar = () => {
  return (
    <div className="titlesidebar">
      <Logo className="titlesidebar__logo" />
      <div className="titlesidebar__box">
        <h2 className="titlesidebar__name">List of Words</h2>
        <p className="titlesidebar__version">v.01</p>
      </div>
    </div>
  );
};
