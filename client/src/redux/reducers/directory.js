const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			routeName: 'shop/hats',
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			routeName: 'shop/jackets',
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			routeName: 'shop/sneakers',
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			routeName: 'shop/womens',
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			routeName: 'shop/mens',
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};

export default directoryReducer;
