import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.error(err);
		}

		setFormData({ email: '', password: '' });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={handleChange}
					value={email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<ButtonsBarContainer>
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
