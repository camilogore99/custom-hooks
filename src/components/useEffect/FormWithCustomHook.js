
import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'


export const FormWithCustomHook = () => {

   // hacemos el llmado al custom hook 
   const [formValues, handleInputChange] = useForm({ 
      name: '',
      email: '',
      password: ''
   })

   // valores del objeto de estado 
   const { name, email, password } = formValues;

   // cada que el formulario se envie //
   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
   };

   return (
      <form onSubmit={handleSubmit}>
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
         <div className="form-group">
            <input
               type="password"
               name="password"
               className="form-group"
               placeholder="*****"
               autoComplete="off"
               value={ password }
               onChange={ handleInputChange }
            />
         </div>
         <button type="submit" className="btn btn-primary">
            Guardar 
         </button>
      </form>
   );
};
