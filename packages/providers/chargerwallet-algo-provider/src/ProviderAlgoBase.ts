import { IInjectedProviderNames } from '@chargerwallet/cross-inpage-provider-types';
import { ProviderBase, IInpageProviderConfig } from '@chargerwallet/cross-inpage-provider-core';

class ProviderAlgoBase extends ProviderBase {
  constructor(props: IInpageProviderConfig) {
    super(props);
  }

  protected readonly providerName = IInjectedProviderNames.algo;

  async request<T>(data: unknown) {
    return (await this.bridgeRequest(data)) as T;
  }
}

export { ProviderAlgoBase };
