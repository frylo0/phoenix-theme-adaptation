import cn from 'clsx';
import Link from 'next/link';

import { s } from './page.css';

export default function Page() {
	return (
		<main className={cn(s.main)}>
			Main page
			<p>
				<Link href="/profile">Profile page</Link>
			</p>
		</main>
	);
}
