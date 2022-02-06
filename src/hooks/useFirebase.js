import React, { useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword

} from 'firebase/auth';
import initializeFirebase from '../Firebase/firebase.init';
const useFirebase = () => {
  initializeFirebase();
  const auth = getAuth();
  const [error, setError] = useState('');
  const [user, SetUser] = useState({});


  const registerUser = ({ name, email, password }) => {
    console.log(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
            onAuthStateChanged(auth, (user) => {
              if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                SetUser(user);
                // ...
              } else {
                // User is signed out
                // ...
              }
            });
          })
          .catch((error) => {
            setError(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

 

  const loginUser =(email, password)=>{
console.log(email);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
   
      SetUser(user);
      // ...
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      setError(error);
    });
  }



  return {
    error,
    setError,
    registerUser,
    loginUser,
    user
  };
};

export default useFirebase;
