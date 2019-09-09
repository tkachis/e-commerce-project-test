import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/Header'
import HomePage from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Login from './pages/login/Login'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css'

const App = () => {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		let unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					})
				})
			}

			setCurrentUser(userAuth)
		})

		// component will unmount
		return () => unsubscribefromAuth()
	}, [])

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
