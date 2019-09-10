import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

import './login.scss'

const Login = ({ currentUser }) => {
	return (
		<div className="sign-in-and-sign-up">
			{currentUser && <Redirect to="/" />}
			<SignIn />
			<SignUp />
		</div>
	)
}

export default connect(state => ({ currentUser: state.user.currentUser }))(
	Login
)
