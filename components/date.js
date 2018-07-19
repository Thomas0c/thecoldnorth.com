import glamorous from 'glamorous';
import { Fonts, Colors } from '../config';

const Date = glamorous.span({
	fontSize: 18,
	display: 'block',
	lineHeight: 2,
	fontFamily: Fonts.body,
	color: Colors.yellow,
});

export default Date;
