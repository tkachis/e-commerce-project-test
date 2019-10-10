import {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAILURE,
} from '../constants';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				collections: payload,
				isFetching: false,
			};
		case FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
