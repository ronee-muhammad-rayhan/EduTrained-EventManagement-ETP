import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const providerGithub = new GithubAuthProvider();
const providerGoogle = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle);
    }

    const loginWithGithub = () => {
        return signInWithPopup(auth, providerGithub);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (profileObject) => {
        return updateProfile(auth.currentUser, profileObject);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log('currentUser: ', currentUser);
                setLoading(false);
            } else {
                console.log('user has signed out');
                setLoading(false);
                console.log('currentUser: ', currentUser);
            }
        });

        return () => {
            return unSubscribe();
        }
    }, [user]);

    const authInfo = {
        user,
        loading,
        createUser,
        setUser,
        updateUserProfile,
        signIn,
        loginWithGoogle,
        loginWithGithub,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;