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
     
  };
};

export default settings;
