import React, { Component } from 'react';
import { rehydrate, css } from 'glamor';
import { Colors, Fonts } from '../config';

// Components
import Logo from '../components/logo';
import Introduction from '../components/introduction';
import Work from '../components/work';
import Projects from '../components/projects';

// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
	rehydrate(window.__NEXT_DATA__.ids);
}

const selectionStyles = {
	'&::selection': {
		backgroundColor: '#FFD186'
	},
	'&::-moz-selection': {
		backgroundColor: '#FFD186'
	}
};

css.global('html, body', {
	margin: 0,
	padding: 0,
	background: Colors.navy,
	fontFamily: Fonts.body,
	fontSize: 14
});

export default class Layout extends Component {
	render() {
		return (
			<>
				<Logo />
				<Introduction />
				<Work />
				<Projects />
			</>
		);
	}
}
