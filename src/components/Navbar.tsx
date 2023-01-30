// styled-components
import styled from 'styled-components';
// router link
import { Link, NavLink } from 'react-router-dom';
// state
import { useState } from 'react';
// motion
import { motion } from 'framer-motion';

// styled components

const StyledNavbar = styled.nav`
	/* background-color: #0d0d0d; */
	/* glass effect */
	/* background rgba color #0d0d0d */
	background-color: rgba(13, 13, 13, 0.967);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(5px);
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

const StyledNavLinks = styled.div`
	display: flex;
`;

const StyledMobileMenuActive = styled(motion.div)`
	/* display: grid;
	grid-template-columns: 1fr;
	place-items: center; */
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	/* background-color: #0d0d0d; */
	background-color: rgba(13, 13, 13, 0.967);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(5px);
	height: 50vh;
	width: 100vw;
	position: absolute;
	top: 80px;
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
	/* box shadow soft only at the bottom color #f2f2f2*/
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
					{/* <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}>
						<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
						<StyledSpanWhite>{aboutContent}</StyledSpanWhite>
						<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
					</NavLink> */}
					<StyledNavLinks>
						<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
						<NavLink
							to="/about"
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
							About
						</NavLink>
						<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
					</StyledNavLinks>
					<StyledNavLinks>
						<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
						<NavLink
							to="/contact"
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
							Contact
						</NavLink>
						<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
					</StyledNavLinks>
					<StyledNavLinks>
						<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
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
						<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
					</StyledNavLinks>
				</StyledBoxNav>

				<StyledMobileBtn onClick={toggleMobileMenu}>
					<StyledSpanBlue>{isMobileMenuOpen ? mobileBtnCloseContent : mobileBtnContent}</StyledSpanBlue>
				</StyledMobileBtn>
				{isMobileMenuOpen && (
					<StyledMobileMenuActive
						// appear from the left
						initial={{ x: '-100vw' }}
						// animate to the right
						animate={{ x: 0 }}
						transition={{
							type: 'tween',
						}}
						// exit to the left
						exit={{
							x: '-100vw',
							transition: {
								type: 'tween',
							},
						}}
					>
						{/* <Link to="/" onClick={toggleMobileMenu}>
							<StyledBoxLogo>
								<StyledSpanBlue>{imgTagOpen + ''}</StyledSpanBlue>
								<StyledSpanRed>{imgSrcRed}</StyledSpanRed>
								<StyledSpanWhite>{imgSrcContentWhite}</StyledSpanWhite>
								<StyledSpanBlue>{imgTagClose}</StyledSpanBlue>
							</StyledBoxLogo>
						</Link>
						<StyledMobileBtn onClick={toggleMobileMenu}>
							<StyledSpanBlue>{mobileBtnCloseContent}</StyledSpanBlue>
						</StyledMobileBtn> */}
						<StyledNavLinks>
							<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
							<NavLink
								to="/about"
								onClick={toggleMobileMenu}
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
								About
							</NavLink>
							<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
						</StyledNavLinks>
						<StyledNavLinks>
							<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
							<NavLink
								to="/contact"
								onClick={toggleMobileMenu}
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
								Contact
							</NavLink>
							<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
						</StyledNavLinks>
						<StyledNavLinks>
							<StyledSpanBlue>{aboutTagOpen}</StyledSpanBlue>
							<NavLink
								to="/portfolio"
								onClick={toggleMobileMenu}
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
							<StyledSpanBlue>{aboutTagClose}</StyledSpanBlue>
						</StyledNavLinks>
					</StyledMobileMenuActive>
				)}
			</StyledNavbar>
		</>
	);
}
