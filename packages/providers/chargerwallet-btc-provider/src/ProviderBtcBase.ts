import { IInjectedProviderNames } from '@chargerwallet/cross-inpage-provider-types';
import { ProviderBase, IInpageProviderConfig } from '@chargerwallet/cross-inpage-provider-core';

class ProviderBtcBase extends ProviderBase {
  constructor(props: IInpageProviderConfig) {
    super(props);
  }

  protected readonly providerName = IInjectedProviderNames.btc;
}

export { ProviderBtcBase };
