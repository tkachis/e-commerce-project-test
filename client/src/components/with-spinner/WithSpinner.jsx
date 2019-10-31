import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

import Spinner from '../spinner/Spinner';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
	return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
