import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { _auth } from '../backend/firebase';

export let userAuth = createContext();

const AuthContext = (props) => {
    const [userData, setUserData] = useState();
    const [logout, setLogout] = useState(true);

    let dat = onAuthStateChanged(_auth,(data)=>{
        setUserData(data);
    })

    function Logout(){
      signOut(_auth);
      setLogout(false);
    }

  return (
    <userAuth.Provider value={{userData,Logout}}>
        {props.children}
    </userAuth.Provider>
  )
}

export default AuthContext