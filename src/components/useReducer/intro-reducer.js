console.log('holaa');


// Nuestro estado inicial 
const initialState = [{
   id: 1,
   todo: 'Comprar leche',
   done: false 
}];

// El reducer 

// -> recibe dos parametros
// state --> Estado
// action --> Accion  
const todoReducer = ( state = initialState, action ) => {

   if (action?.type === 'agregar') {
      // retornamos el estado anterior y agregamos el nuevo 
      return [ ...state, action.Payload ];
   }

   //Siempre se debe retornar un estado 
   return state;
};

// Todos actuales 
let todos = todoReducer();

//Nuevo Todo 
const newTodo = {
   id: 2,
   todo: 'Comprar arepas',
   done: false 
};

// siempre hay un objeto que se llama action
const action = {
   type: 'agregar',
   Payload: newTodo
};

todos = todoReducer( todos, action )

console.log(todos);