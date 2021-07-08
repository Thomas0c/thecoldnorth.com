import glamorous from 'glamorous';
import { Colors } from '../config';

// Elements
import Section from './section';
import Date from './date';
import WorkContainer from './contentContainer';
import SectionTitle from './sectionTitle';
import Wrapper from './wrapper';
import Title from './title';

const WorkWrapper = glamorous.div({
	width: '100%',
	backgroundColor: Colors.mediumBlue,
	marginTop: '4rem',
	paddingTop: '2rem',
	paddingBottom: '2rem',
	'@media(max-width: 1024)': {
		marginTop: '6rem',
		paddingTop: '5rem',
		paddingBottom: '1rem',
	},
});

const work = [
	{
		title: 'Hiatus',
		city: 'Copenhagen',
		start: '2021',
		end: 'present',
	},
	{
		title: 'Tech Lead',
		city: 'Copenhagen',
		place: 'noa ignite denmark',
		start: '2019',
		end: '2021',
	},
	{
		title: 'Developer',
		city: 'Malmö',
		place: 'ustwo',
		start: '2018',
		end: '2019',
	},
	{
		title: 'Engineering Lead',
		place: 'siberia',
		city: 'New York',
		start: '2014',
		end: '2017',
	},
	{
		title: 'Creative Technologist',
		place: 'Another',
		city: 'Copenhagen',
		start: '2013',
		end: '2014',
	},
	{
		title: 'Digital Strategist',
		place: 'Soulland',
		city: 'Copenhagen',
		start: '2011',
		end: '2013',
	},
];

const Work = () => (
	<WorkWrapper>
		<WorkContainer>
			<SectionTitle>Experience</SectionTitle>
			<Wrapper>
				{work.map((workPlace) => (
					<Section key={workPlace.title}>
						<Date>
							{workPlace.start}-{workPlace.end}, {workPlace.city}
						</Date>
						<Title>
							{workPlace.title} {workPlace.place && `at ${workPlace.place}`}
						</Title>
					</Section>
				))}
			</Wrapper>
		</WorkContainer>
	</WorkWrapper>
);

export default Work;
