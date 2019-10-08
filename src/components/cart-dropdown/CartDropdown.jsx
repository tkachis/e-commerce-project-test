import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { selectCartItems } from '../../redux/selectors/cart';
import { toggleCartHidden } from '../../redux/actions/cart';

import CartItem from '../cart-item/CartItem';

import {
	CartDropdownContainer,
	CartDropdownButton,
	EmptyMessageContainer,
	CartItemsContainer,
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
				)}
			</CartItemsContainer>
			<CartDropdownButton
				onClick={() => {
					history.push('/checkout');
					toggleCartHidden();
				}}
			>
				GO TO CHECKOUT
			</CartDropdownButton>
		</CartDropdownContainer>
	);
};

const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
});

export default compose(
	withRouter,
	connect(
		mapStateToProps,
		{ toggleCartHidden }
	)
)(CartDropdown);
