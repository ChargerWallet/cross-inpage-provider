import { IInjectedProviderNames } from '@chargerwallet/cross-inpage-provider-types';
import { ProviderBase, IInpageProviderConfig } from '@chargerwallet/cross-inpage-provider-core';

class ProviderPrivateExternalAccountBase extends ProviderBase {
  constructor(props: IInpageProviderConfig) {
    super(props);
  }

  protected readonly providerName = IInjectedProviderNames.$privateExternalAccount;

  request(data: unknown) {
    return this.bridgeRequest(data);
  }
}

export { ProviderPrivateExternalAccountBase };
