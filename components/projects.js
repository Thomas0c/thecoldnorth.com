import React from 'react';
import glamorous from 'glamorous';

// Elements
import Section from './section';
import Divider from './divider';
import Text from './text';
import WorkContainer from './contentContainer';
import SectionTitle from './sectionTitle';
import Wrapper from './wrapper';
import Title from './title';
import Description from './description';
import Date from './date';

const ProjectWrapper = glamorous.div({
	width: '100%',
	margin: '0 auto',
	backgroundColor: '#4B575F',
	marginTop: '0px',
	paddingTop: '20px',
	paddingBottom: '1.5rem',
	'@media(max-device-width: 640px)': {
		paddingTop: '40px'
	}
});

const AppStoreLink = glamorous.a({
	color: '#FFD186',
	textDecoration: 'none'
});

export default () => {
	return (
		<ProjectWrapper>
			<WorkContainer>
				<SectionTitle>Side Projects</SectionTitle>

				<Wrapper>
					<Section>
						<Title>
							Solar Weather App
							<Date>2017</Date>
							<Description>
								React <b>Native</b>
							</Description>
						</Title>
						<Divider />
						<Text>
							React Native experiment including Realm, Redux and DarkSky API.
							Wanted to become familiar with React Native as well as the flow and requirements
							for launching an application in the Apple App Store.
							Worked on project from UX, design and final realease on the{' '}
							<AppStoreLink href="https://itunes.apple.com/us/app/solar-weather-collection/id1220264561?mt=8">
								 App Store
							</AppStoreLink>.
							Codebase opensourced on{' '}
							<AppStoreLink href="https://github.com/Thomas0c/solar-weather">
								 GitHub
							</AppStoreLink>.
						</Text>
					</Section>
				</Wrapper>
			</WorkContainer>
		</ProjectWrapper>
	);
};
