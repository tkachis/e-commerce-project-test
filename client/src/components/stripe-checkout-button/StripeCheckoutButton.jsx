import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_uy52JmDQf2IX7dgeLbrXOs8y005T2LjQJ5';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is ${price} RUB`}
			amount={priceForStripe}
			token={onToken}
			stripeKey={publishableKey}
			currency="RUB"
		/>
	);
};

export default StripeCheckoutButton;
