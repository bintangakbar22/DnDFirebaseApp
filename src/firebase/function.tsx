import firebase, {IPayloadAuth} from '.';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from 'react-native-google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from '@constants/keys';

export interface FirebaseUserCredential {
  user: FirebaseUser | null;
  additionalUserInfo?: AdditionalUserInfo | null;
}

export interface GoogleSignInUser {
  idToken: string; // Google ID token
  accessToken: string; // Google access token
  refreshToken?: string | null; // Google refresh token (may be null)
  user: {
    id: string; // User ID
    name: string; // User's full name
    givenName: string; // User's first name
    familyName: string; // User's last name
    email: string; // User's email address
    photo: string; // URL of user's profile picture
  };
}

export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  // Add other user-related properties here if needed
}

export interface AdditionalUserInfo {
  providerId: string;
  isNewUser: boolean;
  // Add other additional user info properties here if needed
}

const registerWithEmailPassword = async (
  payload: IPayloadAuth,
): Promise<FirebaseUserCredential> => {
  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password);
  return userCredential;
};

// Log in an existing user
const loginWithEmailPassword = async (
  payload: IPayloadAuth,
): Promise<FirebaseUserCredential> => {
  const userCredential = await firebase
    .auth()
    .signInWithEmailAndPassword(payload.email, payload.password);
  return userCredential;
};

// Google Sign-In
const signInWithGoogle = async (): Promise<
  FirebaseUserCredential | undefined
> => {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    await AsyncStorage.setItem(Keys.token, idToken ?? '');
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    return userCredential;
  } catch (error) {
    console.error(error);
  }
};

const signOutFromGoogle = async (): Promise<void> => {
  try {
    const hasTokenGoogle = await AsyncStorage.getItem(Keys.token);
    if (hasTokenGoogle && hasTokenGoogle !== '') {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      return;
    }
    await firebase.auth().signOut();
  } catch (error) {
    console.error('Google Sign-Out Error:', error);
  }
};

const getValueDatabase = async (ref: string): Promise<any> => {
  await firebase
    .app()
    .database(
      'https://fir-app-791ab-default-rtdb.asia-southeast1.firebasedatabase.app/',
    )
    .ref(ref)
    .once('value')
    .then((snapshot: any) => {
      return snapshot.val();
    });
};

export {
  registerWithEmailPassword,
  loginWithEmailPassword,
  signInWithGoogle,
  signOutFromGoogle,
  getValueDatabase,
};
