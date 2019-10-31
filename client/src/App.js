import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from './components/spinner/Spinner';
import Header from './components/header/Header';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import { checkUserSession } from './redux/actions/user';

const HomePage = lazy(() => import('./pages/home/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));
const Login = lazy(() => import('./pages/login/Login'));

const App = ({ checkUserSession }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Route exact path="/" component={HomePage} />
						<Route path="/shop" component={ShopPage} />
						<Route exact path="/checkout" component={CheckoutPage} />
						<Route exact path="/login" component={Login} />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

export default connect(
	null,
	{ checkUserSession }
)(App);
