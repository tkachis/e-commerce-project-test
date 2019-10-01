import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from '../custom-button/CustomButton';

import { addItem } from '../../redux/actions/cart';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButtom inverted onClick={() => addItem(item)}>
				Add to cart
			</CustomButtom>
		</div>
	);
};

export default connect(
	null,
	{ addItem }
)(CollectionItem);
