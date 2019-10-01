import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({ currentUser, hidden }) => {
	return (
		<header className="header">
			<Link to="/">
				<Logo />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/contact" className="option">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to="/login" className="option">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</header>
	);
};

Header.propTypes = {
	currentUser: PropTypes.object.isRequired,
	hidden: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
