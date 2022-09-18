import React, { useState } from 'react';

import Todo from '../models/todo';
type TodosContextObject={
    items:Todo[];
    addTodo:(name:string,description:string)=>void;
    removeTodo:(id:string)=>void;
};
type props={
    children?:React.ReactNode;
}
export const TodosContext=React.createContext<TodosContextObject>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{

    }
});
const TodosContextProvider:React.FC<props>=({children})=>{
    const[todos,setTodos]=useState<Todo[]>([]);
    const onDeleteTodoHandler=(id:string)=>{
        setTodos((curState)=>{
          console.log(id);
          // return curState.concat(newTodo);
           return curState.filter(item=>item.id!==id);
         });
      };
        const onAddTodoHAndler=(name:string, descriptio:string)=>{
          const newTodo=new Todo(name, descriptio);
         
          setTodos((curState)=>{
           // return curState.concat(newTodo);
            return [newTodo,...curState];
          });
        };
        const contextValue:TodosContextObject={
            items:todos,
            addTodo:onAddTodoHAndler,
            removeTodo:onDeleteTodoHandler

        };
    return <TodosContext.Provider value={contextValue}>
        {children}
        
    </TodosContext.Provider>;
};
export default TodosContextProvider;