import glamorous from 'glamorous';
import { Colors, Fonts } from '../config';

const LogoWrapper = glamorous.div({
	color: Colors.yellow,
	position: 'relative',
	fontSize: Fonts.mediumSize,
	fontFamily: Fonts.default,
	cursor: 'pointer',
	padding: '2rem',
	transition: 'opacity .3s',
	':hover': {
		opacity: 0.5,
	},
});

const Logo = () => (
	<LogoWrapper>
		the
		<br />
		<b>cold north</b>
	</LogoWrapper>
);

export default Logo;
