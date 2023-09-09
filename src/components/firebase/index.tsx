import {firebase} from '@react-native-firebase/app';
import {GoogleSignin} from 'react-native-google-signin';

const firebaseConfig = {
  apiKey: 'AIzaSyCGWlHcS8k6hJ0_PlEqukiWYhSHv42c-as',
  authDomain: 'fir-app-791ab.firebaseapp.com',
  projectId: 'fir-app-791ab',
  storageBucket: 'fir-app-791ab.appspot.com',
  messagingSenderId: '614149550639',
  appId: '1:614149550639:android:3ab3732b65ea780c7e0cda',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

GoogleSignin.configure({
  webClientId:
    '614149550639-tjqsovnakkqpshje82q154pkqbg2fjpl.apps.googleusercontent.com',
});

export default firebase;
