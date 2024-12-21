import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todoLists: [{
    id:"123",
    task:"code",
    isDone:false
  }],
}

export const todoListsSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: {
   addNewTodo:(state,action)=>{
      const newTodo={
        id:nanoid(),
        task:action.payload,
        isDone:false,
      }
      state.todoLists.push(newTodo);
     
   },
   deleteTodo:(state,action)=>{
    state.todoLists=state.todoLists.filter((todoList)=>(todoList.id!==action.payload));
   },
   markAsDone:(state,action)=>{
    state.todoLists.map((todoList)=>{
        if(todoList.id===action.payload){
            todoList.isDone=true;
        }
    })
   }
  },
})

// Action creators are generated for each case reducer function
export const { addNewTodo,deleteTodo,markAsDone } = todoListsSlice.actions

export default todoListsSlice.reducer