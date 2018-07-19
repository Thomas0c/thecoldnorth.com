import React, { Component } from 'react';
import { rehydrate, css } from 'glamor';
import { initGA, logPageView } from '../utils/analytics';
import { Colors, Fonts } from '../config';

// Components
import Logo from '../components/logo';
import Introduction from '../components/introduction';
import Work from '../components/work';
import Snow from '../components/snow';
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
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}
	render() {
		return (
			<>
				<Logo />
				<Introduction />
				<Snow />
				<Work />
				<Projects />
			</>
		);
	}
}
