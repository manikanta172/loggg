import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import './App.css';

function App() {
  const [page, setPage] = React.useState('login');

  return (
    <div>
      <div>
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('signup')}>Signup</button>
        <button onClick={() => setPage('forgot')}>Forgot</button>
      </div>

      {page === 'login' && <Login />}
      {page === 'signup' && <Signup />}
      {page === 'forgot' && <ForgotPassword />}
    </div>
  );
}

export default App;