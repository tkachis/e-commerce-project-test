import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss'

const Header = ({ currentUser }) => {
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
			</div>
		</header>
	)
}

Header.propTypes = {
	currentUser: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
