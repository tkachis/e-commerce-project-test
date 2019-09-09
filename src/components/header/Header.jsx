import React from 'react'
import { Link } from 'react-router-dom'

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

export default Header
