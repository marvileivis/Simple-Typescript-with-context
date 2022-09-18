
import './App.css';
import TodosContextProvider from './store/todosContext';
import Todos from './components/todos';
import NewTodo from './components/NewTodo';
function App() {
 

  return (
    <TodosContextProvider>

      <NewTodo/>
    
      <Todos/>
    </TodosContextProvider>
  );
}

export default App;
