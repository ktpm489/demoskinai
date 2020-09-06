import QueryString from 'query-string';
import {REQUEST_TYPE} from '../Common/constants';
import settings from '../Controller/settings';
import ImageResizer from 'react-native-image-resizer';
import RNFetchBlob from 'rn-fetch-blob';

export default class BaseAPI {
  static async getData(type, queryBody) {
    return this.postGateWay(type, REQUEST_TYPE.GET, undefined, queryBody);
  }

  static async postData(type, body) {
    return this.postGateWay(type, REQUEST_TYPE.POST, body);
  }

  static async putData(type, body) {
    return this.postGateWay(type, REQUEST_TYPE.PUT, body);
  }

  static async postUploadPhoto(uri) {
    const promiseReturn = async () => {
      return ImageResizer.createResizedImage(uri, 640, 640, 'JPEG', 100)
        .then((response) => {
          return RNFetchBlob.fs
            .readFile(response.path, 'base64')
            .then(async (base64) => {
              const body = {base64};
              return this.postGateWay(
                'photo/upload-from-base64',
                REQUEST_TYPE.POST,
                body,
              );
            })
            .catch(() => {
              return '';
            });
        })
        .catch(() => {
          return '';
        });
    };
    const responseImage = await promiseReturn();
    return responseImage ? responseImage.imageUrl : '';
  }

  static async checkApiProblem() {
    return this.postGateWay('check-provider', REQUEST_TYPE.GET);
  }

  static async getUserByAddress(address) {
    return this.postGateWay(`user/${address}`, REQUEST_TYPE.GET);
  }

  static async postGateWay(url, method = REQUEST_TYPE.GET, body, queryBody) {
    const callApi = new Promise(async (resolve, reject) => {
      try {
        const params = {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        };
        if (body) {
          params.body = JSON.stringify(body);
        }
        let queryStr = '';
        if (queryBody) {
          queryStr = '?' + QueryString.stringify(queryBody);
        }
        const response = await fetch(url + queryStr, params);
        // console.log('response', response)
        const responJson = await response.json();
        if (response.status === 200) {
          resolve(responJson);
        }
        resolve(null);
      } catch (error) {
        reject(error);
      }
    });
    // Close promise if over time
    const callRemove = new Promise(function (resolve, reject) {
      setTimeout(() => {
        return reject('OverTime');
      }, 20000);
    });

    return Promise.race([callApi, callRemove])
      .then((result) => {
        return result;
      })
      .catch((e) => {
        if (e === 'OverTime') {
          // EventRegister.emit('internetChange', I18n.t('Initial.connectErr'))
        }
        return null;
      });
  }
}
