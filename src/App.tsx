import { useState, useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
// typewriter effect
import Typewriter from 'typewriter-effect';
// styled components
import styled from 'styled-components';

// styled components

const StyledSectionHero = styled.section`
	width: 100%;
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
								strings: [`Hi, I'm a`, props.title],
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

function Work(props: { title: string; content: string }) {
	const openTagh2: string = '<h2>';
	const closeTagh2: string = '</h2>';
	const openDivTag: string = '<div>';
	const closeDivTag: string = '</div>';
	return (
		<>
			{/* add this inside the strings '<h1>Front-End Developer</h1>' but h1 tag color blue and the content color red*/}
			<StyledTitleDiv>
				<StyledSpanBlue>{openTagh2}</StyledSpanBlue>
				<StyledSpanRed>
					<h2>
						<Typewriter
							options={{
								strings: [props.title],
								autoStart: true,
								loop: true,
								delay: 230,
								deleteSpeed: 100,
							}}
						/>
					</h2>
				</StyledSpanRed>
				<StyledSpanBlue>{closeTagh2}</StyledSpanBlue>
			</StyledTitleDiv>

			<StyledContentDiv>
				<StyledSpanBlue>{openDivTag}</StyledSpanBlue>
				<StyledSpanWhite>{props.content}</StyledSpanWhite>
				<StyledSpanBlue>{closeDivTag}</StyledSpanBlue>
			</StyledContentDiv>
		</>
	);
}

function Stack(props: { title: string; content: string }) {
	const openTagh2: string = '<h2>';
	const closeTagh2: string = '</h2>';
	const openDivTag: string = '<div>';
	const closeDivTag: string = '</div>';
	return (
		<>
			{/* add this inside the strings '<h1>Front-End Developer</h1>' but h1 tag color blue and the content color red*/}
			<StyledTitleDiv>
				<StyledSpanBlue>{openTagh2}</StyledSpanBlue>
				<StyledSpanRed>
					<h2>
						<Typewriter
							options={{
								strings: [props.title],
								autoStart: true,
								loop: true,
								delay: 230,
								deleteSpeed: 100,
							}}
						/>
					</h2>
				</StyledSpanRed>
				<StyledSpanBlue>{closeTagh2}</StyledSpanBlue>
			</StyledTitleDiv>

			<StyledContentDiv>
				<StyledSpanBlue>{openDivTag}</StyledSpanBlue>
				<StyledSpanWhite>{props.content}</StyledSpanWhite>
				<StyledSpanBlue>{closeDivTag}</StyledSpanBlue>
			</StyledContentDiv>
		</>
	);
}

function App() {
	const titleContent: string = 'Front-End Developer';
	const contentText: string = `I'm a Junior Front-End Developer with a passion for crafting great user interfaces and solving UI problems. I excel at identifying and solving UI issues, resulting in improved user experiences. With a background in HTML, CSS, JavaScript, React and some TypeScript and NextJS, and a desire to optimize and streamline complex UI systems for web applications, resulting in increased efficiency and user satisfaction. I'm eager to bring my skills and experience to a dynamic company and help them to deliver outstanding user experiences.`;
	const titleWork: string = 'Work';
	const contentWork: string = `I have experience working with React and TypeScript. I have utilized these technologies to build a calculator for Commercial Partners at Microsip Mexico and mainly use Webflow and JavaScript to maintain landing pages. I am continuously learning and trying to improve my skills.`;
	const titleStack: string = 'Stack';
	const contentStack: string = `I commonly use React and TypeScript, vanilla JavaScript, HTML & CSS, Tailwind CSS, and Webflow. For UI/UX, Figma and Adobe Illustrator. Also, I have a basic understanding of Python.`;

	return (
		<>
			<StyledSectionHero>
				<StyledSectionContent>
					<Title title={titleContent} content={contentText} />
					<Work title={titleWork} content={contentWork} />
					<Stack title={titleStack} content={contentStack} />
				</StyledSectionContent>
			</StyledSectionHero>
		</>
	);
}

export default App;
