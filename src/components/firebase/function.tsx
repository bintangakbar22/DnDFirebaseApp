import firebase from '.';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from 'react-native-google-signin';

const registerWithEmailPassword = (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

// Log in an existing user
const loginWithEmailPassword = (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

// Google Sign-In
const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error(error);
  }
};

export {registerWithEmailPassword, loginWithEmailPassword, signInWithGoogle};
