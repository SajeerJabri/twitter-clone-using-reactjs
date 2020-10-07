import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Tweet from "./components/Tweet";
import Trends from "./components/Trends";
import CreateAccount from "./components/CreateAccount";
import { auth } from "./config/firebase";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // so its auth listener run when user logged in or logged out or sign up so when any action occur so this block of code run
  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged(authUser => {
      setIsLoaded(true);
      if (authUser) {
        // if authUser is true so its mean user has logged in and then this onAuth listener is run
        setUser(authUser);
      } else {
        // if authUser is false so its mean user has logged out and then this onAuth listener is run
        setUser(null);
      }
    });
    return () => {
      unsubscriber();
    };
  }, [user]);
  return (
    <div className="App">
      {!isLoaded ? (
        <div className="homePageLoading">
          <CircularProgress />
        </div>
      ) : !user ? (
        <CreateAccount />
      ) : (
        <>
          <Sidebar user={user} />
          <Tweet username={user.displayName} email={user.email} />
          <Trends />
        </>
      )}
    </div>
  );
}

export default App;
