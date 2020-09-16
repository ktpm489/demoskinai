import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions, Switch, Text} from 'react-native';
import {width, height} from '../Common/styles';
const MYWIDTH = Dimensions.get('window').width;
const MYHEIGHT = Dimensions.get('window').height;
const heighPercent = 0.5;
const widthMargin = 0 / 100;
const widthImage = 640;
const heightImage = 640;
const ratio = (width(100) - width(2)) / widthImage;
// const ratio = MYWIDTH / widthImage;
console.log('ratio', ratio, MYWIDTH , ratio * 175);
const ratioHeight = MYWIDTH / heightImage;

let drawSpotArr = [
  {
    height: 2.6850002,
    left: 282.90002,
    top: 260.48,
    width: 2.66625,
  },
  {
    height: 3.1325002,
    left: 144.8475,
    top: 128.91501,
    width: 2.9625,
  },
  {
    height: 2.6850002,
    left: 298.305,
    top: 124.887505,
    width: 2.66625,
  },
  {
    height: 3.5800002,
    left: 149.29126,
    top: 119.5175,
    width: 2.66625,
  },
  {
    height: 2.6850002,
    left: 173.88,
    top: 112.3575,
    width: 2.66625,
  },
  {
    height: 2.2375002,
    left: 197.58,
    top: 85.955,
    width: 2.3700001,
  },
  {
    height: 3.1325002,
    left: 166.1775,
    top: 148.1575,
    width: 3.25875,
  },
  {
    height: 3.1325002,
    left: 313.41376,
    top: 104.75,
    width: 2.9625,
  },
  {
    height: 5.3700004,
    left: 291.49127,
    top: 94.457504,
    width: 5.3325,
  },
  {
    height: 3.1325002,
    left: 296.5275,
    top: 104.75,
    width: 2.66625,
  },
  {
    height: 3.5800002,
    left: 295.935,
    top: 112.3575,
    width: 3.25875,
  },
  {
    height: 2.6850002,
    left: 284.97375,
    top: 277.48502,
    width: 2.3700001,
  },
  {
    height: 3.1325002,
    left: 222.76126,
    top: 224.68001,
    width: 2.9625,
  },
  {
    height: 2.2375002,
    left: 222.16876,
    top: 260.48,
    width: 2.3700001,
  },
  {
    height: 1.7900001,
    left: 159.95625,
    top: 285.09253,
    width: 1.48125,
  },
  {
    height: 3.1325002,
    left: 297.12,
    top: 255.11,
    width: 2.66625,
  },
  {
    height: 3.5800002,
    left: 283.19626,
    top: 254.215,
    width: 3.25875,
  },
  {
    height: 4.0275,
    left: 272.53125,
    top: 98.485,
    width: 3.555,
  },
  {
    height: 2.2375002,
    left: 168.84375,
    top: 171.875,
    width: 2.3700001,
  },
  {
    height: 3.1325002,
    left: 297.71252,
    top: 87.745,
    width: 2.9625,
  },
  {
    height: 2.6850002,
    left: 151.66125,
    top: 131.6,
    width: 2.66625,
  },
  {
    height: 2.6850002,
    left: 180.69376,
    top: 268.08752,
    width: 2.07375,
  },
  {
    height: 1.7900001,
    left: 279.9375,
    top: 270.77252,
    width: 1.7775,
  },
  {
    height: 4.0275,
    left: 234.9075,
    top: 244.8175,
    width: 2.9625,
  },
  {
    height: 4.0275,
    left: 171.21375,
    top: 283.75,
    width: 3.555,
  },
  {
    height: 2.6850002,
    left: 301.26752,
    top: 99.8275,
    width: 2.66625,
  },
  {
    height: 4.0275,
    left: 249.1275,
    top: 86.85,
    width: 4.44375,
  },
  {
    height: 3.1325002,
    left: 140.7,
    top: 140.55,
    width: 2.3700001,
  },
  {
    height: 2.2375002,
    left: 233.13,
    top: 183.0625,
    width: 2.07375,
  },
  {
    height: 2.2375002,
    left: 175.6575,
    top: 140.9975,
    width: 2.07375,
  },
  {
    height: 4.9225,
    left: 123.22125,
    top: 191.565,
    width: 3.25875,
  },
  {
    height: 2.6850002,
    left: 160.2525,
    top: 145.92001,
    width: 2.66625,
  },
  {
    height: 2.6850002,
    left: 192.54376,
    top: 106.54,
    width: 2.9625,
  },
  {
    height: 2.2375002,
    left: 274.0125,
    top: 251.53001,
    width: 2.3700001,
  },
  {
    height: 2.2375002,
    left: 154.62375,
    top: 161.13501,
    width: 2.07375,
  },
  {
    height: 2.6850002,
    left: 161.14125,
    top: 90.43,
    width: 2.3700001,
  },
];

let drawMoleArr = [
  {
    height: 4.3347325,
    left: 169.53064,
    top: 138.73907,
    width: 4.3193827,
  },
  {
    height: 4.2167935,
    left: 299.43115,
    top: 273.34082,
    width: 4.3841505,
  },
  {
    height: 5.0870376,
    left: 256.96747,
    top: 135.54189,
    width: 6.705142,
  },
  {
    height: 3.50127,
    left: 188.73407,
    top: 245.4831,
    width: 3.1709025,
  },
  {
    height: 3.689143,
    left: 189.96622,
    top: 256.3559,
    width: 3.0381,
  },
  {
    height: 5.1408606,
    left: 146.39609,
    top: 150.43567,
    width: 3.709733,
  },
  {
    height: 2.9824083,
    left: 152.8074,
    top: 226.98373,
    width: 2.0779355,
  },
  {
    height: 3.1042912,
    left: 167.62225,
    top: 133.36768,
    width: 2.4166152,
  },
  {
    height: 3.0204208,
    left: 277.39984,
    top: 124.215096,
    width: 3.1659288,
  },
  {
    height: 5.1909614,
    left: 206.9251,
    top: 195.7117,
    width: 5.1430516,
  },
  {
    height: 2.1726775,
    left: 178.31725,
    top: 317.062,
    width: 2.6337001,
  },
  {
    height: 5.7953253,
    left: 168.9584,
    top: 277.27203,
    width: 4.5531807,
  },
  {
    height: 2.6808848,
    left: 217.9978,
    top: 306.85248,
    width: 3.054236,
  },
  {
    height: 3.6807847,
    left: 267.10452,
    top: 295.3675,
    width: 4.018882,
  },
  {
    height: 2.4255946,
    left: 231.88802,
    top: 125.12554,
    width: 2.442007,
  },
  {
    height: 4.718478,
    left: 180.94447,
    top: 192.16893,
    width: 5.713947,
  },
  {
    height: 4.3795576,
    left: 279.02936,
    top: 368.7864,
    width: 4.950895,
  },
  {
    height: 3.8924665,
    left: 249.33806,
    top: 389.56168,
    width: 4.6543384,
  },
  {
    height: 3.820304,
    left: 285.42596,
    top: 216.64441,
    width: 5.236482,
  },
  {
    height: 2.4451392,
    left: 174.54404,
    top: 219.98831,
    width: 3.0489244,
  },
  {
    height: 2.7223735,
    left: 248.29533,
    top: 154.99098,
    width: 3.35351,
  },
  {
    height: 4.0057306,
    left: 177.20752,
    top: 105.09798,
    width: 5.22641,
  },
  {
    height: 4.935776,
    left: 278.85693,
    top: 312.75928,
    width: 4.251005,
  },
];

let drawBlackHeadArr = [
  {
    height: 3,
    left: 224,
    top: 234,
    width: 1,
  },
  {
    height: 2,
    left: 228,
    top: 234,
    width: 1,
  },
  {
    height: 2,
    left: 239,
    top: 235,
    width: 1,
  },
  {
    height: 3,
    left: 217,
    top: 238,
    width: 1,
  },
  {
    height: 2,
    left: 242,
    top: 239,
    width: 2,
  },
  {
    height: 1,
    left: 222,
    top: 241,
    width: 3,
  },
  {
    height: 2,
    left: 246,
    top: 242,
    width: 2,
  },
  {
    height: 2,
    left: 242,
    top: 244,
    width: 1,
  },
  {
    height: 2,
    left: 239,
    top: 245,
    width: 1,
  },
  {
    height: 3,
    left: 235,
    top: 246,
    width: 1,
  },
  {
    height: 2,
    left: 246,
    top: 250,
    width: 2,
  },
  {
    height: 2,
    left: 215,
    top: 252.99998,
    width: 1,
  },
  {
    height: 1,
    left: 242,
    top: 256,
    width: 2,
  },
  {
    height: 2,
    left: 228,
    top: 257,
    width: 2,
  },
  {
    height: 2,
    left: 233,
    top: 257,
    width: 1,
  },
  {
    height: 3,
    left: 238,
    top: 259,
    width: 1,
  },
  {
    height: 2,
    left: 230,
    top: 261,
    width: 1,
  },
  {
    height: 2,
    left: 232,
    top: 263,
    width: 2,
  },
  {
    height: 2,
    left: 239,
    top: 265,
    width: 1,
  },
  {
    height: 2,
    left: 252,
    top: 265,
    width: 1,
  },
  {
    height: 2,
    left: 204,
    top: 266,
    width: 1,
  },
  {
    height: 1,
    left: 218,
    top: 267,
    width: 2,
  },
  {
    height: 2,
    left: 232,
    top: 268,
    width: 2,
  },
  {
    height: 1,
    left: 240,
    top: 270,
    width: 2,
  },
  {
    height: 2,
    left: 242,
    top: 271,
    width: 2,
  },
  {
    height: 1,
    left: 224,
    top: 273,
    width: 2,
  },
  {
    height: 1,
    left: 232,
    top: 273,
    width: 2,
  },
  {
    height: 2,
    left: 238,
    top: 274,
    width: 2,
  },
  {
    height: 2,
    left: 214,
    top: 275,
    width: 2,
  },
  {
    height: 2,
    left: 240,
    top: 276,
    width: 2,
  },
  {
    height: 1,
    left: 256,
    top: 276,
    width: 2,
  },
  {
    height: 1,
    left: 208,
    top: 280,
    width: 3,
  },
  {
    height: 1,
    left: 213,
    top: 280,
    width: 2,
  },
];

let drawAcneArr = [
  {
    height: 7.309048,
    left: 309.42255,
    top: 171.81128,
    width: 6.6809707,
  },
  {
    height: 6.2520804,
    left: 169.20375,
    top: 276.48035,
    width: 3.1685903,
  },
  {
    height: 5.767039,
    left: 290.75006,
    top: 94.3802,
    width: 6.1970425,
  },
  {
    height: 8.022681,
    left: 122.398026,
    top: 191.98943,
    width: 5.8858223,
  },
  {
    height: 6.1567397,
    left: 195.4553,
    top: 309.66357,
    width: 3.7119436,
  },
  {
    height: 7.2025275,
    left: 145.60524,
    top: 167.22795,
    width: 5.838116,
  },
  {
    height: 6.2806835,
    left: 204.01758,
    top: 181.2925,
    width: 3.7641141,
  },
  {
    height: 4.045937,
    left: 146.1459,
    top: 150.12418,
    width: 3.8982382,
  },
  {
    height: 4.8684034,
    left: 266.8432,
    top: 295.11566,
    width: 4.266935,
  },
  {
    height: 4.2072735,
    left: 166.4458,
    top: 85.98338,
    width: 4.395288,
  },
  {
    height: 6.433869,
    left: 319.7661,
    top: 252.07594,
    width: 3.7427826,
  },
  {
    height: 6.0207386,
    left: 217.77045,
    top: 160.43848,
    width: 4.074728,
  },
  {
    height: 4.0275908,
    left: 300.934,
    top: 143.19131,
    width: 3.9761188,
  },
  {
    height: 6.2916865,
    left: 278.57785,
    top: 101.67575,
    width: 5.8204803,
  },
  {
    height: 3.9498773,
    left: 271.7678,
    top: 75.19638,
    width: 4.2049127,
  },
  {
    height: 5.573434,
    left: 257.08267,
    top: 135.68828,
    width: 5.8756866,
  },
  {
    height: 5.3464336,
    left: 170.46912,
    top: 283.60422,
    width: 6.623103,
  },
  {
    height: 5.6651525,
    left: 297.3596,
    top: 254.56303,
    width: 3.815949,
  },
  {
    height: 4.4193134,
    left: 246.70079,
    top: 153.50858,
    width: 5.160572,
  },
  {
    height: 5.8306513,
    left: 284.0643,
    top: 74.00894,
    width: 7.8937197,
  },
  {
    height: 5.6927443,
    left: 116.837685,
    top: 285.6156,
    width: 3.4967244,
  },
  {
    height: 7.792595,
    left: 115.954865,
    top: 232.01332,
    width: 5.4843884,
  },
  {
    height: 5.132768,
    left: 230.04364,
    top: 122.98874,
    width: 6.833013,
  },
  {
    height: 5.040422,
    left: 279.16473,
    top: 368.36026,
    width: 5.1556234,
  },
  {
    height: 4.2630105,
    left: 189.48233,
    top: 255.52982,
    width: 3.8115408,
  },
  {
    height: 8.171057,
    left: 327.03912,
    top: 259.94067,
    width: 5.154516,
  },
  {
    height: 3.6758857,
    left: 144.9862,
    top: 129.88823,
    width: 3.8271794,
  },
  {
    height: 4.310575,
    left: 299.35822,
    top: 272.36133,
    width: 4.3624735,
  },
  {
    height: 8.215737,
    left: 152.7144,
    top: 174.1125,
    width: 6.4341855,
  },
  {
    height: 3.5338416,
    left: 296.07343,
    top: 104.85933,
    width: 3.7231686,
  },
  {
    height: 4.3109493,
    left: 278.56403,
    top: 288.85266,
    width: 4.5562625,
  },
];

const renderData = (data, color = 'red') => {
  return data.map(function (item, i) {
    return (
      <View
        style={[
          styles.rectangle,
          {
            height: ratioHeight * item.height,
            left: ratio * item.left,
            top: ratioHeight * item.top,
            width: ratio * item.width,
            borderColor: color,
          },
        ]}
      />
    );
  });
};

class DisplayAnImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSpotEnabled: false,
      isMoleEnabled: false,
      isBlackEnabled: false,
      isAnceEnabled: false,
      isPimpleEnabled: false,
      drawSpotArrData: [],
      drawMoleArrData: [],
      drawBlackHeadArrData: [],
      drawAcneArrData: [],
      drawPimpleArrData: [],
    };
  }

  componentDidMount() {
    this.processGeneralConclusion();
    this.processSpecialResult();
  }

  processGeneralConclusion = () => {
    const {dataTransfer} = this.props;
    let itemSkinMole = dataTransfer.generalConclusion.data.find((item) => {
      return item.key === 'SkinMole';
    });
    this.setState({drawMoleArrData: itemSkinMole.drawArr});
  };

  processSpecialResult = () => {
    let drawSpotArrDataInput = [];
    let drawBlackHeadArrDataInput = [];
    let drawAcneArrDataInput = [];
    let drawPimpleArrDataInput = [];
    const {dataTransfer} = this.props;
    for (let i = 0; i < dataTransfer.specialResult.data.length; i++) {
      let itemData = dataTransfer.specialResult.data[i];
      for (let j = 0; j < itemData.data.length; j++) {
        let eachData = itemData.data[j];
        if (eachData.key === 'SkinBlackHeads') {
          drawBlackHeadArrDataInput = eachData.drawArr;
        } else if (eachData.key === 'SkinSpot') {
          drawSpotArrDataInput = eachData.drawArr;
        } else if (eachData.key === 'SkinPimple') {
          drawPimpleArrDataInput = eachData.drawArr;
        } else if (eachData.key === 'SkinAcne') {
          drawAcneArrDataInput = eachData.drawArr;
        }
      }
    }
    // console.log('drawBlackHeadArrDataInput', drawBlackHeadArrDataInput);
    // console.log('drawSpotArrDataInput', drawSpotArrDataInput);
    // console.log('drawPimpleArrDataInput', drawPimpleArrDataInput);
    // console.log('drawAcneArrDataInput', drawAcneArrDataInput);
    this.setState({
      drawSpotArrData: drawSpotArrDataInput,
      drawBlackHeadArrData: drawBlackHeadArrDataInput,
      drawAcneArrData: drawAcneArrDataInput,
      drawPimpleArrData: drawPimpleArrDataInput,
    });
  };

  // spot
  toggleSpotSwitch = () => {
    this.setState({isSpotEnabled: !this.state.isSpotEnabled});
  };
  // mole
  toggleMoleSwitch = () => {
    this.setState({isMoleEnabled: !this.state.isMoleEnabled});
  };
  // blackhead
  toggleBlackSwitch = () => {
    this.setState({isBlackEnabled: !this.state.isBlackEnabled});
  };
  // ance
  toggleAnceSwitch = () => {
    this.setState({
      isAnceEnabled: !this.state.isAnceEnabled,
    });
  };
  // pimple
  togglePimpleSwitch = () => {
    this.setState({
      isPimpleEnabled: !this.state.isPimpleEnabled,
    });
  };

  // SkinBlackHeads
  // SkinMole (normal)
  // SkinSpot
  // SkinPimple
  // SkinAcne

  render() {
    const {
      isSpotEnabled,
      isMoleEnabled,
      isBlackEnabled,
      isAnceEnabled,
      isPimpleEnabled,
      drawMoleArrData,
      drawSpotArrData,
      drawBlackHeadArrData,
      drawAcneArrData,
      drawPimpleArrData,
    } = this.state;
    const {dataTransfer, language} = this.props;
    console.log(dataTransfer, language);
    let isEN = language === 'en';
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: dataTransfer.image_info.url
                ? dataTransfer.image_info.url
                : 'http://res.cloudinary.com/hobbg5cc2/image/upload/v1598702124/uploads/images/1598702122594.jpg',
            }}
          />
          {isSpotEnabled ? renderData(drawSpotArrData, 'orange') : null}
          {isMoleEnabled ? renderData(drawMoleArrData, 'red') : null}
          {isBlackEnabled ? renderData(drawBlackHeadArrData, 'pink') : null}
          {isAnceEnabled ? renderData(drawAcneArrData, 'yellow') : null}
          {isPimpleEnabled ? renderData(drawPimpleArrData, 'green') : null}
        </View>
        <View style={styles.viewContainer}>
          <View
            style={[
              styles.itemContainer,
              drawSpotArrData.length === 0 && styles.disabledOpt,
            ]}>
            <Text style={styles.textContainer}>
              {isEN ? 'Spot' : 'Đốm thâm nám'}
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'orange'}}
              onValueChange={this.toggleSpotSwitch}
              value={isSpotEnabled}
              disabled={drawSpotArrData.length === 0}
            />
          </View>
          <View
            style={[
              styles.itemContainer,
              drawAcneArrData.length === 0 && styles.disabledOpt,
            ]}>
            <Text style={styles.textContainer}> {isEN ? 'Acne' : 'Mụn'}</Text>
            <Switch
              trackColor={{false: '#767577', true: 'yellow'}}
              onValueChange={this.toggleAnceSwitch}
              value={isAnceEnabled}
              disabled={drawAcneArrData.length === 0}
            />
          </View>
        </View>
        <View style={styles.viewContainer}>
          <View
            style={[
              styles.itemContainer,
              drawPimpleArrData.length === 0 && styles.disabledOpt,
            ]}>
            <Text style={styles.textContainer}>
              {isEN ? 'Pimple' : 'Mụn Nhọt'}
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'green'}}
              onValueChange={this.togglePimpleSwitch}
              value={isPimpleEnabled}
              disabled={drawPimpleArrData.length === 0}
            />
          </View>
          <View
            style={[
              styles.itemContainer,
              drawBlackHeadArrData.length === 0 && styles.disabledOpt,
            ]}>
            <Text style={styles.textContainer}>
              {isEN ? 'Blackhead' : 'Mụn Đầu Đen'}
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'pink'}}
              onValueChange={this.toggleBlackSwitch}
              value={isBlackEnabled}
              disabled={drawBlackHeadArrData.length === 0}
            />
          </View>
        </View>
        <View style={styles.viewContainer}>
          <View
            style={[
              styles.itemContainer,
              drawMoleArrData.length === 0 && styles.disabledOpt,
            ]}>
            <Text style={styles.textContainer}>
              {isEN ? 'Mole' : 'Nốt ruồi'}
            </Text>
            <Switch
              trackColor={{false: '#767577', true: 'red'}}
              onValueChange={this.toggleMoleSwitch}
              disabled={drawMoleArrData.length === 0}
              value={isMoleEnabled}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    width: width(20),
  },
  disabledOpt: {
    opacity: 0.3,
  },
  enableOpt: {
    opacity: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingTop: height(2),
  },
  container: {
    // marginHorizontal: MYWIDTH * widthMargin,
    // padding : 0,
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    // height: 400,
  },
  logo: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    // resizeMode: 'stretch',
    resizeMode: 'stretch',
  },
  imageContainer: {
    width: '100%',
    height: width(100),
  },
  rectangle: {
    borderWidth: 1,
    position: 'absolute',
  },
});

export default DisplayAnImage;
