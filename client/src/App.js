import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register'
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/test' element={<ProtectedRoute><Test /></ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const user = localStorage.getItem('expensetracker-dev-user');
  console.log('ProtectedRoute check, user:', user); 

  if (user) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}

export default App;
