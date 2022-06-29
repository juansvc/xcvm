
import BN from 'bn.js';

import { getNewConnection } from '@/pages/api/connectionHelper';
import { sendAndWaitForSuccess } from '@/pages/api/polkadot';

export const DotBalance = () => {
  const test = async () => {
  
    
    const { newClient, newKeyring } = await getNewConnection();
    const api = newClient;  
    const prom = await newClient.rpc.assets.balanceOf('1', '5yNZjX24n2eg7W6EVamaTXNQbWCwchhThEaSWB7V3GRjtHeL');
    console.log("Prom Result",prom.toString());
  
    return prom.toString()
  
    const walletAlice = newKeyring.addFromUri("//Alice");
    const walletBob = newKeyring.addFromUri("//Bob");
  
    const paraAsset = 1;
    const paraDest = walletBob.publicKey;
    const paraAmount = api.createType('u128', new BN("100000000000"));
    const paraKeepAlive = true;
  
    const {data:[result]} = await sendAndWaitForSuccess(
      api,
      walletAlice,
      api.events.balances.Deposit.is,
      api.tx.assets.transfer(paraAsset, paraDest, paraAmount, paraKeepAlive)
    );
      console.log("transaction result", result.toString())    
  }
  test()
}