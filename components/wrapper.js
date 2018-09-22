import glamorous from 'glamorous';
import { Colors, Fonts } from '../config';

const wrapper = glamorous.div({
	width: '100%',
	margin: '0 auto',
	fontFamily: Fonts.body,
	color: Colors.white,
	marginBottom: '10px'
});

export default wrapper;
