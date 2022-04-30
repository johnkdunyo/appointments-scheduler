import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = ({
    isLoggedIn,
    redirectPath = '/',
    children,
  }) => {
    if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };

  export default ProtectedRoute;