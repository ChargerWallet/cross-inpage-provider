import type { TronWeb } from '@chargerwallet/chargerwallet-tron-provider';

export interface IProviderApi {
  isChargerWallet?: boolean;
  request<T>({ method, params }: { method: string; params?: any }): Promise<T>;
  tronWeb?: TronWeb;
}

export interface IProviderInfo {
  uuid: string;
  name: string;
  inject?: string; // window.ethereum
}
