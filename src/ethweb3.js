import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window !== 'undefined') {
	// in browser metamask runnnig
	web3 = new Web3(window.web3.currentProvider);
} else {
	// on server or not running metamask
	const provider = new Web3.providers.HttpProvider(
  		'https://rinkeby.infura.io/v3/957ec50b453f43fe8553147dc1cdcf60'
		);
	web3 = new Web3(provider);
}

// const web3 = new Web3(window.web3.currentProvider);

export default web3; 