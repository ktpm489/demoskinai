'use strict';
import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {
  width,
  height,
  heightNavBar,
  isIphoneX,
  isNotchAndroid,
} from '../../Common/styles';

export default class ExampleApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            height: heightNavBar,
            backgroundColor: 'red',
          }}></View>
        <View style={styles.imageOvalContainer}>
          <View
            style={
              isIphoneX || isNotchAndroid ? styles.imageOvalX : styles.imageOval
            }
          />
        </View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            height: height(13),
          }}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 1, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: width(3),
    paddingHorizontal: width(3),
    alignSelf: 'center',
    // margin: height(3),
  },
  imageOvalContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999,
  },
  imageOvalX: {
    position: 'relative',
    height: height(46),
    width: width(95),
    top: height(15) + heightNavBar,
    left: width(2.5),
    borderWidth: width(0.5),
    borderRadius: height(25),
    borderColor: '#FF9DB8',
    transform: [{scaleY: 1.6}],
  },
  imageOval: {
    position: 'relative',
    height: height(52),
    width: width(92),
    top: height(11) + heightNavBar,
    left: width(4),
    borderWidth: width(0.5),
    borderRadius: height(25),
    borderColor: '#FF9DB8',
    transform: [{scaleY: 1.4}],
  },
});
