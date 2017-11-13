import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

const snowMovement = css.keyframes({
	'0%': { backgroundPosition: '0px 0px, 0px 0px, 0px 0px' },
	'50%': { backgroundPosition: '500px 500px, 100px 200px, -100px 150px' },
	'100%': { backgroundPosition: '500px 1000px, 200px 400px, -100px 300px' }
});

const Snow = glamorous.div({
	background: 'none',
	backgroundImage: 'url("./static/snow.png"), url("./static/snow2.png")',
	opacity: 0.15,
	height: '100%',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 0,
	animation: `${snowMovement} 180s linear infinite`,
	'@media(max-device-width: 1024px)': {
		opacity: 0.5
	}
});

export default () => <Snow />;
