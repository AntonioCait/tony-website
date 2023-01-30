// typewriter effect
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';

// styled components

const StyledSectionHero = styled.section`
	width: 100%;
	height: 100vh;
	padding-top: 80px;
	padding-bottom: 5rem;
	margin-bottom: 1rem;
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

export default function Contact() {
	const titleSocials = 'Social Links';

	return (
		<>
			<StyledSectionHero>
				<StyledSectionContent>
					<Title title={titleSocials} />
				</StyledSectionContent>
			</StyledSectionHero>
		</>
	);
}
