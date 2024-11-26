import { JsBridgeExtInjected } from '@chargerwallet/extension-bridge-injected';
import {
  injectedProviderReceiveHandler,
  injectJsBridge,
} from '@chargerwallet/cross-inpage-provider-core';

import { injectWeb3Provider } from '@chargerwallet/inpage-providers-hub';

// - send
const bridge = (): JsBridgeExtInjected =>
  new JsBridgeExtInjected({
    receiveHandler: injectedProviderReceiveHandler,
  });
injectJsBridge(bridge);

injectWeb3Provider();

console.log('ChargerWallet Provider Ready ', performance.now());

// FIX: Error evaluating injectedJavaScript: This is possibly due to an unsupported return type. Try adding true to the end of your injectedJavaScript string.
// eslint-disable-next-line no-void
void 0;
