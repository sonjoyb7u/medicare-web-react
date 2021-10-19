import React from 'react';
import {
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children, ...rest}) => {
    const { user,  isLoading } = useAuth()
    if(isLoading) {
        return <h6 className="text-center text-danger fw-bold">Loading...</h6>
    }
    
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? 
                        children : 
                        <Redirect to = {
                                            {
                                                pathname: "/login", 
                                                state: {
                                                    from: location
                                                } 
                                            }
                                        }
                        />
        } 
        ></Route>
    );
};

export default PrivateRoute;