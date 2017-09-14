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
	paddingBottom: '2rem',
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
							Experimented with React Native, Realm and Redux re-doing the
							infamous weather app from scratch using the DarkSky API while
							getting familiar with the stack. Worked on project from concept to
							UX, design and finally releasing the final product on the{' '}
							<AppStoreLink href="https://itunes.apple.com/us/app/solar-weather-collection/id1220264561?mt=8">
								App Store
							</AppStoreLink>.
						</Text>
					</Section>
				</Wrapper>
			</WorkContainer>
		</ProjectWrapper>
	);
};
