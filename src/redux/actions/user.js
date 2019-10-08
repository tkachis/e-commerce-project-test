import {
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	CHEK_USER_SESSION,
	SIGN_OUT_START,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
} from '../constants';

export const googleSignInStart = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = emailAndPassword => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});

export const signInSuccess = user => ({
	type: SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFailure = error => ({
	type: SIGN_IN_FAILURE,
	payload: error,
});

export const checkUserSession = () => ({
	type: CHEK_USER_SESSION,
});

export const signOutStart = () => ({
	type: SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
	type: SIGN_OUT_FAILURE,
	payload: error,
});
