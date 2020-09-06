/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ResultScreen from './src/Pages/ResultScreen';
import IntroScreen from './src/Pages/IntroScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  changePage = (page) => {
    this.setState({currentPage: page});
  };

  exitPage = () => {
    // console.log('Back Page');
    const {exitPage} = this.props;
    exitPage && exitPage();
  };

  render() {
    return this.state.currentPage === 0 ? (
      <IntroScreen exitPage={this.exitPage} changePage={this.changePage} />
    ) : (
      <ResultScreen changePage={this.changePage} />
    );
  }
}

export default App;
