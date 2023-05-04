import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

 const auth = getAuth(app)
const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(true)
        
     const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password);
     }

     const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     const logOut = () => {
        return signOut(auth)
}
  const userUpdate = ( user, name, photo) =>{
        setLoading(true)
           updateProfile(user, {displayName: name, photoURL:photo})
          .then( () => {
                setUser('user update')
          })
          .catch(error => {
                console.log(error.message)
          })
  }

      // observer user auth state
      useEffect( () => {
        const unsibscribe = onAuthStateChanged(auth, currentUser => {
                    setUser(currentUser);
                    setLoading(false)
            })
            return () => {
                    return unsibscribe() ;
            }
    }, [])

   

        const authInfo = {
                user,
                loading,
                createUser,
                signIn,
                logOut,
                userUpdate
                 
        }
        return (
              <AuthContext.Provider value={authInfo}>
                {children}
              </AuthContext.Provider>   
        );
};

export default AuthProvider;