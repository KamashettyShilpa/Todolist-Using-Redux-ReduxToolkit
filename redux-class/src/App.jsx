
import './App.css'
import { store } from './app/store'
import { TodoLists } from './components/TodoLists'
import { Provider } from 'react-redux'

function App() {
  

  return (
    <>
    <Provider store={store}>
    <TodoLists/>
    </Provider>
      
    </>
  )
}

export default App
