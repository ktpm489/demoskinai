import {APP_ENVIRONMENT} from 'common/constants';
import storeRedux from 'controller/Redux/store/configureStore';
// import { logDebug } from 'common/function'

// Sync latest redux state
let reduxState = storeRedux.getState();

storeRedux.subscribe(() => {
  reduxState = storeRedux.getState();
});

const settings = () => {
  const {environmentRedux} = reduxState;
  const isMainNet =
    !environmentRedux || environmentRedux === APP_ENVIRONMENT.MAINNET;

  return {
    oneSignalId: 'bf875c0e-f7a7-423c-8283-8f54da0dd377',
    server: {
      api: isMainNet
        ? 'https://dev-api.lipsjp.com/'
        : 'https://dev-api.lipsjp.com/',
      apiPantographWeb: isMainNet
        ? 'https://api.pantograph.app/'
        : 'https://dev-api.pantograph.app/',
      socket: isMainNet
        ? 'https://wallet-socket.pantograph.app/chat'
        : 'http://149.28.151.2:3002/chat',
      urlSticker:
        'https://s3-ap-northeast-1.amazonaws.com/hb-wallet-chat/Sticker/',
    },
    web3Link: {
      ether: isMainNet
        ? 'http://mainnet.fullnode.work/'
        : 'https://kovan.infura.io/v3/7df30e3e2db7404ba667b75498437084',
      tomoChain: isMainNet
        ? 'https://rpc.tomochain.com'
        : 'https://testnet.tomochain.com',
      socket: isMainNet
        ? 'wss://ws.tomochain.com'
        : 'wss://ws.testnet.tomochain.com',
      chainId: isMainNet ? '88' : '89',
      linkScanTxs: isMainNet
        ? 'https://scan.tomochain.com/txs/'
        : 'https://scan.testnet.tomochain.com/txs/',
      linkAddress: isMainNet
        ? 'https://scan.tomochain.com/address/'
        : 'https://scan.testnet.tomochain.com/address/',
      tomoApi: isMainNet
        ? 'https://scan.tomochain.com/api/'
        : 'https://scan.testnet.tomochain.com/api/',
    },
    gas: {
      ETH: 21000,
      TOKEN: 0,
      TOKEN_ETH: 100000,
      externalFeeToken: 150000,
      externalLargeFeeToken: 300000,
      externalSuperLargeFeeToken: 600000,
      externalFee: 21000,
    },
  };
};

export default settings;
