import { NavLink } from 'react-router-dom';

// typewriter effect
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
// import Portfolio from './Portfolio';

// framer motion
import { motion } from 'framer-motion';

// styled components

const StyledSectionHero = styled(motion.section)`
	width: 100%;
	height: 100vh;
	padding-top: 80px;
	padding-bottom: 5rem;
	/* margin-bottom: 1rem; */
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

const StyledTitleDiv = styled.div`
	display: flex;
	margin-top: 5rem;
`;

const StyledContentDiv = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
`;

const StyledLinkContainer = styled.div`
	display: flex;
`;

const StyledLink = styled.a`
	color: #30d9ba;
	text-decoration: none;
	font-size: 1rem;
`;

function Title(props: { title: string }) {
	const openTagh1: string = '<h1>';
	const closeTagh1: string = '</h1>';
	const openDivTag: string = '<div>';
	const closeDivTag: string = '</div>';
	const buttonTagOpen: string = '<button>';
	const buttonTagClose: string = '</button>';

	// typescript array of objects that contain the socials
	const socials: { name: string; link: string }[] = [
		{
			name: 'Github',
			link: 'https://github.com/AntonioCait',
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/ancait/',
		},
	];

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
				<StyledSpanRedSmall>{openDivTag}</StyledSpanRedSmall>
				{socials.map((social, index) => {
					return (
						<StyledLinkContainer>
							<StyledSpanBlue>{buttonTagOpen}</StyledSpanBlue>
							<StyledSpanWhite key={index}>
								<StyledLink href={social.link} target="_blank" rel="noreferrer">
									{social.name}
								</StyledLink>
							</StyledSpanWhite>
							<StyledSpanBlue>{buttonTagClose}</StyledSpanBlue>
						</StyledLinkContainer>
					);
				})}
				<StyledSpanRedSmall>{closeDivTag}</StyledSpanRedSmall>
			</StyledContentDiv>
		</>
	);
}

function PortfolioLink(props: { title: string }) {
	const openTagh1: string = '<h1>';
	const closeTagh1: string = '</h1>';
	const openDivTag: string = '<div>';
	const closeDivTag: string = '</div>';
	const buttonTagOpen: string = '<button>';
	const buttonTagClose: string = '</button>';

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
				<StyledSpanRedSmall>{openDivTag}</StyledSpanRedSmall>
				<StyledLinkContainer>
					<StyledSpanBlue>{buttonTagOpen}</StyledSpanBlue>
					<StyledSpanWhite>
						<NavLink
							to="/portfolio"
							style={({ isActive }) =>
								isActive
									? {
											color: '#30d9ba',
											// glow text
											textShadow:
												'0 0 5px #30d9ba, 0 0 10px #30d9ba, 0 0 15px #30d9ba, 0 0 20px #30d9ba, 0 0 25px #30d9ba, 0 0 30px #30d9ba, 0 0 35px #30d9ba',
											transition: 'all 0.5s ease',
									  }
									: { color: '#f2f2f2', transition: 'all 0.5s ease' }
							}
						>
							Portfolio
						</NavLink>
					</StyledSpanWhite>
					<StyledSpanBlue>{buttonTagClose}</StyledSpanBlue>
				</StyledLinkContainer>
				<StyledSpanRedSmall>{closeDivTag}</StyledSpanRedSmall>
			</StyledContentDiv>
		</>
	);
}

export default function Contact() {
	const titleSocials = 'Social Links';
	const titlePortfolio = 'Projects';

	return (
		<>
			<StyledSectionHero
				// appear from the bottom to top
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<StyledSectionContent>
					<Title title={titleSocials} />
					<PortfolioLink title={titlePortfolio} />
				</StyledSectionContent>
			</StyledSectionHero>
		</>
	);
}
