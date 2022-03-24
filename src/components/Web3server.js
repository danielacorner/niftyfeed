import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import NFTContainer from './NFTContainer';

const WalletCard = () => {

	const [walletAddress, setWalletAddress] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [nfts, setNFTs] = useState([]);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWallet= async () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			await window.ethereum.request({ method: 'eth_requestAccounts'})

			
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
				setWalletAddress(result[0]);
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
			
		}
	}
		
		const getNFTData = async () => {

				if(!walletAddress) return;

				const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)
				
				const data = await response.json()
				
				setNFTs(data.items)
			
		}

		useEffect(() => {

			getNFTData()

		})
	

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (address) => {
		window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		window.location.reload();
	}

	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
	
	return (
		<div className='walletCard'>
			<button onClick={connectWallet}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount} </h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage}
			<NFTContainer nfts={nfts} />
		</div>
	);
}


export default WalletCard;


