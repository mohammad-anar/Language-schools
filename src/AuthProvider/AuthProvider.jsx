import { createContext } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.conf";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";

export const AuthContext = createContext(null);
const googoeProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUser = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // signin with email and pass
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  google sign in
  const googleSignin = () => {
    return signInWithPopup(auth, googoeProvider);
  };
  //  twitter sign in
  const twitterSignin = () => {
    return signInWithPopup(auth, twitterProvider);
  };
  //  github sign in
  const githubSignin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    setIsLoading(false);
  });

  const authValue = {
    user,
    isLoading,
    createUser,
    signinUser,
    googleSignin,
    twitterSignin,
    githubSignin,
    updateUser,
    logOut,
  };
  return (
    <HelmetProvider>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </HelmetProvider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
