import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyAGCZRzohuh-Px9d3l4RJyPgkJd3FCqmUw',
	authDomain: 'e-commerce-test-4e5d4.firebaseapp.com',
	databaseURL: 'https://e-commerce-test-4e5d4.firebaseio.com',
	projectId: 'e-commerce-test-4e5d4',
	storageBucket: '',
	messagingSenderId: '885360439213',
	appId: '1:885360439213:web:5774f5244c0e5b1e763b24',
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
