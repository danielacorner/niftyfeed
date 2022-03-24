import React from 'react'

const NFTCard = ({ nft }) => {
    return (
        <div className='nft-card'>
            <img src={nft.meta.content[1].url} alt="NFT" className='nft-image'/>
                <div>
                    Collection Address:
                </div>
                <div>
                    {nft.collection}
                </div>
                <div>
                    NFT Name:
                </div>
                <div>
                    {nft.meta.name}
                </div>
        </div>
    )
}

export default NFTCard
