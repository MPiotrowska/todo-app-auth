import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';
import TasksContext, { Task } from '../contexts/TasksContext'; // Imports the context

// Mocks the TasksContext
const mockDispatch = jest.fn();
const initialTasks: Task[] = [{ id: 1, text: 'Existing Task', isDone: false }];

const renderTodoList = (tasks: Task[] = []) =>
  render(
    <TasksContext.Provider value={{ tasks, dispatch: mockDispatch }}>
      <TodoList />
    </TasksContext.Provider>,
  );

test('renders the add task form', () => {
  renderTodoList();
  expect(
    screen.getByPlaceholderText(/what needs to be done/i),
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
});

test('allows the user to add a task', () => {
  renderTodoList();
  const taskInput = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(taskInput, { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/add task/i));
  expect(mockDispatch).toHaveBeenCalledWith({ type: 'ADD', text: 'New Task' });
});

test('displays tasks and allows task interaction', () => {
  renderTodoList(initialTasks);
  expect(screen.getByText('Existing Task')).toBeInTheDocument();
});

test('allows the user to toggle a task as done/undone', () => {
  renderTodoList(initialTasks);
  fireEvent.click(screen.getAllByRole('button', { name: /done/i })[0]);
  expect(mockDispatch).toHaveBeenCalledWith({ type: 'TOGGLE', id: 1 });
});

test('allows the user to remove a task', () => {
  renderTodoList(initialTasks);
  fireEvent.click(screen.getAllByRole('button', { name: /remove/i })[0]);
  expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE', id: 1 });
});
