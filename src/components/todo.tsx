import React, {useRef} from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';
const TodoElem: React.FC<{descrip:string,text:string, deleteTodo:()=>void}>=(props)=>{

  
    return(

        <>
          <li className={classes.item}>{props.text}</li>
        <h5 className={classes.item}>{props.descrip}</h5>
        <button onClick={props.deleteTodo} >Delete Todo</button>
        </>
    );

}
export default TodoElem;