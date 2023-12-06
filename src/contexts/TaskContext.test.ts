import { tasksReducer } from './TasksContext';

interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

describe('tasksReducer', () => {
  test('handles ADD action', () => {
    const initialState: Task[] = []; // 'initialState' implicitly has type 'any[] error,  so adding type the initialState as Task[]
    const newState = tasksReducer(initialState, {
      type: 'ADD',
      text: 'Test Task',
    });
    expect(newState.length).toBe(1);
    expect(newState[0].text).toBe('Test Task');
    expect(newState[0].isDone).toBe(false);
  });

  test('handles TOGGLE action', () => {
    const initialState = [{ id: 1, text: 'Test Task', isDone: false }];
    const newState = tasksReducer(initialState, { type: 'TOGGLE', id: 1 });
    expect(newState[0].isDone).toBe(true);
  });

  test('handles REMOVE action', () => {
    const initialState = [{ id: 1, text: 'Test Task', isDone: false }];
    const newState = tasksReducer(initialState, { type: 'REMOVE', id: 1 });
    expect(newState.length).toBe(0);
  });

  test('handles CLEAR action', () => {
    const initialState = [{ id: 1, text: 'Test Task', isDone: false }];
    const newState = tasksReducer(initialState, { type: 'CLEAR' });
    expect(newState.length).toBe(0);
  });
});
