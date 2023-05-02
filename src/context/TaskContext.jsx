import { createContext } from "react";
import { tasks as data } from "../tasks";
import React, { useEffect, useState } from "react";
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
   //se usa use effect para que el use state tenga los valores despues que carguen los datos de task
  //de lo contrario estaría vacío
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(newTask) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: newTask.title,
        description: newTask.description,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((td) => td.id !== taskId));
  }
  //viene desde TaskCards
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
