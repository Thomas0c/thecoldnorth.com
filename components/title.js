import glamorous from 'glamorous';
import { Fonts, Colors } from '../config';

const Title = glamorous.p({
	fontSize: 20,
	lineHeight: 1,
	marginBottom: 0,
	display: 'inline',
	paddingBottom: 0,
	color: Colors.white,
	fontFamily: Fonts.body
});

export default Title;
