import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const dataItemRender = (itemData = null, language = 'en') => {
  return itemData !== null ? (
    <View style={styles.bottomContainer}>
      {itemData.title ? (
        <Text style={[styles.textContainer, styles.textTitleContainer]}>
          {language === 'en' ? itemData.title.en : itemData.title.vi}
        </Text>
      ) : null}

      {itemData.data !== undefined
        ? itemData.data.map((item, i) => {
            return (
              <Text style={styles.textDesContainer}>
                {language === 'en' ? item.valueEN : item.valueVI}
              </Text>
            );
          })
        : null}
      {itemData.valueEN !== undefined && itemData.valueVI !== undefined ? (
        <Text style={styles.textDesContainer}>
          {language === 'en' ? itemData.valueEN : itemData.valueVI}
        </Text>
      ) : null}
    </View>
  ) : null;
};

const LotsOfGreetings = (props) => {
  const {dataTransfer, language} = props;
  // console.log('dataTransfer1111', dataTransfer);
  // console.log('language', language, dataTransfer.title.en);
  return dataTransfer !== undefined ? (
    <View style={[styles.center, styles.containerData]}>
      <View style={styles.subContainer}>
        <LinearGradient
          start={{x: 0.5, y: 0.5}}
          end={{x: 1, y: 1}}
          locations={[0, 1]}
          colors={['#FF9DB8', '#FAFAFA']}
          style={styles.subContainer1}>
          <Text style={styles.subContainer2}>
            {language === 'en' ? dataTransfer.title.en : dataTransfer.title.vi}
          </Text>
        </LinearGradient>
        {dataTransfer.data !== null
          ? dataTransfer.data.map((item, i) => {
              return dataItemRender(item, language);
            })
          : null}
      </View>
    </View>
  ) : null;
};

// Later on in your styles..
var styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  containerData: {
    top: 50,
    bottom: 40,
  },
  textContainer: {
    padding: 10,
  },
  textTitleContainer: {
    fontWeight: 'bold',
    color: 'black',
  },
  textDesContainer: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  subContainer: {
    margin: 40,
    padding: 40,
    backgroundColor: 'transparent',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  bottomContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '100%',
    // alignContent: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 10,
    // alignItems: 'center',
  },
  subContainer1: {
    paddingHorizontal: 20,
    marginLeft: 4,
    position: 'absolute',
    top: -15,
    left: 5,
    borderRadius: 5,
  },
  subContainer2: {
    fontSize: 14,
    textAlign: 'center',
    margin: 5,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default LotsOfGreetings;
