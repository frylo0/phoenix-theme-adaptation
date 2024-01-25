import { style } from '@vanilla-extract/css';

const root = style({
	fontSize: '0.8rem',
	fontWeight: 600,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	color: 'rgb(49, 55, 74)',
	gap: 8,
});

const icon = style({
	width: 14,
	height: 14,
});

const value = style({
	fontWeight: 700,
});

export const s = {
	root,
	icon,
	value,
};
