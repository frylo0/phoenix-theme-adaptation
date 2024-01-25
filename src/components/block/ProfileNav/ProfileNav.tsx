import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import SVG_Communities from '@/assets/vector/communities.svg?url';
import SVG_Events from '@/assets/vector/events.svg?url';
import SVG_Followers from '@/assets/vector/followers.svg?url';
import SVG_Games from '@/assets/vector/games.svg?url';
import SVG_MediaFiles from '@/assets/vector/media-files.svg?url';
import SVG_Settings from '@/assets/vector/settings.svg?url';
import { s } from './ProfileNav.css';

interface ProfileNavProps {
	className?: string;
}

export const ProfileNav: React.FC<ProfileNavProps> = ({ className }) => {
	return (
		<div className={cn(s.root, className)}>
			<Item icon={SVG_Followers} label="Followers" href="#!" />
			<Item icon={SVG_Communities} label="Communities" href="#!" />
			<Item icon={SVG_MediaFiles} label="Media files" href="#!" />
			<Item icon={SVG_Events} label="Events" href="#!" />
			<Item icon={SVG_Games} label="Games" href="#!" />
			<Item icon={SVG_Settings} label="Settings" href="#!" />
		</div>
	);
};

interface ItemProps {
	className?: string;
	icon: string;
	href: string;
	label: string;
}

const Item: React.FC<ItemProps> = ({ className = '', icon, href, label }) => {
	return (
		<Link className={cn(s.item, className)} href={href}>
			<Image className={cn(s.icon)} src={icon} alt={label} />
			<div className={cn(s.label)}>{label}</div>
		</Link>
	);
};
