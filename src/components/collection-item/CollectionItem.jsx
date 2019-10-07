import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/actions/cart';

import {
	CollectionItemContainer,
	CollectionFooterContainer,
	AddButton,
	BackgroundImage,
	NameContainer,
	PriceContainer,
} from './collection-styles.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<CollectionItemContainer>
			<BackgroundImage className="image" imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => addItem(item)} inverted>
				Add to cart
			</AddButton>
		</CollectionItemContainer>
	);
};

export default connect(
	null,
	{ addItem }
)(CollectionItem);
