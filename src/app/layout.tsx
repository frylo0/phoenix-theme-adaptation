import { Metadata } from 'next';

import '@/styles/global-in-js.css';
import '@/styles/global-in-css.css';

import { SideMenu } from '@/components/block/SideMenu/SideMenu';
import { Footer } from '@/components/section/Footer/Footer';
import { Header } from '@/components/section/Header/Header';
import { WithClientAuth } from '@/lib/WithClientAuth';

export const metadata: Metadata = {
	title: `TypeScript starter for Next.js`,
	description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<WithClientAuth>
					<Header />

					<main className="two-cols">
						<SideMenu />
						{children}
					</main>

					<Footer />
				</WithClientAuth>
			</body>
		</html>
	);
}
