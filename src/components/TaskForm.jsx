import { useState, useEffect, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

import React from "react";

function TaskForm() {
  const {createTask} = useContext(TaskContext)
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    //aqui estamos mandando a llamar a la funcion que recibimos mediante el props
    //que recibe un valor, le pasamos los datos de newTask
    createTask(newTask);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="grid grid-cols-none p-4 bg-cyan-800 mb-4 rounded-md" onSubmit={handleSubmit}>
        <input className="p-3 w-full mb-2"
          placeholder="Escribe el titulo de tu tarea"
          onChange={(t) => {
            setTitle(t.target.value);
          }}
          value={title}
        ></input>
        <textarea className="p-3 w-full mb-2"
          placeholder="Escribe la descripción de tu tarea"
          onChange={(d) => {
            setDescription(d.target.value);
          }}
          value={description}
        ></textarea>
        <button className='bg-gray-600 rounded-md mt-2 px-2 py-1 hover:bg-gray-800 mx-auto text-white'>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
