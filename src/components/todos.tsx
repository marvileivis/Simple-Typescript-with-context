import React, {useContext} from 'react';
import Todo from '../models/todo';
import TodoElem from '../components/todo';
import classes from './Todos.module.css';
import {TodosContext} from '../store/todosContext';
const Todos: React.FC= ()=>{
const tdsCtx=useContext(TodosContext);
    return (<ul className={classes.todos}>
        {tdsCtx.items.map(item=>
            (<TodoElem key={item.text} 
                descrip={item.description}
                 text={item.text} 
                deleteTodo={tdsCtx.removeTodo.bind(null,item.id)}/>)
            )}
       
    </ul>
    );
}
export default Todos;