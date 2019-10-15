import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import CartProvider from './providers/cart/cart.provider.jsx';

import './index.css';
import App from './App';

ReactDOM.render(
	<CartProvider>
		<Router>
			<App />
		</Router>
	</CartProvider>,
	document.getElementById('root')
);
