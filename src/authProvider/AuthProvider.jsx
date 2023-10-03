import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebaseConfig/Firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create register
    const createRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createRegistration
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;