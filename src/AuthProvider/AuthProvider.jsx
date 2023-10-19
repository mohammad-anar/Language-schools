import { createContext } from "react";
import PropTypes from 'prop-types'
import auth from "../firebase/firebase.conf";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const authValue = {
        user : true,
        createUser,
        
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;