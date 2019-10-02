import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import CollectionPage from './pages/collection/CollectionPage';
import Login from './pages/login/Login';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/actions/user';

import './App.css';

const App = ({ setCurrentUser }) => {
	useEffect(() => {
		let unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});

		// component will unmount
		return () => unsubscribefromAuth();
	}, [setCurrentUser]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route path="/shop/:collectionId" component={CollectionPage} />
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
