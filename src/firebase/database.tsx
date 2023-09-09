import {firebase} from '@react-native-firebase/database';

export const database = firebase
  .app()
  .database(
    'https://fir-app-791ab-default-rtdb.asia-southeast1.firebasedatabase.app/',
  );
