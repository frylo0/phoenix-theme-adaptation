import { style } from '@vanilla-extract/css';

import { layout } from '@/styles/bundle.css';

const spacing = '40px';

const main = style({
	display: 'flex',
	flexDirection: 'row',
	width: `calc(100% - ${layout.sideMenuWidth}px - ${spacing} * 3)`,
	margin: spacing,
	gap: spacing,
});

const col = style({
	display: 'flex',
	flexDirection: 'column',
});

const colLeft = style({
	width: 'calc(100% * 1 / 3)',
});

const colRight = style({
	width: 'calc(100% * 2 / 3)',
});

export const s = {
	main,
	col,
	colLeft,
	colRight,
};
