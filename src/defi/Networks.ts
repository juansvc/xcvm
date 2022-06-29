import { DEFI_CONFIG } from "./config";
import { Network, NetworkId } from "./types";

export const NETWORK_IDS = DEFI_CONFIG.networkIds;
export const NETWORKS: { [key in NetworkId]: Network } = {
  picasso: {
    id: 'picasso',
    icon: '/icons/tokens/picasso.svg',
    symbol: 'PICA',
    name: "Picasso",
  },
  ethereum: {
    id: 'ethereum',
    icon: '/icons/tokens/ethereum-main.svg',
    symbol: 'ETH',
    name: "Ethereum",
  },
  arbitrum: {
    id: 'arbitrum',
    icon: '/icons/tokens/arbitrum.svg',
    symbol: 'ARBITRUM',
    name: "Arbitrum",
  },
  cosmos: {
    id: 'cosmos',
    icon: '/icons/tokens/cosmos.svg',
    symbol: 'COSMOS',
    name: "Cosmos",
  },
};
export const getNetwork = (networkId: NetworkId): Network => NETWORKS[networkId];