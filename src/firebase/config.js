import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAM7MokM5i7vqkqehU7aFuiFavnAFOncSc',
    authDomain: 'rn-todo-d4856.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'rn-todo-d4856',
    storageBucket: 'rn-todo-d4856.appspot.com',
    messagingSenderId: '1082765640812',
    appId: '1:1082765640812:web:1b4afc278e9b9cd197c449',

};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get(); //retreieved the info

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ //sent information to the db
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;