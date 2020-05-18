import React from 'react';
import {Route} from 'react-dom';
import { useAuth } from './authentication/auth';
import { Redirect } from 'react-router-dom';

function PrivateRoute({component: Component}, ...rest) {
  const isAuthenticated = useAuth();

  return (

        <Route {...rest} render={(props)=> isAuthenticated ? (
          <Component {...props}/> 
        ) : (<Redirect to="/login" />)}/>
    );
}

export default PrivateRoute;