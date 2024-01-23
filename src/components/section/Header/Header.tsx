import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import PNG_Logo from '@/assets/raster/logo.png';
import SVG_Menu from '@/assets/vector/menu-grid.svg';
import { s } from './Header.css';

interface HeaderProps {
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn(s.header, className)}>
			<div className={cn(s.logo)}>
				<Image src={PNG_Logo} alt="Logo" width={27} />
				<p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
			</div>
			<input
				className={cn(s.input, 'form-control search-input fuzzy-search rounded-pill form-control-sm')}
				type="search"
				placeholder="Search..."
				aria-label="Search"
			/>
			<div className={cn(s.features)}>
				<Link href="/" className={cn(s.menuButton)}>
					<SVG_Menu />
				</Link>
			</div>
		</header>
	);
};
