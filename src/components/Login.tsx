import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Cookies from 'js-cookie';
import Button from './Button';
import '../styles/Login.scss';
import '../styles/App.scss';

const VALID_CREDENTIALS = {
  email: 'fakeUser@example.com',
  password: 'fakePassword123',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error message
  const { setToken } = useAuth();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (
      email === VALID_CREDENTIALS.email &&
      password === VALID_CREDENTIALS.password
    ) {
      // Simulates fake request and store token in context
      const fakeToken = 'dummy-token';
      setToken(fakeToken);
      Cookies.set('auth_token', fakeToken); // Sets token in a cookie for persistence
      setError(''); // Clears error on successful login
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };
  return (
    <div>
      <h1 className='app-title'>Make Your Todo List</h1>
      <div className='login-container'>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>
                Email:
                <input
                  type='text'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </label>
            </div>
            <div className='form-group'>
              <label>
                Password:
                <input
                  type='password'
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
              </label>
            </div>
            <br />
            {error && <div className='error'>{error}</div>}{' '}
            {/* Displays error message */}
            <Button type='submit'>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
