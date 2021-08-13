import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoForm = ({handleAdd}) => {
   
   // hook useForm 
   const [ { description }, handleInputChange, reset ] = useForm({
      description: ''
   });

   //Capturar el envio del formulario 
   const handleSubmit = (e) => {
      // prevenimos el envio del formulario 
      e.preventDefault();

      // Comprobamos que le campo no venga vacio 
      if ( description.trim().length <= 1 ) {
         return;
      }

      // Creamos el todo que vamos a almacenar
      const newTodo = {
         id: new Date().getTime(),
         desc: description,
         done: false
      };

      // Se lo enviamos a la funcion que lo agregar a nuestro estado 
      handleAdd(newTodo);

      // Limpiamos el Formulario 
      reset();
   };

   return (
      <>      
         <h4> Agregar TODO </h4>
         <hr />
         <form onSubmit={ handleSubmit } >
            <input 
               className="form-control" 
               onChange={handleInputChange} 
               value={description} 
               type="text" 
               name="description" 
               placeholder="Aprender ...." 
               autoComplete="off"
            />
            <button 
               type="submit"  
               className="btn 
               btn-outline-primary mt-2 btn-block"
            > 
               Agregar 
            </button>
         </form> 
      </>
   )
}
