import { createContext } from "react";
import PropTypes from 'prop-types'
import auth from "../firebase/firebase.conf";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin with email and pass 
     const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }

    //  google sign in 
     signInWithPopup();


     onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
     });

    const authValue = {
        user,
        loading,
        createUser,
        signinUser,

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