// typewriter effect
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

// styled components

const StyledSectionHero = styled.section`
	width: 100%;
	height: 100vh;
	padding-top: 80px;
	padding-bottom: 5rem;
`;

const StyledSectionContent = styled.main`
	width: 90%;
	margin: 0 auto;
`;

const StyledSpanBlue = styled.span`
	color: #72bcd9;
	font-size: 1rem;

	@media (max-width: 768px) {
		font-size: 0.8;
	}

	@media (max-width: 480px) {
		font-size: 0.6;
	}
`;

const StyledSpanRed = styled.span`
	color: #f21d44;

	@media (max-width: 768px) {
		font-size: 0.8;
	}

	@media (max-width: 480px) {
		font-size: 0.6;
	}
`;

const StyledSpanWhite = styled.span`
	color: #f2f2f2;
	font-size: 1rem;

	@media (max-width: 768px) {
		font-size: 0.8;
	}

	@media (max-width: 480px) {
		font-size: 0.6;
	}
`;

const StyledTitleDiv = styled.div`
	display: flex;
	margin-top: 5rem;
`;

const StyledContentDiv = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
`;

function Title(props: { title: string; content: string }) {
	const openTagh1: string = '<h1>';
	const closeTagh1: string = '</h1>';
	const openMainTag: string = '<main>';
	const closeMainTag: string = '</main>';
	return (
		<>
			{/* add this inside the strings '<h1>Front-End Developer</h1>' but h1 tag color blue and the content color red*/}
			<StyledTitleDiv>
				<StyledSpanBlue>{openTagh1}</StyledSpanBlue>
				<StyledSpanRed>
					<h1>
						<Typewriter
							options={{
								strings: [props.title],
								autoStart: true,
								loop: true,
								delay: 230,
								deleteSpeed: 100,
							}}
						/>
					</h1>
				</StyledSpanRed>
				<StyledSpanBlue>{closeTagh1}</StyledSpanBlue>
			</StyledTitleDiv>

			<StyledContentDiv>
				<StyledSpanBlue>{openMainTag}</StyledSpanBlue>
				<StyledSpanWhite>{props.content}</StyledSpanWhite>
				<StyledSpanBlue>{closeMainTag}</StyledSpanBlue>
			</StyledContentDiv>
		</>
	);
}

export default function About() {
	const title = 'About me';
	const content = `My name is Jesus Antonio Iturriaga, I’m 24 and, I studied    for a bachelor's Degree In Graphic Design and Digital Animation at TecMilenio University, I reside in Mexico. I'm certified in Interactivity and Multimedia Design, Game Design and 3D Animation, but I mainly focus on Front-End Web Development using React, TypeScript, JavaScript, Framer Motion, and UI/UX Design. Also, I have two Coursera specializations: Google UX Design and Meta Front-End Development, just to polish my skills, but I love to learn new things, for now, I keep learning Python and NextJS`;
	return (
		<>
			<StyledSectionHero>
				<StyledSectionContent>
					<Title title={title} content={content} />
				</StyledSectionContent>
			</StyledSectionHero>
		</>
	);
}
