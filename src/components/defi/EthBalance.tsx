import {Web3Provider} from "@ethersproject/providers";
import {formatEther} from "@ethersproject/units";
import {useWeb3React} from "@web3-react/core";
import React, {useEffect} from "react";
import useSWR from "swr";

export const EthBalance = () => {
  const {account, library} = useWeb3React<Web3Provider>()
  const {data: balance, mutate} = useSWR(['getBalance', account, 'latest'])

  useEffect(() => {
    library?.on('block', () => {
      mutate(undefined, true)
    })
    return () => {
      library?.removeAllListeners('block')
    }
  }, [])

  if (!balance) {
    return <div>No balance</div>
  }
  return <div>Balance: {parseFloat(formatEther(balance)).toPrecision(4)}</div>
}