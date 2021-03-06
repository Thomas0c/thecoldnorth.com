import glamorous from 'glamorous';
import { Colors } from '../config';

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
	paddingTop: '2rem',
	paddingBottom: '.5rem',
	'@media(max-width: 1024)': {
		paddingTop: '4rem',
	},
});

const Projects = () => (
	<ProjectWrapper>
		<WorkContainer>
			<SectionTitle>Side Projects</SectionTitle>

			<Wrapper>
				<Section>
					<Date>2017</Date>
					<Title>Solar Weather App</Title>
					<Divider />
					<Text>
						React Native experiment including Realm, Redux and DarkSky API. Wanted to become familiar with React Native as well as the flow
						and requirements for launching an application in the Apple App Store. Worked on project from UX, design and final realease on
						the <YellowLink href="https://itunes.apple.com/us/app/solar-weather-collection/id1220264561?mt=8">App Store</YellowLink>. Source
						on <YellowLink href="https://github.com/Thomas0c/solar-weather">GitHub</YellowLink>.
					</Text>
				</Section>
			</Wrapper>
		</WorkContainer>
	</ProjectWrapper>
);

export default Projects;
