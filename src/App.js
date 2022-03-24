import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
// import Dashboard from './pages/Dashboard';
import './App.css';


const App = () => (
    <AuthProvider>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </AuthProvider>
)

export default App;
