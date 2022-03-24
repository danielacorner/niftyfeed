import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Header from '../components/Header';
import Login from '../components/Login';
 
const Home = () => {
  const history = useHistory();

  const handleGoToDemo = () =>{
    history.push("/demo")
  }

  return (
    <div className='home-wrapper'>
      <div className='Home'>
        <div className="Heading">
          <Header />
          <h1 className="Heading-Text">Track And Monitor Your NFT</h1>
              <Button onClick={handleGoToDemo} className="Btn-demo" color="light">How It Works</Button>
              <Login/>
        </div>
      </div>
    </div>
  )
}
  
export default Home; 