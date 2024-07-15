import React from "react";
import Login from "./components/login/login";
import { AuthProvider } from "./AuthContext";
import HomePage from "./components/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
