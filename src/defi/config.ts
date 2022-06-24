export const DEFI_CONFIG = {
  tokenIds: [
    'pica',
    'eth',
    'usdc',
    'ksm',
    'dot',
    'cosmos',
    'dot_alt',
    'eth_alt',
    'cosmos_alt',
  ] as const,

  networkIds: [
    'picasso',
    'ethereum',
    'arbitrum',
    'cosmos',
  ] as const,

  ammIds: ['uniswap', 'sushiswap', 'pablo', 'quickswap'] as const,

  composeDeadline: [
    {
      symbol: '5m',
      name: '5 mins',
    },
    {
      symbol: '15m',
      name: '15 mins',
    },
    {
      symbol: '30m',
      name: '30 mins',
    },
    {
      symbol: '60m',
      name: '60 mins',
    },
  ],
};
