export interface IProviderApi {
  isChargerWallet?: boolean;
  request<T>({ method, params }: { method: string; params?: any }): Promise<T>;
}

export interface IProviderInfo {
  uuid: string;
  name: string;
  inject?: string; // window.ethereum
}
