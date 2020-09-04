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

  static async getChannelByCommunityId(communityId) {
    return this.postGateWay(`community/${communityId}/channel`);
  }

  static async getSettings() {
    return this.postGateWay('setting');
  }

  static async getMessageLink(link) {
    return this.postGateWay(`grab?link=${link}`);
  }

  static async getPublicCommunity(sort = 'createdAt', pageNum, numPage = 50) {
    const queryStr = QueryString.stringify({
      pageNum,
      numPage,
      sort,
      direction: sort === 'name' ? 'asc' : 'desc',
    });
    return this.postGateWay('community/public?' + queryStr);
  }

  static async getNotification(page, limit = 20) {
    const queryStr = QueryString.stringify({
      page,
      limit,
    });
    return this.postGateWay('user/notifications?' + queryStr);
  }

  static async uploadMultipleImage(arrImage) {
    let result = [];
    result = arrImage.map(async (itm) => {
      const imageLink = await BaseAPI.postUploadPhoto(itm);
      return imageLink;
    });
    return Promise.all(result);
  }

  static async postUploadPhoto(uri) {
    const promiseReturn = async () => {
      return ImageResizer.createResizedImage(uri, 1024, 768, 'JPEG', 80)
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

  static async getInventoryByAddress(
    address,
    pageNum,
    numPage,
    gameSymbol = undefined,
    key = undefined,
  ) {
    const queryBody = {
      pageNum,
      gameSymbol,
      numPage,
      key,
    };

    const queryStr = `inventory/${address}/list-inventory`;

    return this.postGateWay(queryStr, REQUEST_TYPE.GET, null, queryBody);
  }

  static async getNotificationsFromUserAddress(
    address,
    type = 'transaction,unblock,version,event,nft,greeting',
    page = 1,
    limit = 50,
  ) {
    const queryBody = {
      type: type,
      page: page,
      limit: limit,
    };
    return this.postGateWay(
      `user/${address}/notifications`,
      REQUEST_TYPE.GET,
      null,
      queryBody,
    );
  }

  static async getNotificationTop(address, limit = null) {
    const queryBody = limit ? {limit} : null;
    return this.postGateWay(
      `top-notification-history/${address}`,
      REQUEST_TYPE.GET,
      null,
      queryBody,
    );
  }

  static async getTransactionHistory(address, pageNum = 1, numPage = 200) {
    const queryBody = {
      pageNum,
      numPage,
      transactionType: 'normalInternal',
    };
    return this.postGateWay(
      `user/${address}/history/v2`,
      REQUEST_TYPE.GET,
      null,
      queryBody,
    );
  }

  static async getTransactionHistoryToken(
    userAddress,
    contractAddress,
    pageNum = 1,
    numPage = 200,
  ) {
    const queryBody = {
      pageNum,
      numPage,
      transactionType: 'token',
      contractAddress,
    };
    return this.postGateWay(
      `user/${userAddress}/history/v2`,
      REQUEST_TYPE.GET,
      null,
      queryBody,
    );
  }

  static async checkApiProblem() {
    return this.postGateWay('check-provider', REQUEST_TYPE.GET);
  }


  static async checkDownRanking() {
    return this.postGateWay('panto-belt/down-ranking', REQUEST_TYPE.GET);
  }

  static async checkCanPlayGame() {
    return this.postGateWay('panto-belt/check', REQUEST_TYPE.GET);
  }

  static async getUserByAddress(address) {
    return this.postGateWay(`user/${address}`, REQUEST_TYPE.GET);
  }

  static async resendConfirmationCode(email, lang) {
    const queryBody = {
      email,
      lang,
    };
    return this.postGateWay(
      'user/resend-code',
      REQUEST_TYPE.GET,
      null,
      queryBody,
    );
  }

  static async verifyConfirmationCode(code) {
    const queryBody = {code};
    return this.postGateWay('user/verify', REQUEST_TYPE.GET, null, queryBody);
  }

  static async checkValidEmailForRegisterAccount(email) {
    const queryBody = {email};
    return this.postGateWay(
      'user/check-email',
      REQUEST_TYPE.GET,
      null,
      queryBody,
    );
  }

  static async getBanners() {
    return this.postGateWay('banners', REQUEST_TYPE.GET);
  }

  static async getTwitterUserById(twitterUserById, hashTag) {
    return this.postGateWay(
      `twitter-user/${twitterUserById}/${hashTag}`,
      REQUEST_TYPE.GET,
    );
  }

  static async postGateWay(url, method = REQUEST_TYPE.GET, body, queryBody) {
    const callApi = new Promise(async (resolve, reject) => {
      try {
        const params = {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: '',
          },
        };
        if (body) {
          params.body = JSON.stringify(body);
        }
        let queryStr = '';
        if (queryBody) {
          queryStr = '?' + QueryString.stringify(queryBody);
        }
        // console.log('settings().server.api + url + queryStr', settings().server.api + url + queryStr)
        // console.log('params', params)

        const response = await fetch(
          settings().server.api + url + queryStr,
          params,
        );
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
