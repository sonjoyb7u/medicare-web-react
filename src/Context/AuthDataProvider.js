import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext()

const AuthDataProvider = ({children}) => {
    // const {children} = props
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {/* {props.children} */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthDataProvider;