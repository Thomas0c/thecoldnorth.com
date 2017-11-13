import React from 'react';
import glamorous from 'glamorous';

import Divider from './divider';
import Text from './text';

const Introduction = glamorous.div({
	width: '50%',
	maxWidth: '600px',
	margin: '0 auto',
	color: '#FFF',
	zIndex: 5,
	position: 'relative',
	'@media(max-device-width: 640px)': {
		maxWidth: '85%',
		width: '85%',
		marginTop: '2vh'
	}
});

const Name = glamorous.div({
	width: '100%',
	fontSize: '2.5em',
	lineHeight: 1,
	color: '#FFF',
	fontFamily: 'Playfair Display'
});

const Title = glamorous.p({
	fontSize: 22,
	lineHeight: 1,
	fontFamily: 'Playfair Display',
	color: '#FFF',
	'@media(max-device-width: 640px)': {
		fontSize: 32
	}
});

const Button = glamorous.a({
	fontFamily: 'Playfair Display',
	color: '#FFD186',
	fontSize: 14,
	cursor: 'pointer',
	letterSpacing: 0.5,
	margin: '0 10px 0 0',
	textDecoration: 'none',
	transition: 'all .3s',
	'@media only screen and (max-device-width: 1024px)': {
		margin: '0 20px 0 0'
	},
	':hover': {
		opacity: 0.5
	}
});

const Image = glamorous.img({
	width: 40,
	marginRight: 10,
	'@media only screen and (max-device-width: 640px)': {
		width: 40,
		marginRight: 0
	}
});

export default () => {
	return (
		<Introduction>
			<Name>
				Thomas <b>Carlson</b>
			</Name>
			<Divider />
			<Text>
			Interdisciplinary problem solver and full stack developer.<br />
			Prefer to work <b>with</b> someone rather than for them.
			Fond of pushing boundaries and shaping the future.<br />
			Big on gettings things done and problem solving through a combination of programming, UX and strategy.
			</Text>
			<br />
			<Title>About</Title>
			<Divider />
			<Text>
				HTML, CSS, SASS, JavaScript (React/RN, Redux, Angular, jasmine, jest), Webpack, Node, NoSQL and Swift. That’s my jam!
				<br />AWS, Docker/K8s, Circle CI, Terraform and Packer are my go-tos.
				<br /><br />
				My swiss knife includes Atom, Framer, Github & Sketch.
			</Text>
			<br />
			<Button href="mailto:thomas@thecoldnorth.com?Subject=Fancy%20a%20coffee?">
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
		</Introduction>
	);
};
