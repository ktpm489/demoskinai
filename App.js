/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SkinAI from './SkinAI';

class App extends React.Component {
  render() {
    return (
      <SkinAI
        linkserver="https://shrouded-brushlands-68077.herokuapp.com"
        exitPage={() => {}}
      />
    );
  }
}

export default App;
