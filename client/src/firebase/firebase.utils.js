import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAGCZRzohuh-Px9d3l4RJyPgkJd3FCqmUw',
	authDomain: 'e-commerce-test-4e5d4.firebaseapp.com',
	databaseURL: 'https://e-commerce-test-4e5d4.firebaseio.com',
	projectId: 'e-commerce-test-4e5d4',
	storageBucket: '',
	messagingSenderId: '885360439213',
	appId: '1:885360439213:web:5774f5244c0e5b1e763b24',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const createUserProfileDocument = async (user, additionalData) => {
	if (!user) return;

	const userRef = firestore.doc(`users/${user.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = user;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
	const transformedCollection = collectionsSnapshot.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

// export const addCollectionAndDocuments = async (
// 	collectionKey,
// 	objectsToAdd
// ) => {
// 	const collectionRef = firestore.collection(collectionKey);

// 	const batch = firestore.batch();
// 	objectsToAdd.forEach(obj => {
// 		const newDocRef = collectionRef.doc();
// 		batch.set(newDocRef, obj);
// 	});

// 	return await batch.commit();
// };

export default firebase;
