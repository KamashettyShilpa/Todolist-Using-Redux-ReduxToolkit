import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../features/todoLists/todoListsSlice";



export default function AddForm(){
    const [task,setTask]=useState("");
    let dispatch=useDispatch();
    let handleSub =(evt)=>{
        evt.preventDefault();
        dispatch(addNewTodo(task));
        setTask("");
    }
   
    return (
        <form onSubmit={handleSub}>
            <input type="text"  onChange={(e)=>setTask(e.target.value)}></input>
            <button>Add Task</button>
        </form>
    );
}