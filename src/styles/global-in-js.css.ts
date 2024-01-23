import { globalStyle } from '@vanilla-extract/css';

import { fonts } from './bundle.css';

globalStyle('html', {
	fontSize: '12px',
	background: 'var(--phoenix-body-bg)',
	fontFamily: fonts.gothamPro,
	fontWeight: 'normal',
});
