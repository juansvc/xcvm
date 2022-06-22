import { DEFI_CONFIG } from "./config";

export type TokenId = typeof DEFI_CONFIG.tokenIds[number] | string;

export type Token = {
  id: TokenId;
  icon: string;
  iconGray?: string;
  iconEmpty?: string;
  symbol: string;
  name: string;
};

export type NetworkId = typeof DEFI_CONFIG.networkIds[number] | string;

export type Network = {
  id: NetworkId;
  icon: string;
  symbol: string;
  name: string;
};

export type AmmId = typeof DEFI_CONFIG.ammIds[number];

export type AMM = {
  id: AmmId,
  icon: string,
  label: string
};