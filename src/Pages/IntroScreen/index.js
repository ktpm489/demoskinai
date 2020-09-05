import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Container/CoreHeader/index';
import Button from '../../Components/Button';
import {width, height, isIphoneX, isNotchAndroid} from '../../Common/styles';
import images from '../../Assets/Images';
import BaseServices from '../../Common/services';
import CameraScreen from '../CameraScreen';

class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtImageUrl: '',
      fileResponse: '',
      isChange: false,
      currentPage: 0,
    };
  }

  onSelectPhoto = async () => {
    // const resImage = await BaseServices.selectImagePicker(false);
    const resImage = await BaseServices.selectImagePicker(false);
    // console.log('resImage', resImage);
    if (resImage) {
      this.setState({
        txtImageUrl: resImage.link,
        fileResponse: resImage.response,
        isChange: true,
      });
    }
  };

  onChangeCameraPage = () => {
    this.setState({
      txtImageUrl: '',
      fileResponse: '',
      currentPage: 1,
    });
  };

  setChangeImage = (res) => {
    this.setState({
      txtImageUrl: res.uri,
      fileResponse: res,
    });
  };

  goBackScreen = () => {
    this.setState({
      currentPage: 0,
    });
  };

  render() {
    const {txtImageUrl, currentPage} = this.state;
    return currentPage === 0 ? (
      <View>
        <Header title={'AI Skin Analysis'} />
        <ScrollView style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.subContainer1}>
              <TouchableOpacity
                style={styles.centerItem}
                onPress={this.onChangeCameraPage}>
                <View style={styles.imageContainer}>
                  <Image source={images.icCamera} style={styles.imgCamera} />
                </View>
                <Text style={styles.txtDes}> Take photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.centerItem}
                onPress={this.onSelectPhoto}>
                <View style={styles.imageContainer}>
                  <Image source={images.icFolder} style={styles.imgCamera} />
                </View>
                <Text style={styles.txtDes}> Upload your face</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.txtExample}> Example of qualified image</Text>
              <View style={styles.imageUploadContainer}>
                <View style={styles.imageOvalContainer}>
                  <View
                    style={
                      isIphoneX || isNotchAndroid
                        ? styles.imageOvalX
                        : styles.imageOval
                    }
                  />
                </View>
                <Image
                  source={txtImageUrl !== '' ? {uri: txtImageUrl} : images.skin}
                  style={styles.imageUpload}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                label={'Upload'}
                style={styles.buttonUpload}
                disabled={true}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    ) : (
      <CameraScreen
        setChangeImage={this.setChangeImage}
        goBackScreen={this.goBackScreen}
      />
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
    paddingVertical: height(1),
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
    marginTop: height(1),
    marginLeft: width(3),
    fontSize: width(4.5),
    color: '#ff85a6',
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
    // backgroundColor: 'red',
    zIndex: 999,
  },
  imageOval: {
    position: 'relative',
    height: height(46),
    width: width(85),
    top: height(6.7),
    left: width(7.5),
    borderWidth: width(0.5),
    borderRadius: height(23),
    borderColor: '#FF9DB8',
    transform: [{scaleY: 1.28}],
  },
  imageOvalX: {
    position: 'relative',
    height: height(40),
    width: width(85),
    top: height(10),
    left: width(7.5),
    borderWidth: width(0.5),
    borderRadius: height(20),
    borderColor: '#FF9DB8',
    transform: [{scaleY: 1.49}],
  },
  imageUpload: {width: '100%', height: '100%', resizeMode: 'stretch'},
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
