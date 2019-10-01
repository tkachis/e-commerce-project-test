import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/actions/cart';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
	const { id, imageUrl, name, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img alt="item" src={imageUrl} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(id)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItemFromCart(id)}>
				&#10005;
			</div>
		</div>
	);
};

export default connect(
	null,
	{ clearItemFromCart, addItem, removeItem }
)(CheckoutItem);
