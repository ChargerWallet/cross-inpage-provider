import React from 'react';

import {
  IElectronWebView,
  IJsBridgeConfig,
  IJsBridgeMessagePayload,
} from '@chargerwallet/cross-inpage-provider-types';
import { IWebViewWrapperRef } from './useWebViewBridge';

import {
  JsBridgeBase,
  injectedFactory,
  appDebugLogger,
} from '@chargerwallet/cross-inpage-provider-core';

class JsBridgeDesktopHost extends JsBridgeBase {
  receive(data: string, arg1: { origin: string; }) {
    throw new Error('Method not implemented.');
  }
  constructor(config: IJsBridgeConfig) {
    super(config);
    this.webviewRef = config.webviewRef as React.RefObject<IElectronWebView>;
  }

  sendAsString = true;

  webviewRef?: React.RefObject<IElectronWebView>;

  webviewWrapper?: IWebViewWrapperRef;

  sendPayload(payload: IJsBridgeMessagePayload | string) {
    if (this.webviewRef && this.webviewRef.current) {
      const payloadStr: string = payload as string;

      if (this.webviewRef.current) {
        // *** executeJavaScript will be blocked by head script loading
        // const inpageReceiveCode = injectedFactory.createCodeJsBridgeReceive(payloadStr);
        // appDebugLogger.webview('executeJavaScript', inpageReceiveCode, payload);
        // this.webviewRef.current?.executeJavaScript?.(inpageReceiveCode);

        // *** use ipcRenderer.on instead
        this.webviewRef.current?.send('JsBridgeDesktopHostToInjected', payloadStr);
      } else {
        throw new Error('JsBridgeDesktopHost executeJavaScript failed: webview ref not ready yet.');
      }
    }
  }
}

export { JsBridgeDesktopHost };
