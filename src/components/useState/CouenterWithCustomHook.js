
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './couenter.css';

export const CouenterWithCustomHook = () => {

   // importamos el hook reautilizable para los procesos 
   const { state, increment, decrement, reset } = useCounter();

   return (
      <>
         <h1> Couenter With Hook: { state } </h1>
         <hr />

         <button onClick={ () => increment() } > + 1 </button>
         <button onClick={ () => reset() } > reset </button>
         <button onClick={ () => decrement() } > - 1 </button>
      </>
   )
}
