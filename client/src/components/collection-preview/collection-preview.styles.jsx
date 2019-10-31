import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	@media screen and (max-width: 800px) {
		align-items: center;
	}
`;

export const TitleContainer = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;

	&:hover {
		color: grey;
	}

	@media screen and (max-width: 800px) {
		font-size: 20px;

		&:hover {
			color: unset;
		}
	}
`;

export const PreviewContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
