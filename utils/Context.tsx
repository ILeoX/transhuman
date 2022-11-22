import { createContext } from 'react';

export const connectWallet = createContext(async () => {
  try {
    const { ethereum } = window as any;
    if (!ethereum) {
      alert('Please install MetaMask');
      return;
    }
    const accounts = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const connectedX = true;
    const accountX = accounts[0];

    localStorage.setItem('walletAddress-transhumancoin', accounts[0]);

    return { connectedX, accountX };
  } catch (error) {
    console.log(error);
  }
});
