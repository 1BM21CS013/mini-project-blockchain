import Web3 from 'web3';

// Connect to the local Geth node
if (window.ethereum) {
  var web3 = new Web3(window.ethereum);
} else {
  console.error('MetaMask not detected');
}

export default web3;