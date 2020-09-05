/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ResultScreen from './src/Pages/ResultScreen';
import IntroScreen from './src/Pages/IntroScreen';
import CameraAppScreen from './src/Pages/CameraScreen';

const App: () => React$Node = () => {
  return (
    <>
      <IntroScreen />
    </>
  );
};

export default App;
