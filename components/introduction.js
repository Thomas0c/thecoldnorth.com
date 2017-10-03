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
			Professional problem solver (full stack dev). <br />
			Recently relocated from NYC to Copenhagen. <br /><br />
			Never not learning and breaker of things. Fond of driving change and shaping the future.<br />
			Big on problem solving through a combination of programming, UX and strategy.
			</Text>
			<br />
			<Title>About</Title>
			<Divider />
			<Text>
				HTML, CSS, SASS, JavaScript (React, React Native, Redux, css-in-js, Angular), Webpack Node, NoSQL, Docker and Swift. That’s my jam! AWS, Heroku, Google Cloud, Terraform and Packer are my go-tos.
				<br /><br />
				My professional swiss knife includes Github, Sketch, Framer, Atom and Terraform.
			</Text>
			<br />
			<Button href="mailto:thomas@thecoldnorth.com?Subject=Winter%20Is%20Coming">
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
