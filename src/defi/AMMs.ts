import { DEFI_CONFIG } from "./config";
import { AMM, AmmId } from './types';

export const AMM_IDS = DEFI_CONFIG.ammIds;
export const AMMs: { [key in AmmId]: AMM } = {
  uniswap: {
    id: 'uniswap',
    icon: '/icons/amms/uniswap.svg',
    label: 'Uniswap',
  },
  pablo: {
    id: 'pablo',
    icon: '/icons/amms/pablo.svg',
    label: 'Pablo',
  },
  quickswap: {
    id: 'quickswap',
    icon: '/icons/amms/quickswap.svg',
    label: 'Quickswap',
  },
};
export const getAMM = (ammId: AmmId): AMM => AMMs[ammId];
