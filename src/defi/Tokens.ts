import { DEFI_CONFIG } from "./config";
import { Token, TokenId } from "./types";

export const TOKEN_IDS = DEFI_CONFIG.tokenIds;
export const TOKENS: { [key in TokenId]: Token } = {
  pica: {
    id: 'pica',
    icon: '/icons/tokens/pica.svg',
    symbol: 'PICA',
    name: "PICA",
  },
  eth: {
    id: 'eth',
    icon: '/icons/tokens/ethereum.svg',
    symbol: 'ETH',
    name: "wETH",
  },
  usdc: {
    id: 'usdc',
    icon: '/icons/tokens/usdc.svg',
    symbol: 'USDC',
    name: 'USDC',
  },
  ksm: {
    id: "ksm",
    icon: '/icons/tokens/kusama.svg',
    symbol: 'KSM',
    name: 'KSM'
  },
  dot: {
    id: 'dot',
    icon: '/icons/tokens/polkadot.svg',
    symbol: 'DOT',
    name: "DOT",
  },
  cosmos: {
    id: 'cosmos',
    icon: '/icons/tokens/cosmos.svg',
    symbol: 'COSMOS',
    name: "COSMOS",
  },
  dot_alt: {
    id: 'dot_alt',
    icon: '/icons/dotsama.svg',
    iconGray: '/icons/dotsama-gray.svg',
    iconEmpty: '/icons/dotsama-empty.svg',
    symbol: 'DOT',
    name: 'Dotsama',
  },
  eth_alt: {
    id: 'eth_alt',
    icon: '/icons/evm.svg',
    iconGray: '/icons/evm-gray.svg',
    iconEmpty: '/icons/evm-empty.svg',
    symbol: 'EVM',
    name: 'EVM',
  },
  cosmos_alt: {
    id: 'cosmos_alt',
    icon: '/icons/cosmos.svg',
    iconGray: '/icons/cosmos-gray.svg',
    iconEmpty: '/icons/cosmos-empty.svg',
    symbol: 'COSMOS',
    name: 'Cosmos',
  },
};
export const getToken = (tokenId: TokenId): Token => TOKENS[tokenId];
