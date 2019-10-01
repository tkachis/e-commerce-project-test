import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

const SignUp = () => {
	const [formData, setFormData] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { displayName, email, password, confirmPassword } = formData;

	const handleSubmit = async e => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert(`password don't match`);
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			setFormData({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					name="displayName"
					type="text"
					label="Display Name"
					value={displayName}
					onChange={handleChange}
					required
				/>
				<FormInput
					name="email"
					type="email"
					label="Email"
					value={email}
					onChange={handleChange}
					required
				/>
				<FormInput
					name="password"
					type="password"
					label="Password"
					value={password}
					onChange={handleChange}
					required
				/>
				<FormInput
					name="confirmPassword"
					type="password"
					label="Confirm Password"
					value={confirmPassword}
					onChange={handleChange}
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
