import cn from 'clsx';

import { s } from './SideMenu.css';

interface SideMenuProps extends React.PropsWithChildren {
	className?: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ className, children }) => {
	return <aside className={cn(s.sideMenu, className)}>{children}</aside>;
};
