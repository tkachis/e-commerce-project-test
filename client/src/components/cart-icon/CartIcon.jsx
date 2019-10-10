import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/actions/cart';
import { selectCartItemsCount } from '../../redux/selectors/cart';

import {
	CartContainer,
	ShoppingIcon,
	ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartContainer onClick={toggleCartHidden}>
		<ShoppingIcon />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartContainer>
);

CartIcon.propTypes = {
	toggleCartHidden: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(
	mapStateToProps,
	{ toggleCartHidden }
)(CartIcon);
