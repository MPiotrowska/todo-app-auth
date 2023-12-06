import { useState } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import { useSaveTasks } from '../hooks/useSaveTasks';
import { Task, useTasks } from '../contexts/TasksContext';
import '../styles/TodoList.scss';
import '../styles/App.scss';

const TodoList = () => {
  const { setToken } = useAuth();
  const [newTaskText, setNewTaskText] = useState('');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [error, setError] = useState('');
  const { tasks, dispatch } = useTasks();

  useSaveTasks(tasks); // useEffect to save new state to cookie

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTaskText.trim() === '') {
      setError('Task cannot be empty'); // Sets error message
      return;
    }
    dispatch({ type: 'ADD', text: newTaskText });
    setNewTaskText('');
    setError(''); // Clears error message on successful add
  };

  const handleEdit = (task: Task) => {
    setEditTaskId(task.id);
    setEditText(task.text);
  };

  const handleUpdate = (id: number) => {
    dispatch({ type: 'UPDATE', payload: { id, text: editText } });
    setEditTaskId(null);
    setEditText('');
  };

  const handleLogout = () => {
    setToken(null);
    dispatch({ type: 'CLEAR' }); // Clears tasks
    Cookies.remove('auth_token'); // Removes the cookie on logout
    Cookies.remove('tasks'); // Clears tasks cookie
  };
  return (
    <div className='todo-list-container'>
      <h1 className='app-title'>Welcome to Your Todo List</h1>
      <form onSubmit={addTask} className='todo-add-form'>
        <input
          type='text'
          className='todo-input'
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
          placeholder='What needs to be done'
        />
        <Button type='submit' className='todo-submit-btn'>
          Add Task
        </Button>
      </form>
      {error && <div className='error-message'>{error}</div>}
      <ul className='todo-items'>
        {tasks.map(task => (
          <li key={task.id} className='todo-item'>
            {editTaskId === task.id ? (
              <input
                type='text'
                value={editText}
                onChange={e => setEditText(e.target.value)}
                className='todo-edit-input'
              />
            ) : (
              <p className={task.isDone ? 'task-done' : 'task-text'}>
                {task.text}
              </p>
            )}
            <div className='task-actions'>
              <button
                onClick={() => dispatch({ type: 'TOGGLE', id: task.id })}
                className='toggle-btn'
              >
                {task.isDone ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => dispatch({ type: 'REMOVE', id: task.id })}
                className='remove-btn'
              >
                Remove
              </button>
              {editTaskId === task.id ? (
                <button
                  onClick={() => handleUpdate(task.id)}
                  className='save-btn'
                >
                  Save
                </button>
              ) : (
                <button onClick={() => handleEdit(task)} className='edit-btn'>
                  Edit
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <Button className='logout-btn' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default TodoList;
