import { Unsubcall, InjectedAccount } from '@polkadot/extension-inject/types';
import type { InjectedAccounts } from '@polkadot/extension-inject/types';
import { ProviderPolkadot } from '../ChargerWalletPolkadotProvider';

export default class implements InjectedAccounts {
  constructor(private provider: ProviderPolkadot) {}

  get = async (anyType?: boolean): Promise<InjectedAccount[]> => {
    return this.provider.web3Accounts(anyType);
  };

  subscribe = (cb: (accounts: InjectedAccount[]) => unknown): Unsubcall => {
    return this.provider.web3AccountsSubscribe(cb);
  };
}
