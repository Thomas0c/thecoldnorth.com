import glamorous from 'glamorous';
import { Colors, Fonts } from '../config';

const SectionTitle = glamorous.p({
	fontSize: Fonts.mediumSize,
	color: Colors.white,
	lineHeight: 1,
	marginBottom: '3rem',
	fontFamily: Fonts.default,
});

export default SectionTitle;
