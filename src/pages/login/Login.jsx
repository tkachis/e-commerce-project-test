import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/selectors/user';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import { LoginContainer } from './login.styles';

const Login = ({ currentUser }) => {
	return (
		<LoginContainer>
			{currentUser && <Redirect to="/" />}
			<SignIn />
			<SignUp />
		</LoginContainer>
	);
};

const mapStateToProps = state => ({
	currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(Login);
