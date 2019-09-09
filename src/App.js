import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Login from './pages/login/Login'
import { auth } from './firebase/firebase.utils'

import './App.css'

const App = () => {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		let unsubscribefromAuth = auth.onAuthStateChanged(user =>
			setCurrentUser(user)
		)

		// component will unmount
		return () => unsubscribefromAuth()
	}, [])

	console.log(currentUser)

	return (
		<div>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</div>
	)
}

export default App
