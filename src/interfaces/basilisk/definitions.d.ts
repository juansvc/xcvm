declare const _default: {
    alias: {
        tokens: {
            AccountData: string;
        };
    };
    types: {
        AssetPair: {
            asset_in: string;
            asset_out: string;
        };
        Amount: string;
        AmountOf: string;
        Address: string;
        OrmlAccountData: {
            free: string;
            frozen: string;
            reserved: string;
        };
        Fee: {
            numerator: string;
            denominator: string;
        };
        BalanceInfo: {
            amount: string;
            assetId: string;
        };
        Chain: {
            genesisHash: string;
            lastBlockHash: string;
        };
        Currency: string;
        CurrencyId: string;
        CurrencyIdOf: string;
        Intention: {
            who: string;
            asset_sell: string;
            asset_buy: string;
            amount: string;
            discount: string;
            sell_or_buy: string;
        };
        IntentionId: string;
        IntentionType: {
            _enum: string[];
        };
        LookupSource: string;
        Price: string;
        ClassId: string;
        TokenId: string;
        ClassData: {
            is_pool: string;
        };
        TokenData: {
            locked: string;
        };
        ClassInfo: {
            metadata: string;
            total_issuance: string;
            owner: string;
            data: string;
        };
        TokenInfo: {
            metadata: string;
            owner: string;
            data: string;
        };
        ClassInfoOf: string;
        TokenInfoOf: string;
        ClassIdOf: string;
        TokenIdOf: string;
        OrderedSet: string;
        VestingSchedule: {
            start: string;
            period: string;
            period_count: string;
            per_period: string;
        };
        VestingScheduleOf: string;
        LBPWeight: string;
        WeightCurveType: {
            _enum: string[];
        };
        PoolId: string;
        BalanceOf: string;
        AssetType: {
            _enum: {
                Token: string;
                PoolShare: string;
            };
        };
        Pool: {
            owner: string;
            start: string;
            end: string;
            assets: string;
            initial_weight: string;
            final_weight: string;
            weight_curve: string;
            fee: string;
            fee_collector: string;
        };
        AssetDetails: {
            name: string;
            asset_type: string;
            existential_deposit: string;
            locked: string;
        };
        AssetDetailsT: string;
        AssetMetadata: {
            symbol: string;
            decimals: string;
        };
        AssetInstance: string;
        MultiLocation: string;
        AssetNativeLocation: string;
        MultiAsset: string;
        Xcm: string;
        XcmOrder: string;
    };
};
export default _default;
