import { takeLatest, call, put, all } from 'redux-saga/effects';

import { FETCH_COLLECTIONS_START } from '../constants';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from '../actions/shop';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = yield firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (err) {
		yield put(fetchCollectionsFailure(err.message));
	}
}

export function* fetchCollectionStart() {
	yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
	yield all([call(fetchCollectionStart)]);
}
