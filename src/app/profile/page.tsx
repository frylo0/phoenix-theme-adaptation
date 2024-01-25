import cn from 'clsx';

import { ProfileAboutMe } from '@/components/block/ProfileAboutMe/ProfileAboutMe';
import { s } from './page.css';

export default function Home() {
	return (
		<main className={cn(s.main)}>
			<div className={cn(s.col, s.colLeft)}>
				<ProfileAboutMe />
			</div>
			<div className={cn(s.col, s.colRight)}></div>
		</main>
	);
}
