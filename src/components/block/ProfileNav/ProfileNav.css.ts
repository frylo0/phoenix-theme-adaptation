import { style } from '@vanilla-extract/css';

const root = style({
	background: 'var(--phoenix-border-color)',
	display: 'flex',
	gap: 'var(--phoenix-border-width)',
	width: '100%',
	flexWrap: 'wrap',
});

const item = style({
	display: 'flex',
	flexDirection: 'column',
	width: 'calc(50% - 0.5px)',
	textAlign: 'center',
	padding: 10,
	background: 'var(--phoenix-body-bg)',
	color: 'inherit',
});
const icon = style({
	height: 16,
	width: '100%',
	marginBlockEnd: 8,
});
const label = style({});

export const s = {
	root,
	item,
	icon,
	label,
};
