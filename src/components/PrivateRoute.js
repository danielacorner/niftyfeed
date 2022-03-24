import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

 const PrivateRoute = (props) => {

    const { currentUser } =useAuth() 
    if (!currentUser) {
        return <Redirect to= "/login" />;
    }

    return (
        <Route {...props}>
            {props.children}
        </Route>
    )
}

export default PrivateRoute;