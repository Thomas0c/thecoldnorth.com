import glamorous from 'glamorous';
import { Fonts, Colors } from '../config';

const Text = glamorous.p({
	fontSize: Fonts.smallSize,
	color: Colors.white,
	fontFamily: Fonts.body,
	fontWeight: 200,
	letterSpacing: 0.5,
	lineHeight: 1.8,
	'@media(max-width: 1024px)': {
		marginTop: '2rem',
	},
});

export default Text;
