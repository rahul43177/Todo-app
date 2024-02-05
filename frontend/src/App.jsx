import {useState , useEffect} from 'react';
import { CreateTodo } from "./Components/CreateTodo";
import {Todos} from './Components/Todo'
function App() {
  const [todos , setTodos] = useState([]);

  //hitting the backend here 

  useEffect(() => {
    fetch('http://localhost:3000/getAllTodos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => console.error('Fetch error:', error));
  }, []); //




  return (
    <div>
      <CreateTodo/>
      <Todos todos = {todos}/>
    </div>
  )
}


export default App