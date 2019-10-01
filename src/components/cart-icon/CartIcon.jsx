import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/actions/cart';
import { selectCartItemsCount } from '../../redux/selectors/cart';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

CartIcon.propTypes = {
	toggleCartHidden: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state),
});

export default connect(
	mapStateToProps,
	{ toggleCartHidden }
)(CartIcon);
