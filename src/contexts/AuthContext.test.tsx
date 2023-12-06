import { render, screen, fireEvent } from '@testing-library/react';
import AuthContext, { useAuth } from './AuthContext';
import '@testing-library/jest-dom';

const TestComponent = () => {
  const { token, setToken } = useAuth();
  return (
    <div>
      <span data-testid='token-value'>{token}</span>
      <button onClick={() => setToken('new-token')}>Change Token</button>
    </div>
  );
};

describe('AuthContext', () => {
  test('provides initial token value', () => {
    render(
      <AuthContext.Provider value={{ token: null, setToken: () => {} }}>
        <TestComponent />
      </AuthContext.Provider>,
    );
    expect(screen.getByTestId('token-value')).toHaveTextContent('');
  });

  test('updates token on setToken call', () => {
    const mockSetToken = jest.fn();
    render(
      <AuthContext.Provider value={{ token: null, setToken: mockSetToken }}>
        <TestComponent />
      </AuthContext.Provider>,
    );
    fireEvent.click(screen.getByText('Change Token'));
    expect(mockSetToken).toHaveBeenCalledWith('new-token');
  });
});
