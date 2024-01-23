import { style } from '@vanilla-extract/css';

const sideMenu = style({
	background: 'white',
	padding: '16px 8px',
	width: 253,
	minHeight: 'calc(100svh - 64px)',
	borderRight: '1px solid var(--phoenix-navbar-vertical-border-color)',
});

export const s = {
	sideMenu,
};
