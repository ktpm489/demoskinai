import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Container/CoreHeader/index';
import Button from '../../Components/Button';
import {width, height} from '../../Common/styles';
import images from '../../Assets/Images';
import CameraScreen from 'react-native-camera-demo';

class ResultScreen extends React.Component {
  render() {
    return (
      <View>
        <Header title={'AI Skin Analysis'} />
        <CameraScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '90%',
    paddingBottom: 10,
    width: '100%',
    backgroundColor: 'transparent',
  },
  subContainer: {position: 'relative', paddingBottom: 40},
  subContainer1: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
  },
  imgCamera: {
    height: width(5),
    width: width(5),
    resizeMode: 'contain',
  },
  imageContainer: {
    padding: width(4),
    borderRadius: width(10),
    borderColor: 'transparent',
    backgroundColor: 'white',
    borderWidth: width(0.5),
  },
  centerItem: {
    alignItems: 'center',
    paddingVertical: height(2),
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: width(4.5),
    color: 'black',
    marginTop: height(1),
  },
  txtDes: {
    fontSize: width(3),
    color: 'gray',
    marginTop: height(1),
  },
  txtExample: {
    marginTop: height(2),
    marginLeft: width(3),
    fontSize: width(4.5),
    color: 'pink',
  },
  imageUploadContainer: {
    width: '100%',
    height: height(60),
    marginTop: height(2),
  },
  imageOvalContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999,
  },
  imageOval: {
    position: 'relative',
    height: height(40),
    width: width(85),
    top: height(10),
    left: width(7.5),
    borderWidth: width(0.5),
    borderRadius: height(20),
    borderColor: '#FF9DB8',
    transform: [{scaleY: 1.5}],
  },
  imageUpload: {width: '100%', height: '100%', resizeMode: 'cover'},
  buttonContainer: {
    width: '100%',
    marginTop: height(2),
    alignItems: 'center',
  },
  buttonUpload: {
    backgroundColor: '#ff85a6',
  },
});
export default ResultScreen;
