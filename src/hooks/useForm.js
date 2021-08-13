import { useState } from "react"


export const useForm = ( initialState = {} ) => {

   // recibe un objeto 
   const [values, setValues] = useState(initialState);

   const reset = () => {
      setValues(initialState);
   };
   // Del evento extraemos el target 
   const handleInputChange = ( { target } ) => {
     setValues({
        //le pasamos lo que ya tiene 
        ...values,
        // [target.name] -> Apunta a el nombre de mi propiedad
        // target.value -> el valor que escribe el usuario 
        [ target.name ]: target.value
     });
   };
   // Que quiero retornar 
   return [ values, handleInputChange, reset ];
};
