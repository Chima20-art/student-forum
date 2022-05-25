import { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import app from '../services/firebase';

const initialContext = {
  loadingUser: true,
  user: null,
  login: () => {},
  loginWithGoogle: () => {},
  loginWithLink: () => {},
  logout: () => {},
};

const auth = getAuth(app);

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoadingUser(false);
      } else {
        setUser(null);
        setLoadingUser(false);
      }
    });

    return unsubscribe;
  }, []);

  const login = async () => {
    try {
    } catch (error) {
      console.log('error');
      console.error(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      console.log('error');
      console.error(error);
    }
  };

  const loginWithLink = async () => {
    try {
    } catch (error) {
      console.log('error');
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('error');
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loadingUser,
        user,
        login,
        loginWithGoogle,
        loginWithLink,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
