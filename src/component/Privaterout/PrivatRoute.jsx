import React, { useContext } from 'react';
 
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const PrivateRoute = ({children}) => {
        const {user,loading} =  useContext(AuthContext)
        const location =  useLocation();
            console.log(location)
        if(loading){
              return <progress className="progress text-center mt-8 progress-primary w-56" value="70" max="100"></progress>

        }
        if(user){
                return children;
        }

        return  <Navigate to = "/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;