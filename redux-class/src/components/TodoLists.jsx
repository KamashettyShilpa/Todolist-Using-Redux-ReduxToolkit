import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import './TodoLists.css';
import Button from '@mui/material/Button';

import { deleteTodo, markAsDone } from "../features/todoLists/todoListsSlice";

export function TodoLists() {

    const todoLists = useSelector((state) => state.todoLists);
    console.log(todoLists);
    const dispatch = useDispatch();
    let handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
    let handleMarkAsDone = (id) => {
        dispatch(markAsDone(id));
    }
    return (
        <><h1>Todo List App</h1>
            <AddForm />
            <div className="ShowTasks">
                <h2>Todo lists</h2>
                <div className="lists">
                    <ul>
                        {
                            todoLists.map((todoList) => <li key={todoList.id} ><span style={{ textDecorationLine: todoList.isDone ? "line-through" : "" }}>{todoList.task}</span>&nbsp;&nbsp;
                                <Button variant="contained" onClick={() => { handleDelete(todoList.id); }} size='small'>Delete</Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="contained" onClick={() => { handleMarkAsDone(todoList.id) }} size='small'>Mark as Done</Button></li>

                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    );
}
