import './SidebarWrapper.scss';

type PropTypes = {
  children: React.ReactNode;
};

export const SidebarWrapper: React.FC<PropTypes> = ({ children }) => {
  return (
    <header className="sidebar-wrapper">
      {children}
    </header>
  );
};
