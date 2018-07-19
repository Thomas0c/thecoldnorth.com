import React from 'react';
import glamorous from 'glamorous';
import { Colors } from '../config';

// Elements
import Section from './section';
import Divider from './divider';
import Text from './text';
import WorkContainer from './contentContainer';
import SectionTitle from './sectionTitle';
import Wrapper from './wrapper';
import Title from './title';
import Date from './date';
import YellowLink from './coloredLink';

const ProjectWrapper = glamorous.div({
	width: '100%',
	margin: '0 auto',
	backgroundColor: Colors.lightBlue,
	marginTop: '0px',
	paddingTop: '20px',
	paddingBottom: '.5rem',
	'@media(max-device-width: 640px)': {
		paddingTop: '40px'
	}
});

export default () => {
	return (
		<ProjectWrapper>
			<WorkContainer>
				<SectionTitle>Side Projects</SectionTitle>

				<Wrapper>
					<Section>
						<Date>2017</Date>
						<Title>Solar Weather App</Title>
						<Divider />
						<Text>
							React Native experiment including Realm, Redux and DarkSky API.
							Wanted to become familiar with React Native as well as the flow and requirements
							for launching an application in the Apple App Store.
							Worked on project from UX, design and final realease on the{' '}
							<YellowLink href="https://itunes.apple.com/us/app/solar-weather-collection/id1220264561?mt=8">
								App Store
							</YellowLink>.
							Source on {' '}
							<YellowLink href="https://github.com/Thomas0c/solar-weather">
								GitHub
							</YellowLink>.
						</Text>
					</Section>
				</Wrapper>

			</WorkContainer>
		</ProjectWrapper>
	);
};
