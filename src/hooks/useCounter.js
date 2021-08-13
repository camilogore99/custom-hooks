import { useState } from 'react';

// si no me manda nada el valor inicial es de 0
export const useCounter = ( initialState = 0 ) => {
   
   //estado 
   const [counter, setCounter] = useState(initialState)

   // funcion para incrementa 
   const increment = () => {
      setCounter( counter + 1 )
   }
   //Funcion que decrementa 
   const decrement = () => {
      setCounter( counter - 1 )
   }
   //Funcion que resetea  
   const reset = () => {
      setCounter( initialState )
   }

   // Callback
   return {
      counter,
      increment,
      decrement,
      reset,
   };

}
