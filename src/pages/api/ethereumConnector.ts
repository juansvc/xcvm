import { NetworkConnector } from "@web3-react/network-connector";

const RPC_URLS = {
  1: 'http://localhost:8546',
};

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1] },
  defaultChainId: 1,
});