import { useAuth } from '../contexts/AuthContext';
import Login from './Login';
import TodoList from './TodoList';

const Protected = () => {
  const { token } = useAuth();

  if (!token) {
    return <Login />;
  }

  return <TodoList />;
};

export default Protected;
