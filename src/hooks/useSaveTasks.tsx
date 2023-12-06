import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Task } from '../contexts/TasksContext';

export const useSaveTasks = (tasks: Task[]): void => {
  useEffect(() => {
    Cookies.set('tasks', JSON.stringify(tasks));
  }, [tasks]);
};
