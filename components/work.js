import React from 'react';
import glamorous from 'glamorous';
import { Colors } from '../config';

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
	marginTop: '40px',
	paddingTop: '20px',
	paddingBottom: '20px',
	'@media(max-width: 1024)': {
		marginTop: '60px',
		paddingTop: '50px',
		paddingBottom: '1rem'
	}
});

const work = [{
	title: 'Developer',
	place: 'ustwo',
	start: '2018',
	end: 'Present'
}, {
	title: 'Engineering Lead',
	place: 'siberia',
	start: '2015',
	end: '2017',
}, {
	title: 'Creative Technologist',
	place: 'Another',
	start: '2013',
	end: '2014'
}, {
	title: 'Digital Strategist',
	place: 'Soulland',
	start: '2011',
	end: '2013'
}];

export default () => {
	return (
		<WorkWrapper>
			<WorkContainer>
				<SectionTitle>Experience</SectionTitle>
				<Wrapper>
					{work.map((workPlace) => (
						<Section>
							<Date>{workPlace.start}-{workPlace.end}</Date>
							<Title>{workPlace.title} at {workPlace.place}</Title>
						</Section>
					))}
				</Wrapper>
			</WorkContainer>
		</WorkWrapper>
	);
};
