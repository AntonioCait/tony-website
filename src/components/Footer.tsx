import styled from 'styled-components';

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

const StyledFooter = styled.footer`
	width: 100%;
	height: 100%;
	bottom: 0;
	left: 0;
`;

const StyledFooterDiv = styled.div`
	width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	place-items: center;
	padding: 1rem 0;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1fr;
	}
`;

const StyledBox = styled.div`
	display: flex;
`;

export default function Footer() {
	const pTagOpen = '<p>';
	const pTagClose = '</p>';
	const spanTagOpen = '<span>';
	const spanTagClose = '</span>';
	return (
		<>
			<StyledFooter>
				<StyledFooterDiv>
					<StyledBox>
						<StyledSpanBlue>{pTagOpen}</StyledSpanBlue>
						<StyledSpanWhite>© {new Date().getFullYear()}</StyledSpanWhite>
						<StyledSpanBlue>{pTagOpen}</StyledSpanBlue>
					</StyledBox>
					<StyledBox>
						<StyledSpanBlue>{spanTagOpen}</StyledSpanBlue>
						<StyledSpanWhite>Designed and built by</StyledSpanWhite>
						<StyledSpanBlue>{spanTagClose}</StyledSpanBlue>
					</StyledBox>
					<StyledBox>
						<StyledSpanBlue>{pTagOpen}</StyledSpanBlue>
						<StyledSpanRed>Tony</StyledSpanRed>
						<StyledSpanBlue>{pTagClose}</StyledSpanBlue>
					</StyledBox>
				</StyledFooterDiv>
			</StyledFooter>
		</>
	);
}
