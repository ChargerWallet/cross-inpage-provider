/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { JsBridgeBase } from '@chargerwallet/cross-inpage-provider-core';
import { ProviderEthereum, shimWeb3, registerEIP6963Provider } from '@chargerwallet/chargerwallet-eth-provider';
import { ProviderPrivate } from '@chargerwallet/chargerwallet-private-provider';
import { ProviderSolana, registerSolanaWallet, WalletIcon } from '@chargerwallet/chargerwallet-solana-provider';
// import { ProviderStarcoin } from '@chargerwallet/chargerwallet-starcoin-provider';
import { ProviderAptos, ProviderAptosMartian } from '@chargerwallet/chargerwallet-aptos-provider';
import { ProviderConflux } from '@chargerwallet/chargerwallet-conflux-provider';
import { ProviderAlph } from '@chargerwallet/chargerwallet-alph-provider';
import { ProviderTron } from '@chargerwallet/chargerwallet-tron-provider';
import { ProviderCardano, defineWindowCardanoProperty } from '@chargerwallet/chargerwallet-cardano-provider';
// import { ProviderPrivateExternalAccount } from '@chargerwallet/chargerwallet-private-external-account-provider';
import { ProviderCosmos } from '@chargerwallet/chargerwallet-cosmos-provider';
import { ProviderPolkadot, registerPolkadot } from '@chargerwallet/chargerwallet-polkadot-provider';
import {
  defineWindowProperty,
  checkWalletSwitchEnable,
} from '@chargerwallet/cross-inpage-provider-core';
import { ProviderSui, registerSuiWallet } from '@chargerwallet/chargerwallet-sui-provider';
import { ProviderWebln } from '@chargerwallet/chargerwallet-webln-provider';
import { ProviderScdo } from '@chargerwallet/chargerwallet-scdo-provider';
import { ProviderTon } from '@chargerwallet/chargerwallet-ton-provider';
import { ProviderNostr } from '@chargerwallet/chargerwallet-nostr-provider';
import { ProviderBtc, ProviderBtcWallet } from '@chargerwallet/chargerwallet-btc-provider';
import { ProviderAlgo } from '@chargerwallet/chargerwallet-algo-provider';
import { hackAllConnectButtons } from './connectButtonHack';
import { detectWebsiteRiskLevel, listenPageFocus } from './detectRiskWebsite';
import { WALLET_CONNECT_INFO } from './connectButtonHack/consts';
// import Web3 from 'web3'; // cause build error

export type IWindowChargerWalletHub = {
  debugLogger?: any;
  jsBridge?: JsBridgeBase;
  ethereum?: ProviderEthereum;
  solana?: ProviderSolana;
  phantom?: { solana?: ProviderSolana };
  // starcoin?: any;
  aptos?: ProviderAptos;
  petra?: ProviderAptos;
  martian?: ProviderAptosMartian;
  suiWallet?: ProviderSui;
  cardano?: ProviderCardano;
  keplr?: ProviderCosmos;
  webln?: ProviderWebln;
  nostr?: ProviderNostr;
  ton?: ProviderTon;
  unisat?: ProviderBtc;
  btcwallet?: ProviderBtcWallet;
  alephium?: ProviderAlph;
  scdo?: ProviderScdo;
  $private?: ProviderPrivate;
  $walletInfo?: {
    buildNumber: string;
    disableExt?: boolean;
    isLegacy: boolean;
    isDefaultWallet?: boolean;
    excludedDappList: string[];
    platform: string;
    version: string;
    platformEnv: {
      isExtension: boolean;
      isDesktop: boolean;
      isNative: boolean;
    };
  };
};

function injectWeb3Provider(): unknown {
  if (!window?.$chargerwallet?.jsBridge) {
    throw new Error('Charger Wallet jsBridge not found.');
  }

  const bridge: JsBridgeBase = window?.$chargerwallet?.jsBridge;

  const ethereum = new ProviderEthereum({
    bridge,
  });
  const $private = new ProviderPrivate({
    bridge,
  });
  const solana = new ProviderSolana({
    bridge,
  });

  // const starcoin = new ProviderStarcoin({
  //   bridge,
  // });

  const martian = new ProviderAptosMartian({
    bridge,
  });

  const conflux = new ProviderConflux({
    bridge,
  });

  const tron = new ProviderTron({
    bridge,
  });

  const sui = new ProviderSui({
    bridge,
  });

  const cardano = new ProviderCardano({
    bridge,
  });

  const alephium = new ProviderAlph({
    bridge,
  });

  const tonconnect = new ProviderTon({
    bridge,
  });

  const cosmos = new ProviderCosmos({
    bridge,
  });

  const polkadot = new ProviderPolkadot({
    bridge,
  });

  const webln = new ProviderWebln({
    bridge,
  });

  const nostr = new ProviderNostr({
    bridge,
  });

  const btc = new ProviderBtc({ bridge });
  const btcWallet = new ProviderBtcWallet({ bridge });

  const algorand = new ProviderAlgo({ bridge });

  const scdo = new ProviderScdo({ bridge });

  // const $privateExternalAccount = new ProviderPrivateExternalAccount({ bridge });

  // providerHub
  const $chargerwallet = {
    ...window.$chargerwallet,
    jsBridge: bridge,
    $private,
    // $privateExternalAccount,
    ethereum,
    solana,
    // starcoin,
    aptos: martian,
    conflux,
    tron,
    sollet: null,
    sui,
    tonconnect,
    cardano,
    alephium,
    cosmos,
    scdo,
    webln,
    nostr,
    btc,
    btcwallet: btcWallet,
    algorand,
  };

  defineWindowProperty('$chargerwallet', $chargerwallet, { enumerable: true, alwaysInject: true });

  const martianProxy = new Proxy(martian, {
    get: (target, property, ...args) => {
      if (property === 'aptosProviderType') {
        return 'martian';
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return Reflect.get(target, property, ...args);
    },
  });

  defineWindowProperty('ethereum', ethereum);
  registerEIP6963Provider({
    image: WALLET_CONNECT_INFO.chargerwallet.icon,
    provider: ethereum,
  });

  if (checkWalletSwitchEnable()) {
    registerEIP6963Provider({
      uuid: '7677b54f-3486-46e2-4e37-bf8747814f',
      name: 'MetaMask',
      rdns: 'io.metamask',
      image: WALLET_CONNECT_INFO.metamask.icon,
      provider: ethereum,
    });
  }

  defineWindowProperty('solana', solana);
  defineWindowProperty('phantom', { solana });
  // defineWindowProperty('starcoin', starcoin);
  defineWindowProperty('aptos', martian);
  defineWindowProperty('petra', martian, { enumerable: true });
  defineWindowProperty('martian', martianProxy, { enumerable: true });
  defineWindowProperty('conflux', conflux);
  defineWindowProperty('alephium', alephium);
  defineWindowProperty('alephiumProviders', {
    alephium,
  });
  defineWindowProperty('tronLink', tron);
  defineWindowProperty('suiWallet', sui);
  defineWindowProperty('chargerwalletTonWallet', {
    tonconnect,
  });
  defineWindowProperty('openmask', {
    tonconnect,
  });
  defineWindowProperty('unisat', btc);
  defineWindowProperty('scdo', scdo);
  defineWindowProperty('algorand', algorand);
  defineWindowProperty('exodus', {
    algorand,
  });

  // Cardano chain provider injection is handled independently.
  if (checkWalletSwitchEnable()) {
    defineWindowCardanoProperty('cardano', cardano);
  }

  // cosmos keplr
  defineWindowProperty('keplr', cosmos);
  defineWindowProperty('getOfflineSigner', cosmos.getOfflineSigner.bind(cosmos));
  defineWindowProperty('getOfflineSignerOnlyAmino', cosmos.getOfflineSignerOnlyAmino.bind(cosmos));
  defineWindowProperty('getOfflineSignerAuto', cosmos.getOfflineSignerAuto.bind(cosmos));

  // Lightning Network
  defineWindowProperty('webln', webln);
  defineWindowProperty('nostr', nostr);

  // ** shim or inject real web3
  //
  // if (!window.web3) {
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-argument
  //   window.web3 = new Web3(ethereum as any);
  // }
  shimWeb3(ethereum);

  // TODO use initializeInpageProvider.ts
  window.dispatchEvent(new Event('ethereum#initialized'));

  // Solana Standard Wallet
  if (checkWalletSwitchEnable()) {
    registerSolanaWallet(solana, {
      icon: WALLET_CONNECT_INFO.chargerwallet.icon as WalletIcon,
    });
  }

  // Sui Standard Wallet
  if (checkWalletSwitchEnable()) {
    registerSuiWallet(sui, {
      logo: WALLET_CONNECT_INFO.chargerwallet.icon,
    });
  }

  // Override the SuiWallet Standard Wallet
  if (checkWalletSwitchEnable()) {
    registerSuiWallet(sui, {
      name: 'Sui Wallet',
      logo: WALLET_CONNECT_INFO.chargerwallet.icon,
    });
  }

  if (checkWalletSwitchEnable()) {
    registerPolkadot(polkadot);
  }

  if (checkWalletSwitchEnable()) {
    registerPolkadot(polkadot, 'polkadot-js', '0.44.1');
  }
  setTimeout(() => {
    void detectWebsiteRiskLevel();
    void hackAllConnectButtons();
    void listenPageFocus();
  }, 1000);

  return $chargerwallet;
}
export { injectWeb3Provider };
