import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Daily } from "./pages/Daily";
import { Diary } from "./pages/diary";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import awsExports from "./aws-exports";

import { withAuthenticator, Button } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import config from "./amplifyconfiguration.json";

Amplify.configure(config);
Amplify.configure(awsconfig);
Amplify.configure(awsExports);

export function App({ signOut, user }) {
  return (
    <>
      <nav class="border-gray-200 px-2 mb-10 bg-ivory p-4 pl-6 pr-6 text-2xl font-light">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          <h1 class="font-bold">Self-Index</h1>

          <Link to="/">
            <u>Home</u>
          </Link>

          <Link to="/daily">
            <u>Daily Form</u>
          </Link>

          <Link to="/diary">
            <u>Diary</u>
          </Link>

          <Button onClick={signOut}>Sign out</Button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Daily" element={<Daily />} />
        <Route path="/Diary" element={<Diary />} />
      </Routes>
    </>
  );
}

export default withAuthenticator(App);
