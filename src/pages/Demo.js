import React from 'react';
import { Card, CardText, Button } from 'reactstrap';

import Search from '../components/Search'
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Header from '../components/Header';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const Demo = ({props}) => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-Header">
                 <Header />
            </div>
            <Topbar />
            <h1 className="Dashboard-Title">Dashboard</h1>
            <div className="searchbar">
                <Search />
            </div>
            <div>
                <div className="profile-shape">
                    <PersonIcon className="person-icon"/>
                </div>
                <div className="profile-text">
                    <h1 className="username">boredPanda@1</h1>
                    <p1>member since 09/2021</p1>
                    <div>
                        <FavoriteIcon className="favorites-icon" />
                        <p2> favorites: 4</p2>
                    </div>
                </div>
            </div>
            <div className="container">
                <Sidebar />
                <div className="others">
                    <Card className="dashboard-card1">
                        <CardText className="dashboard-cardtext">
                            <h1 className="inventory">Inventory</h1>
                            <div>
                                <p1>Total assets: 3</p1>
                            </div>
                            <div>
                                <p2>Bids: 2</p2>
                            </div>
                            <div>
                                <p3>Selling: 1</p3>
                            </div>
                        </CardText>
                    </Card>
                    <Card className="dashboard-card2">
                        <CardText className="dashboard-cardtext">
                            <h1 className="inventory">Tracking</h1>
                            <div>
                                <p1>Crypto Bear</p1>
                            </div>
                            <div>
                                <p2>Bored Monkey</p2>
                            </div>
                            <div>
                            <Button className="nft-button" color="info" >Find NFT</Button>
                            </div>
                        </CardText>
                    </Card>
                    <Card className="dashboard-card3">
                        <AddIcon className="add-icon"/>
                    </Card>
                    <div className="line">
                         <hr />
                    </div>
                    <div>
                        <h2 className="nft-price">NFT Price</h2>
                        <div className="eth-conversion">
                            <p2>cost per ethereum</p2>
                            <div>
                                <p3>1 eth = $3,500.078</p3>
                            </div>
                        </div>
                        <div>
                            <Button className="conversion-button" color="info">Crypto-Conversion</Button>
                        </div>
                        <div className="nftgraph">
                            <img src="/assets/images/nftgraph.png" alt="Nft Graph"/>
                        </div>
                        <div className="dashboard-analysis">
                            <h1 className="analysis-text">Analysis</h1>
                            <div>
                                <p1 className="analysis-subheading">percentage increase in a 12 month span</p1>
                            </div>
                            <li className="analysis-data">
                                <ul>Crypto Bear: 10,100% increase</ul>
                                <ul>Bored Monkey: 119,999,900% increase</ul>
                                <ul>Pixel Whales: 108,999,900% increase</ul>
                                <ul>Loot: 1,239,999,900% increase</ul> 
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Demo;