/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';
AppRegistry.registerComponent(appName, () => App);

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'new NativeEventEmitter',
  'ColorPropType will be removed',
]);
