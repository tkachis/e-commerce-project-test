import React, { useState } from 'react'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.scss'

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()

		setFormData({ email: '', password: '' })
	}

	const { email, password } = formData

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					label="email"
					value={email}
					onChange={handleChange}
					required
				/>
				<FormInput
					name="password"
					type="password"
					label="password"
					value={password}
					onChange={handleChange}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	)
}

export default SignIn
