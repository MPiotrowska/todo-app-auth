import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import AuthContext from '../contexts/AuthContext'; // Imports the context

// Mocks the AuthContext
const mockSetToken = jest.fn();

const renderLogin = () =>
  render(
    <AuthContext.Provider value={{ token: null, setToken: mockSetToken }}>
      <Login />
    </AuthContext.Provider>,
  );

test('renders login form', () => {
  renderLogin();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});

test('allows the user to enter credentials', () => {
  renderLogin();
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'fakeUser@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'fakePassword123' },
  });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(mockSetToken).toHaveBeenCalledWith('dummy-token');
});
