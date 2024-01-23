import { style } from '@vanilla-extract/css';

const main = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1em',
	color: 'white',
});

export const s = {
	main,
};
