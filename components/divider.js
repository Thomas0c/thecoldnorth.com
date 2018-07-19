import glamorous from 'glamorous';
import { Colors } from '../config';

const Divider = glamorous.div({
	height: 1,
	marginTop: '15px',
	width: '100%',
	background: Colors.grey,
	'@media(max-width: 1024px)': {
		marginTop: '20px'
	}
});

export default Divider;
