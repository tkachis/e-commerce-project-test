import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_uy52JmDQf2IX7dgeLbrXOs8y005T2LjQJ5';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then(res => {
				alert('Payment successful');
				console.log('Payment successful: ', res);
			})
			.catch(err => {
				alert(
					'There was an issue with your payment. Please sure you use the provided credit cart'
				);
				console.log('Payment error: ', err);
			});
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
			currency="rub"
		/>
	);
};

export default StripeCheckoutButton;
