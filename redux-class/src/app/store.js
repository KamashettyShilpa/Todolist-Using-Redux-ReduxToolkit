import { configureStore } from '@reduxjs/toolkit'
import todoListsReducer from '../features/todoLists/todoListsSlice'
export const store = configureStore({
  reducer: todoListsReducer,
})