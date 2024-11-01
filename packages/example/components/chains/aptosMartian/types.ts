import type { ProviderAptosMartian } from '@chargerwallet/chargerwallet-aptos-provider';

export type IProviderApi = ProviderAptosMartian

export interface IProviderInfo {
  uuid: string;
  name: string;
  inject?: string; // window.ethereum
}
