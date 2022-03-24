import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const About = () => {
    return (
        <div>
            <Card className="About">
                <CardTitle tag="h1">What is NFT?</CardTitle>
                    <CardText style={{margin: 10}}>
                    Non-Fungible Token or NFT as it's ubiquitously known is anything that is digital (i.e artwork, soundtrack, etc...)
                    which is encrypted and cannot be reproduced. Furthermore, they are minted just like any other cryptocurrency and 
                    are individually unique from each other. NFTs are usually bought and sold as virtual commodities. However, their 
                    inherent value only serves as a certificate of proprietorship and not the asset itself. If for example an NFT of an artwork 
                    is purchased, the buyer doesn't own it in any form beyond this digital entity.
                    <br />
                    <br />
                    <h2>So what's the purpose of NFT?</h2>
                    <br />
                    NFTs are usually purchased either for keepsake or for reselling. Based on demand and scarcity, their value increases. This is
                    also conducive to the artists' worth. 
                    </CardText>
            </Card>
        </div>
      
       
    )
 }

 export default About;