import {useDispatch, useSelector} from "react-redux";
import AddForm from "./AddForm";

import { deleteTodo, markAsDone } from "../features/todoLists/todoListsSlice";

export function TodoLists(){

    const todoLists=useSelector((state)=>state.todoLists);
    console.log(todoLists);
    const dispatch=useDispatch();
    let handleDelete=(id)=>{
        dispatch(deleteTodo(id));
    }
    let handleMarkAsDone=(id)=>{
       dispatch(markAsDone(id));
    }
    return (
        <>
        <AddForm/>
        <h3>To do lists</h3>
         <ul>
            {
                todoLists.map((todoList)=><li key={todoList.id} style={{textDecorationLine: todoList.isDone?"line-through":""}}>{todoList.task}&nbsp;&nbsp;<button onClick={()=>{
                    handleDelete(todoList.id);
                }}>Delete</button><button onClick={()=>{
                    handleMarkAsDone(todoList.id)
                }}>Mark as Done</button></li>
                )
            }
         </ul>    
    </>
    );
}