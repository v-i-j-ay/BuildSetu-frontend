import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

import Login from "../pages/Login";
import Profile from "../pages/Profile";

const AuthPage = () => {
  const [user, setLocalUser] = useState(null);
  const { setUser } = useAuth(); //  global context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
          // onAuthStateChanged listens for login/logout changes
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setLocalUser(currentUser); // local UI
      setUser(currentUser);      // global auth state
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return user ? <Profile user={user} /> : <Login />; //Login page switches to Profile after login
};

export default AuthPage;