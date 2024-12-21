import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../features/todoLists/todoListsSlice";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function AddForm() {
    const [task, setTask] = useState("");
    let dispatch = useDispatch();
    let handleSub = (evt) => {
        evt.preventDefault();
        dispatch(addNewTodo(task));
        setTask("");
    }

    return (
        <form onSubmit={handleSub}>

            <TextField id="outlined-basic" label="Enter Task" variant="outlined" onChange={(e) => setTask(e.target.value)} InputLabelProps={{
                style: { color: '#1972D2' },
            }} inputProps={{
                style: { color: '#1972D2' },
            }} /> <div style={{ margin: '20px 0' }}></div>
            <Button variant="contained" type="submit">Add task</Button>

        </form>
    );
}


