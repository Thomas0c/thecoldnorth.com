import glamorous from 'glamorous';

import Divider from './divider';
import Text from './text';
import { Colors, Fonts, Margins } from '../config';

const IntroductionWrapper = glamorous.div({
	width: '50%',
	marginLeft: Margins.default,
	color: Colors.white,
	zIndex: 5,
	margin: '0 auto',
	position: 'relative',
	'@media(max-width: 1024px)': {
		width: '85%',
		marginTop: '2vh'
	}
});

const EntryLine = glamorous.div({
	width: '100%',
	fontSize: Fonts.bigSize,
	lineHeight: Fonts.lineHeight,
	color: Colors.white,
	fontFamily: Fonts.default,
	'@media(max-width: 1024px)': {
		fontSize: Fonts.mobileBigSize,
	}
});

const Button = glamorous.a({
	fontFamily: Fonts.default,
	color: Colors.yellow,
	fontSize: Fonts.smallSize,
	cursor: 'pointer',
	letterSpacing: 0.5,
	margin: '0 1rem 0 0',
	textDecoration: 'none',
	transition: 'opacity .3s',
	'@media(max-width: 1024px)': {
		margin: '0 2rem 0 0'
	},
	':hover': {
		opacity: 0.5,
	}
});

const Introduction = () => (
	<IntroductionWrapper>
		<EntryLine>
			Multi-disciplinary developer based in Copenhagen.<br />
			Equal parts problem solver &amp; creative full stack developer.<br />
			Currently very excited about React Native.
		</EntryLine>
		<Divider />
		<Text>
			Swiss knife includes vanilla JavaScript, NoSQL, Vue, React (Native), Node, Swift, containers &amp; infrastructure-as-code.</Text>
		<br />
		<Button href="mailto:thomas@thecoldnorth.com">
			<img src="./static/email.svg" />
		</Button>
		<Button href="https://github.com/Thomas0c">
			<img src="./static/github.svg" />
		</Button>
		<Button href="https://www.linkedin.com/in/thomasoc/">
			<img src="./static/linkedin.svg" />
		</Button>
		<Button href="https://twitter.com/Thomasoc">
			<img src="./static/twitter.svg" />
		</Button>
	</IntroductionWrapper>
)

export default Introduction;


