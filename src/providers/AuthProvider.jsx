import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAuth from "../hooks/useAuth";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    useAuth();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (user) => {
        return updateProfile(auth.currentUser, user);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(user);
                // console.log(uid);
                console.log('currentUser: ', user);
                setLoading(false);
            } else {
                // User is signed out
                console.log('user has signed out');
                setLoading(false);
                console.log('currentUser: ', user);
            }
        });

        return () => {
            return unSubscribe();
        }
    }, [user]);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
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