import React, { useEffect, useReducer } from 'react'

import './style.css'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'

// Cuando se lee el estado inicial el init se encargada de enviarle el valor del return
const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || [];
};


export const TodoApp = () => {

   // Hook useReducer para manejar todos los estados de mi aplicacion 
   const [ todos, dispatch ] = useReducer(todoReducer, [], init);

   // El efecto que me guarda los todos en el localStorage
   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   //Funcion para eliminar un todo
   const handleDelete = (todoId) => {
      //enviamos el id a eliminar en el objeto del dispatch  
      dispatch({
         type: 'delete',
         payload: todoId
      });
   }

   // Funcion para cambiarle el estado a mi tarea 
   const handleToggle = (todoId) => {
      dispatch({
         type: 'toggle',
         payload: todoId
      });
   };

   // Funcion para agregar un todo 
   const handleAdd = (newTodo) => {
      dispatch({
         type:'add',
         payload: newTodo
      });
   };

   return (
      <div>
         <h1>Todo App ( { todos.length } ) </h1>
         <hr />
         <div className="row">
            <div className="col-7">
               <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete} />
            </div>
            <div className="col-5">
               <TodoForm handleAdd={handleAdd} />
            </div>
         </div>
      </div>
   )
}
