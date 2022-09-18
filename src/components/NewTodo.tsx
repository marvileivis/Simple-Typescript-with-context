import React,{useRef,useContext} from "react";
import classes from './NewTodo.module.css';
import {TodosContext} from '../store/todosContext'

const NewTodo: React.FC=()=>{
    const nameRef=useRef<HTMLInputElement>(null);
    const descRef=useRef<HTMLInputElement>(null);
   
     const tdsCTX=useContext(TodosContext);
    const newTooHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText=nameRef.current!.value;
        const enteredDescRef=descRef.current!.value;
        if(enteredText?.trim().length===0){
            return;
        }
        if(enteredDescRef?.trim().length===0){
            return;
        }
        descRef.current!.value='';
        nameRef.current!.value='';
        tdsCTX.addTodo(enteredText,enteredDescRef);

    }
return(
    <div>
    
          <form  className={classes.form} onSubmit={newTooHandler} >
   
   <label  htmlFor='name'>Name</label>
   <input id='name' type='text' ref={nameRef}></input>
   <label  htmlFor='description'>Description</label>
   <input id='description' type='text' ref={descRef}></input>

   <button >Submit Todo</button>

</form>
    </div>
   
);
};
export default NewTodo;