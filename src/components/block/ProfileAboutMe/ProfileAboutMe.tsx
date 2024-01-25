import cn from 'clsx';
import Image from 'next/image';

import WEBP_Avatar from '@/assets/raster/profile-avatar.webp';
import PNG_Background from '@/assets/raster/profile-background.png';
import SVG_Followers from '@/assets/vector/followers.svg?url';
import SVG_Following from '@/assets/vector/following.svg?url';
import { Counter } from './Counter/Counter';
import { s } from './ProfileAboutMe.css';

interface ProfileAboutMeProps {
	className?: string;
}

export const ProfileAboutMe: React.FC<ProfileAboutMeProps> = ({ className }) => {
	return (
		<div className={cn(s.root, className)}>
			<div className={cn(s.background)}>
				<Image src={PNG_Background} alt="Profile Background" fill />
			</div>
			<div className={cn(s.content)}>
				<div className={cn(s.avatar)}>
					<Image className={cn(s.avatarImage)} src={WEBP_Avatar} alt="Avatar" fill />
					<div className={cn(s.online)} />
				</div>

				<div className={cn(s.heading)}>
					<h1 className={cn(s.fullName)}>Ansolo Lazinatov</h1>
					<small className={cn(s.username)}>u/hansolo</small>
				</div>

				<div className={cn(s.metaInfo)}>
					<Counter icon={SVG_Followers} value={1_297} label="Followers" />
					<Counter icon={SVG_Following} value={3_971} label="Following" />
				</div>

				<div className={cn(s.annotation)}>
					“Le capitalisme exploite. Et le capitalisme exploite les gens de couleur. Comme il exploite les hommes. Ou
					comme il exploite les femmes.”
				</div>
			</div>
		</div>
	);
};
