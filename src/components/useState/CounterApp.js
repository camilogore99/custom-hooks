import {useState} from 'react'
import './couenter.css'


export const CounterApp = () => {
   
   // hook de estado 
   const [counter, setCounter] = useState({ 
      counter1:10,
      counter2:20,
      counter3:30,
      counter4:40
   });

   // Extraer las propiedades de mio estado 
   const { counter1,counter2,counter3,counter4 } = counter;
   return (
      <>
         <h1>Counter { counter1 } </h1>
         <h1>Counter { counter2 } </h1>
         <h1>Counter { counter3 } </h1>
         <h1>Counter { counter4 } </h1>
         <hr />

         <button 
         className="btn btn-primary"
         onClick={ () => {
            setCounter({
               ...counter,
               counter1: counter1 + 1, 
            })
         }}
         >
            +1
         </button>


      </>
   )
}
