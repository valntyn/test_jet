import { MENU } from './constants';
import { Navigation } from '../Navigation';
import { SidebarFooter } from '../SidebarFooter';
import { SidebarWrapper } from '../SidebarWrapper';
import { TitleSidebar } from '../TitleSidebar';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="sidebar">
        <TitleSidebar />
        <nav>
          <Navigation items={MENU} />
        </nav>
      </div>
      <SidebarFooter />
    </SidebarWrapper>
  );
};
