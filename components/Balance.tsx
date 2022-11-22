import { useContext, useEffect, useState } from 'react';
import { connectWallet } from '../utils/Context';
import THC from '../utils/THC.json';
import { ethers } from 'ethers';

const address = '0x56083560594E314b5cDd1680eC6a493bb851BBd8';
const abi = THC.abi;

const Balance = () => {
  const connWallet = useContext(connectWallet);
  const [balance, setBalance] = useState<string>('0');

  async function connect() {
    const connData = await connWallet();

    if (connData) {
      $getBalance(connData.accountX);
    }
    console.log('Calling connect from Balance comp...');
  }
  const { ethereum } = window as any;

  function provider() {
    return new ethers.providers.Web3Provider(ethereum);
  }

  function signer() {
    return provider().getSigner();
  }

  function contract() {
    return new ethers.Contract(address, abi, signer());
  }

  async function $getBalance(account: string) {
    try {
      let balance = await contract().balanceOf(account);
      balance = ethers.utils.formatEther(balance);
      setBalance(balance);
    } catch (e) {
      console.log('Error:' + e);
    }
  }

  useEffect(
    function () {
      const alreadyConnected = localStorage.getItem(
        'walletAddress-transhumancoin'
      );

      if (alreadyConnected) {
        connect();
      }
    },
    [balance]
  );

  return (
    <>
      <div
        onMouseEnter={connect}
        className='z-50 fixed bottom-2 right-5 bg-[#050812] rounded-2xl p-3 border-[1px] border-gray-800 text-[#162144] cursor-default hover:scale-105 hover:text-gray-400'
      >
        <span className='font-light text-sm text-[#192858]'>THC Balance: </span>{' '}
        <span className='text-sm text-inherit'> {balance} </span>
      </div>
    </>
  );
};

export default Balance;
