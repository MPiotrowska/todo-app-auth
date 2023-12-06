import { useEffect, useState, useReducer } from 'react';
import Cookies from 'js-cookie';
import AuthContext from './contexts/AuthContext';
import TasksContext, { tasksReducer } from './contexts/TasksContext';
import Protected from './components/Protected';
import { safeJsonParse } from './utils/safeJsonParse';

import './styles/App.scss';

function App() {
  const [token, setToken] = useState<string | null>(null); // initialize with null or retrieve from cookie
  const savedTasks = Cookies.get('tasks');
  const initialTasks = savedTasks ? safeJsonParse(savedTasks) : [];

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  useEffect(() => {
    const savedToken = Cookies.get('auth_token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <Protected />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
