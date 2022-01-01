import React from 'react';
import { Navigate, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) return 'loading';
    return (
        <Route {...rest} render={({ location }) => user.email ? children :
            <Navigate replace to={{ pathname: "/sign-in", state: { from: location } }} />}
        />
    );
};

export default PrivateRoute;
