// import projects from '../projects';
import { projects } from '../projects';

// typewriter effect
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

// framer motion
import { motion } from 'framer-motion';

// styled components

const StyledSectionHero = styled(motion.section)`
	width: 100%;
	height: 100%;
	padding-top: 80px;
	padding-bottom: 5rem;

	@media (max-width: 768px) {
		height: 100%;
	}

	@media (max-width: 480px) {
		height: 100%;
	}
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

const StyledSpanRedSmall = styled.span`
	color: #f21d44;
	font-size: 1rem;

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

const StyledSpanGreen = styled.span`
	color: #30d9ba;
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
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
`;

const StyledProjectsDiv = styled.div`
	display: flex;
`;

const StyledProjectLink = styled.a`
	color: #f2f2f2;
	text-decoration: none;
`;

function Title(props: { title: string; content: string }) {
	const openTagh1: string = '<h1>';
	const closeTagh1: string = '</h1>';
	const openMainTag: string = '<div>';
	const closeMainTag: string = '</div>';
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
				<StyledSpanRedSmall>{openMainTag}</StyledSpanRedSmall>
				<StyledSpanWhite>{props.content}</StyledSpanWhite>
				<StyledSpanRedSmall>{closeMainTag}</StyledSpanRedSmall>
			</StyledContentDiv>
		</>
	);
}

function Projects() {
	const ulListOpenTag: string = '<ul>';
	const ulListCloseTag: string = '</ul>';
	const curlyBracketsOpenTag: string = '{';
	const curlyBracketsCloseTag: string = '}';
	const liOpenTag: string = '<li>';
	const liCloseTag: string = '</li>';
	const linkOpenTag: string = '<Link>';
	const linkCloseTag: string = '</Link>';

	return (
		<>
			<StyledContentDiv>
				<StyledSpanRedSmall>{ulListOpenTag}</StyledSpanRedSmall>
				<StyledSpanBlue>{curlyBracketsOpenTag}</StyledSpanBlue>
				{/* map projects and generate a link for each one */}

				{projects.map((project, index) => {
					return (
						<StyledProjectsDiv>
							<StyledSpanGreen>{linkOpenTag}</StyledSpanGreen>
							<StyledSpanWhite key={index}>
								<StyledProjectLink href={project.link} target="_blank" rel="noreferrer">
									{project.name}
								</StyledProjectLink>
							</StyledSpanWhite>
							<StyledSpanGreen>{linkCloseTag}</StyledSpanGreen>
						</StyledProjectsDiv>
					);
				})}

				<StyledSpanBlue>{curlyBracketsCloseTag}</StyledSpanBlue>
				<StyledSpanRedSmall>{ulListCloseTag}</StyledSpanRedSmall>
			</StyledContentDiv>
		</>
	);
}

export default function Portfolio() {
	const title = 'My projects';
	const content = `Here you can see some of my work. These projects demonstrate my skills, as well as my passion for creating a website. I am always looking for new opportunities to grow and challenge myself as a developer. I hope you enjoy exploring my projects.`;
	return (
		<>
			<StyledSectionHero
				// appear from the bottom to top
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<StyledSectionContent>
					<Title title={title} content={content} />
					<Projects />
				</StyledSectionContent>
			</StyledSectionHero>
		</>
	);
}
