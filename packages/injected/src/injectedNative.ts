import { JsBridgeNativeInjected } from '@chargerwallet/native-bridge-injected';
import { injectWeb3Provider } from '@chargerwallet/inpage-providers-hub';

import {
  injectedProviderReceiveHandler,
  injectJsBridge,
} from '@chargerwallet/cross-inpage-provider-core';

const bridge = () =>
  new JsBridgeNativeInjected({
    receiveHandler: injectedProviderReceiveHandler,
  });
injectJsBridge(bridge);

injectWeb3Provider();

// eslint-disable-next-line no-void
void 0;
