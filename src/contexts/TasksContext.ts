import { createContext, useContext } from 'react';

export interface Task {
  id: number;
  text: string;
  isDone: boolean;
}

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number }
  | {
      type: 'UPDATE';
      payload: {
        id: number;
        text: string;
      };
    }
  | { type: 'CLEAR' };

const initialTasks: Task[] = [];

export const tasksReducer = (state: Task[], action: ActionType): Task[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text, isDone: false }];

    case 'TOGGLE':
      return state.map(task =>
        task.id === action.id ? { ...task, isDone: !task.isDone } : task,
      );

    case 'REMOVE':
      return state.filter(task => task.id !== action.id);

    case 'UPDATE':
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task,
      );

    case 'CLEAR':
      return initialTasks;

    default:
      return state;
  }
};

const TasksContext = createContext<{
  tasks: Task[];
  dispatch: React.Dispatch<ActionType>;
}>({
  tasks: initialTasks,
  dispatch: () => {},
});

export const useTasks = () => useContext(TasksContext);

export default TasksContext;
