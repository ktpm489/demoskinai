import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Container/CoreHeader/index';
import {
  width,
  heightScale,
  topNavBarIOS,
  heightNavBar,
  isIphoneX,
  height,
  scale,
} from '../../Common/styles';
import images from '../../Assets/Images';

class ResultScreen extends React.Component {
  render() {
    return (
      <View>
        <Header title={'AI Skin Analysis'} />
        <ScrollView style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.subContainer1}>
              <TouchableOpacity style={styles.centerItem}>
                <View style={styles.imageContainer}>
                  <Image source={images.icCamera} style={styles.imgCamera} />
                </View>
                <Text style={styles.txtTitle}> Camera</Text>
                <Text style={styles.txtDes}> Take photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.centerItem}>
                <View style={styles.imageContainer}>
                  <Image source={images.icFolder} style={styles.imgCamera} />
                </View>
                <Text style={styles.txtTitle}> From Files</Text>
                <Text style={styles.txtDes}> Upload your face</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.txtExample}> Example of qualified image</Text>
              <View
                style={{
                  width: '100%',
                  height: height(60),
                  marginTop: height(2),
                  // backgroundColor: 'red',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 999,
                  }}>
                  <View
                    style={{
                      position: 'relative',
                      height: height(40),
                      width: width(85),
                      top: height(10),
                      left: width(7.5),
                      borderWidth: width(0.5),
                      borderRadius: height(20),
                      borderColor: '#FF9DB8',
                      transform: [{scaleY: 1.5}],
                    }}></View>
                </View>

                <Image
                  source={images.skin}
                  style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                />
              </View>
            </View>
          </View>
        </ScrollView>
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
});
export default ResultScreen;
