import glamorous from 'glamorous';
import { Colors, Fonts } from '../config';

const Logo = glamorous.div({
	color: Colors.yellow,
	position: 'relative',
	fontSize: Fonts.mediumSize,
	fontFamily: Fonts.default,
	cursor: 'pointer',
	padding: '2rem'
});

export default () => {
	return (
		<Logo>
			the<br />
			<b>cold north</b>
		</Logo>
	);
};
