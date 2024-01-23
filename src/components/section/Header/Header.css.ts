import { style } from '@vanilla-extract/css';

const header = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: '0 40px',
	alignItems: 'center',
	background: 'white',
	borderBottom: '1px solid var(--phoenix-navbar-vertical-border-color)',
	height: 64,
});

const input = style({
	width: '400px !important',
});

const features = style({});

const logo = style({
	display: 'flex',
	flexDirection: 'row',
});

const menuButton = style({
	color: 'var(--phoenix-nav-link-color)',
});

export const s = {
	header,
	features,
	logo,
	input,
	menuButton,
};
