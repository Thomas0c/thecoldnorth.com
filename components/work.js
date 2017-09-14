import React from 'react';
import glamorous from 'glamorous';

// Elements
import Divider from './divider';
import Text from './text';
import Section from './section';
import WorkContainer from './contentContainer';
import SectionTitle from './sectionTitle';
import Wrapper from './wrapper';
import Title from './title';
import Description from './description';
import Date from './date';

const WorkWrapper = glamorous.div({
	width: '100%',
	margin: '0 auto',
	backgroundColor: '#2D3941',
	marginTop: '55px',
	paddingTop: '20px',
	paddingBottom: '2rem',
	'@media(max-device-width: 640px)': {
		marginTop: '60px',
		paddingTop: '50px',
		paddingBottom: '1rem'
	}
});

export default () => {
	return (
		<WorkWrapper>
			<WorkContainer>
				<SectionTitle>Work</SectionTitle>

				<Wrapper>
					<Section>
						<Title>
							Siberia
							<Date>2014-2017</Date>
							<Description>
								Engineering <b>Lead</b>
							</Description>
						</Title>

						<Divider />
						<Text>
							Worked out of Siberia’s NYC office spearheading client projects
							during exploration, development and deployment phase. Worked with
							Fortune 500 clients and startups taking their very first steps.
							Built chatbots, websites, services, prototypes and native apps.
							Also worked on-site with clients doing strategic research and
							innovation outlooks taking ideas from creation to testing and
							launching of new products and services.
						</Text>
					</Section>

					<Section>
						<Title>
							Another
							<Date>2013-2014</Date>
							<Description>
								Creative <b>Technologist</b>
							</Description>
						</Title>
						<Divider />
						<Text>
							Worked as creative technologist helping establish brand new agency
							Another when established in August 2013. Responsible for all
							digital products and projects including campaigns for SELECTED,
							Birger1962, Wood Wood and BØRNEfonden.
						</Text>
					</Section>

					<Section>
						<Title>
							Soulland
							<Date>2011-2013</Date>
							<Description>
								Digital <b>Strategist</b>
							</Description>
						</Title>
						<Divider />
						<Text>
							Responsible for everything digital for Danish menswear brand
							Soulland including launching and building their webshop from
							scratch as well as maintaining a forward-thinking profile in the
							market with unusual concepts using bleeding edge technology.
						</Text>
					</Section>
				</Wrapper>
			</WorkContainer>
		</WorkWrapper>
	);
};
