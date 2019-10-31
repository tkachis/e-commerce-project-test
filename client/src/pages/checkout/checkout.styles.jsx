import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
	width: 75%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	@media screen and (max-width: 800px) {
		width: 100%;
		margin: 2rem auto 2rem;
	}
`;

export const CheckoutHeaderContainer = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	background-color: #333;
	color: #fff;
`;

export const HeaderBlockContainer = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}

	@media screen and (max-width: 800px) {
		width: 20%;

		&:nth-child(4) {
			width: 13%;
		}

		&:last-child {
			width: 16%;
		}
	}
`;

export const TotalContainer = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 32px;

	@media screen and (max-width: 800px) {
		font-size: 28px;
	}
`;

export const WarningContainer = styled.div`
	text-align: center;
	margin-top: 20px;
	font-size: 24px;
	color: red;

	@media screen and (max-width: 800px) {
		font-size: 20px;
	}
`;
