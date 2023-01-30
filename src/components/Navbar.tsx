// styled-components
import styled from 'styled-components';
// router link
import { Link } from 'react-router-dom';
// state
import { useState } from 'react';

// styled components

const StyledNavbar = styled.nav`
	/* background-color: #0d0d0d; */
	/* glass effect */
	/* background rgba color #0d0d0d */
	background-color: rgba(13, 13, 13, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	/* background-color: #717171; */
	width: 100%;
	height: 80px;
	/* margin-bottom: 80px; */
	display: grid;
	grid-template-columns: auto 1fr;
	padding: 0 40px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 90;
	@media (max-width: 768px) {
		padding: 10px;
	}
`;

const StyledSpanBlue = styled.span`
	color: #72bcd9;
`;

const StyledSpanRed = styled.span`
	color: #f21d44;
`;

const StyledSpanWhite = styled.span`
	color: #f2f2f2;
`;
const StyledBoxLogo = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const StyledBoxNav = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	/* to the right in X axis */
	justify-items: end;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`;

const StyledMobileBtn = styled.p`
	display: none;
	@media (max-width: 768px) {
		display: grid;
		justify-items: end;
		align-items: center;
	}
`;

const StyledMobileMenuActive = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	place-items: center;
	background-color: #0d0d0d;
	/* background-color: rgba(13, 13, 13, 0.9);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px); */
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	color: #f2f2f2;
	font-size: 1rem;
	cursor: pointer;
	/* no scroll */
	overflow: hidden;
	/* transparency */
	/* opacity: 0.8; */
	/* glass effect */
	/* backdrop-filter: blur(3px); */
	@media (min-width: 768px) {
		display: none;
	}
`;

export default function Navbar() {
	const imgTagOpen: string = '<img ';
	const imgTagClose: string = '/>';
	const imgSrcRed: string = ` src`;
	const imgSrcContentWhite: string = '=’Tony’';
	const whiteSpace: string = ` `;

	const aboutTagOpen: string = '<a>';
	const aboutTagClose: string = '</a>';
	const aboutContent: string = 'About';
	const contactContent: string = 'Contact';
	const portfolioContent: string = 'Portfolio';

	const mobileBtnContent: string = '<Open />';
	const mobileBtnCloseContent: string = '<Close />';

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<StyledNavbar>
				<Link to="/">
					<StyledBoxLogo>
						<StyledSpanBlue>{imgTagOpen + ''}</StyledSpanBlue>
						<StyledSpanRed>{imgSrcRed}</StyledSpanRed>
						<StyledSpanWhite>{imgSrcContentWhite}</StyledSpanWhite>
						<StyledSpanBlue>{imgTagClose}</StyledSpanBlue>
					</StyledBoxLogo>
				</Link>
				<StyledBoxNav>
					<Link to="/about">
						<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
						<StyledSpanWhite>{aboutContent}</StyledSpanWhite>
						<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
					</Link>
					<Link to="/contact">
						<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
						<StyledSpanWhite>{contactContent}</StyledSpanWhite>
						<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
					</Link>
					<Link to="/portfolio">
						<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
						<StyledSpanWhite>{portfolioContent}</StyledSpanWhite>
						<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
					</Link>
				</StyledBoxNav>

				<StyledMobileBtn onClick={toggleMobileMenu}>
					<StyledSpanBlue>{mobileBtnContent}</StyledSpanBlue>
				</StyledMobileBtn>
				{isMobileMenuOpen && (
					<StyledMobileMenuActive>
						<Link to="/" onClick={toggleMobileMenu}>
							<StyledBoxLogo>
								<StyledSpanBlue>{imgTagOpen + ''}</StyledSpanBlue>
								<StyledSpanRed>{imgSrcRed}</StyledSpanRed>
								<StyledSpanWhite>{imgSrcContentWhite}</StyledSpanWhite>
								<StyledSpanBlue>{imgTagClose}</StyledSpanBlue>
							</StyledBoxLogo>
						</Link>
						<StyledMobileBtn onClick={toggleMobileMenu}>
							<StyledSpanBlue>{mobileBtnCloseContent}</StyledSpanBlue>
						</StyledMobileBtn>
						<Link to="/about" onClick={toggleMobileMenu}>
							<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
							<StyledSpanWhite>{aboutContent}</StyledSpanWhite>
							<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
						</Link>
						<Link to="/portfolio" onClick={toggleMobileMenu}>
							<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
							<StyledSpanWhite>{portfolioContent}</StyledSpanWhite>
							<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
						</Link>
						<Link to="/contact" onClick={toggleMobileMenu}>
							<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
							<StyledSpanWhite>{contactContent}</StyledSpanWhite>
							<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
						</Link>
					</StyledMobileMenuActive>
				)}
			</StyledNavbar>
		</>
	);
}
