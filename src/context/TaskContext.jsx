import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  const createTask = (task) => {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    let filterTasks = tasks.filter((task) => task.id !== taskId);
    setTask(filterTasks);
  };

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
