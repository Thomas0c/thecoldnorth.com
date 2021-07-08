import glamorous from 'glamorous';
import { Margins } from '../config';

const ContentContainer = glamorous.div({
	width: '50%',
	minHeight: '30vh',
	position: 'relative',
	zIndex: 5,
	marginLeft: Margins.default,
	margin: '0 auto',
	'@media(max-width: 1024px)': {
		width: '85%',
	},
});

export default ContentContainer;
