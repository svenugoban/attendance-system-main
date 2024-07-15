// src/App.js
import React from 'react';
import Login from './components/login/login';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;
