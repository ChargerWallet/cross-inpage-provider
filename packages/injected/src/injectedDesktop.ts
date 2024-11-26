import { JsBridgeDesktopInjected } from '@chargerwallet/desktop-bridge-injected';
import {
  injectedProviderReceiveHandler,
  injectJsBridge,
} from '@chargerwallet/cross-inpage-provider-core';

import { injectWeb3Provider } from '@chargerwallet/inpage-providers-hub';

const bridge = () =>
  new JsBridgeDesktopInjected({
    receiveHandler: injectedProviderReceiveHandler,
  });
injectJsBridge(bridge);

injectWeb3Provider();

// eslint-disable-next-line no-void
void 0;
