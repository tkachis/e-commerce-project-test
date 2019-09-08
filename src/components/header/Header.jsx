import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss'

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<Logo />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/shop" className="option">
					CONTACT
				</Link>
			</div>
		</header>
	)
}

export default Header
