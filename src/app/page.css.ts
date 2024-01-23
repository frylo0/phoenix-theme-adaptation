import { style } from '@vanilla-extract/css';

const main = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '6rem',
	minHeight: '100vh',
	color: 'white',
});

export const s = {
	main,
};
