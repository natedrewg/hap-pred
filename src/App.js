import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Daily } from "./pages/Daily";
import { Diary } from "./pages/diary";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import awsExports from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(awsExports);

function App() {
  return (
  <>
  <nav class="border-gray-200 px-2 mb-10 bg-ivory p-4 pl-6 pr-6 text-2xl font-light">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <h1 class="font-bold">Self-Index</h1><h6></h6>
        
        <Link to="/">Home</Link>

        <Link to="/daily">Daily Form</Link>

        <Link to="/diary">Diary</Link>
        
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

export default withAuthenticator(App);
