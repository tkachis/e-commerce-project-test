import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Login from './pages/login/Login';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/actions/user';

import './App.css';

const App = ({ setCurrentUser }) => {
	useEffect(() => {
		let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});

		// component will unmount
		return () => unsubscribeFromAuth();
	}, [setCurrentUser]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</div>
	);
};

export default connect(
	null,
	{ setCurrentUser }
)(App);
