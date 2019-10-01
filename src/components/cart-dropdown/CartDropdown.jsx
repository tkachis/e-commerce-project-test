import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/selectors/cart';
import { toggleCartHidden } from '../../redux/actions/cart';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					toggleCartHidden();
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
});

export default withRouter(
	connect(
		mapStateToProps,
		{ toggleCartHidden }
	)(CartDropdown)
);
