
import { useState, useEffect  } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

   // Estado 
   const [formState, setFormState] = useState({ 
      name: '',
      email: '',
   })
   // valores del objeto de estado 
   const { name, email } = formState;

   // se ejecuta cada vez que hay un cambio en la app
   useEffect(() => {
     console.log('hey');
   }, [] );

   // se ej3cuta cada que formState cambia 
   useEffect(() => {
     console.log('form cambio');
   }, [ formState ] );

   // Se ejecuta cada que el email cambia 
   useEffect(() => {
     console.log('hey');
   }, [ email ] );

   // Del evento extraemos el target 
   const handleInputChange = ( { target } ) => {
      
     setFormState({
        //le pasamos lo que ya tiene 
        ...formState,
        // [target.name] -> Apunta a el nombre de mi propiedad
        // target.value -> el valor que escribe el usuario 
        [ target.name ]: target.value
     })
   }

   return (
      <>
         <h1> useEffect </h1>
         <hr />

         <div className="form-group">
            <input
               type="text"
               name="name"
               className="form-group"
               placeholder="Tu nombre"
               autoComplete="off"
               value={ name }
               onChange={ handleInputChange }
            />

         </div>
         <div className="form-group">
            <input
               type="text"
               name="email"
               className="form-group"
               placeholder="email@gmail.com"
               autoComplete="off"
               value={ email }
               onChange={ handleInputChange }
            />
         </div>

         { ( name === '123' ) && <Message /> }

      </>
   );
};
