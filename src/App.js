import './App.css';

import { useState, useEffect } from 'react';

import { auth, provider } from "./Firebase";
import { onAuthStateChanged} from 'firebase/auth';
import {signInWithPopup, signOut} from 'firebase/auth';

function App() {
  //User data and loggedIn State
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false); 

  //Firebase Login Function
  function login(){
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
      });
  }

  //Firebase Logout Function
  function logout(){
    signOut(auth).then(()=>{
      setUser({});
      setLoggedIn(false);
    });
  }

  //Use Firebase OnAuthStateChanged in a sideeffect to change the user and the logged in state.
  useEffect(()=>{
      onAuthStateChanged(auth, (user) =>{
          if (user){
              setUser(user);
              setLoggedIn(true);  

          }else{
            setLoggedIn(false);
          }
      })
  }, []);

  let authPanel;
  if(loggedIn){
    authPanel = (<>Logged in as {user.email} <button onClick={logout}>Logout</button></>); 
  }else{
    authPanel = (<>You are not logged in <button onClick={login}>Sign in</button></>);
  }

  return (
    <div className="App">
      {authPanel}
    </div>
  );
}

export default App;
