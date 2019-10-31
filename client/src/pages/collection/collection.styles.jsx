import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CollectionTitle = styled.h2`
	font-size: 28px;
	margin: 15px auto 25px;
	text-transform: uppercase;

	@media screen and (max-width: 800px) {
		font-size: 24px;
	}
`;

export const CollectionItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
