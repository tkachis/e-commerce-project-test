export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, idRemoveCartItem) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === idRemoveCartItem
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== idRemoveCartItem);
	}

	return cartItems.map(cartItem =>
		cartItem.id === idRemoveCartItem
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
