import cn from 'clsx';

import { s } from './Footer.css';

interface FooterProps extends React.PropsWithChildren {
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className, children }) => {
	return <footer className={cn(s.footer, className)}>{children}</footer>;
};
