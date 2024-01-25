import { style } from '@vanilla-extract/css';

import { layout } from '@/styles/bundle.css';

const sideMenu = style({
	background: 'white',
	padding: '16px 8px',
	width: layout.sideMenuWidth,
	minHeight: 'calc(100svh - 64px)',
	borderRight: '1px solid var(--phoenix-navbar-vertical-border-color)',
});

export const s = {
	sideMenu,
};
