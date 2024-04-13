import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Daily } from "./pages/Daily";
import { Diary } from "./pages/diary";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import awsExports from './aws-exports';
import React, { useState, useEffect } from "react";
import { signIn, signOut } from 'aws-amplify/auth'; // Import signIn and signOut from aws-amplify/auth
import { getCurrentUser } from 'aws-amplify/auth';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import config from './amplifyconfiguration.json';

Amplify.configure(config);
Amplify.configure(awsconfig);
Amplify.configure(awsExports);

export function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track the authentication status
  const username = '';
  const password = '';


  useEffect(() => {
    checkAuthStatus(); // Check authentication status on component mount
  }, []);

  async function currentAuthenticatedUser() {
    try {
      const { username } = await getCurrentUser();
      console.log(`The username: ${username}`);
    } catch (err) {
      console.log(err);
    }
  }

  const checkAuthStatus = async () => {
    try {
      const user = await currentAuthenticatedUser();
      setIsSignedIn(true); // User is signed in
    } catch (error) {
      setIsSignedIn(false); // User is signed out
    }
  };

  async function handleSignIn() {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      setIsSignedIn(true);
    } catch (error) {
      console.log('Error signing in:', error);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
      setIsSignedIn(false);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
  <>
  <nav className="border-gray-200 px-2 mb-10 bg-ivory p-4 pl-6 pr-6 text-2xl font-light">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="font-bold">Self-Index</h1>
        <>
          <Link to="/"><u>Home</u></Link>
          <Link to="/daily"><u>Daily Form</u></Link>
          <Link to="/diary"><u>Diary</u></Link>
          {isSignedIn ? (
              <Button onClick={handleSignIn}>Sign in</Button>
            ) : (
              <Button onClick={handleSignOut}>Sign out</Button>
            )}
        </>
    </div>
  </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path = "/Daily" element={<Daily />} />
    <Route path = "/Diary" element={<Diary />} />
  </Routes>
  </>

  );
}

export default App;
