import { style } from '@vanilla-extract/css';

const root = style({
	border: 'var(--phoenix-card-border-width) solid var(--phoenix-card-border-color)',
	background: 'var(--phoenix-card-bg)',
	borderRadius: 'var(--phoenix-card-border-radius)',
	width: '100%',
	overflow: 'hidden',
	marginBlockEnd: 32,
});

const background = style({
	width: '100%',
	position: 'relative',
	height: 128,

	'::after': {
		content: '',
		position: 'absolute',
		inset: '0',
		background: 'linear-gradient(0deg, #000000 -3%, rgba(0, 0, 0, 0) 83%)',
	},
});

const content = style({
	display: 'flex',
	flexDirection: 'column',
	padding: 24,
	paddingBlockStart: 24 + 96 / 2,
	position: 'relative',
	gap: '1em',
});

const avatar = style({
	width: 96,
	height: 96,
	position: 'absolute',
	borderRadius: '50%',
	border: '3px solid white',
	boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,.075)',
	top: 0,
	transform: 'translateY(-50%)',
});

const avatarImage = style({
	borderRadius: '50%',
});

const online = style({
	border: '3px solid var(--phoenix-avatar-status-border-color)',
	height: '24px',
	width: '24px',
	backgroundColor: 'var(--phoenix-success)',
	position: 'absolute',
	bottom: 0,
	right: 0,
	borderRadius: '50%',
});

const heading = style({
	display: 'flex',
	flexDirection: 'row',
	gap: '0.5rem',
	alignItems: 'baseline',
});

const fullName = style({
	fontWeight: 800,
	fontSize: '1.5em',
});

const username = style({
	fontWeight: 400,
	fontSize: '1em',
});

const metaInfo = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 24,
});

const annotation = style({});

export const s = {
	root,
	background,
	content,
	avatar,
	avatarImage,
	online,
	heading,
	fullName,
	username,
	metaInfo,
	annotation,
};
