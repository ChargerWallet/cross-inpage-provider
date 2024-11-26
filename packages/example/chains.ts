import * as uuid from 'uuid';

export type IChainInfo = {
  id: string;
  name: string;
  icon?: string;
  href?: string;
  target?: string;
};

export const thirdPartyChains: IChainInfo[] = [
  {
    id: uuid.v4(),
    name: 'AptosWalletAdapter',
    href: 'https://aptos-labs.github.io/aptos-wallet-adapter/',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/apt.png',
  },
  {
    id: uuid.v4(),
    name: 'EVM (官方 WalletConnect)',
    href: 'https://example.walletconnect.org',
    target: 'WalletConnectExample',
    icon: 'https://example.walletconnect.org/favicon.ico',
  },
  {
    id: uuid.v4(),
    name: 'EVM (Metamask Demo)',
    href: 'https://metamask.github.io/test-dapp',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/eth.png',
  },
];

export const registeredChains: IChainInfo[] = [
  {
    id: uuid.v4(),
    name: 'Alephium',
    href: '/alephium',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/algo.png',
  },
  {
    id: uuid.v4(),
    name: 'Algo',
    href: '/algo',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/algo.png',
  },
  {
    id: uuid.v4(),
    name: 'Algo WalletConnect',
    href: '/algoWalletConnect',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/algo.png',
  },
  {
    id: uuid.v4(),
    name: 'Aptos',
    href: '/aptos',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/apt.png',
  },
  {
    id: uuid.v4(),
    name: 'Aptos Martian',
    href: '/aptosMartian',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/apt.png',
  },
  {
    id: uuid.v4(),
    name: 'BTC',
    href: '/btcUnitsat',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/btc.png',
  },
  {
    id: uuid.v4(),
    name: 'BTC Babylon',
    href: '/btcBabylon',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/btc.png',
  },

  {
    id: uuid.v4(),
    name: 'Cardano',
    href: '/cardano',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/ada.png',
  },
  {
    id: uuid.v4(),
    name: 'Conflux',
    href: '/conflux',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/cfx.png',
  },
  {
    id: uuid.v4(),
    name: 'Cosmos',
    href: '/cosmos',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/cosmos.png',
  },
  {
    id: uuid.v4(),
    name: 'EVM',
    href: '/ethereum',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/eth.png',
  },
  {
    id: uuid.v4(),
    name: 'Lightning Network',
    href: '/webln',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/lnd.png',
  },
  {
    id: uuid.v4(),
    name: 'Nostr',
    href: '/nostr',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/nostr.png',
  },
  // {
  //   id: uuid.v4(),
  //   name: 'NEAR',
  //   href: '/near',
  //   icon: 'https://uni.chargerwallet-asset.com/static/chain/near.png',
  // },
  {
    id: uuid.v4(),
    name: 'Polkadot',
    href: '/polkadot',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
  },
  {
    id: uuid.v4(),
    name: 'Solana',
    href: '/solana',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
  },
  {
    id: uuid.v4(),
    name: 'Scdo',
    href: '/scdo',
    icon: 'https://raw.githubusercontent.com/chargerwallet/chargerwallet-assets/refs/heads/main/token/scdo.png',
  },
  {
    id: uuid.v4(),
    name: 'Solana Standard',
    href: '/solanaStandard',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
  },
  {
    id: uuid.v4(),
    name: 'Starcoin',
    href: '/starcoin',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10202.png',
  },
  {
    id: uuid.v4(),
    name: 'Sui Standard',
    href: '/suiStandard',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png',
  },
  {
    id: uuid.v4(),
    name: 'Ton',
    href: '/ton',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png',
  },
  {
    id: uuid.v4(),
    name: 'Tron',
    href: '/tron',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
  },
];
