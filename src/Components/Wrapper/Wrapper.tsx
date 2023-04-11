import './Wrapper.scss';

type PropTypes = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<PropTypes> = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
};
