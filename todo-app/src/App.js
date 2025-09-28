import {useState} from "react";


function App(){
  const[newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleTodoTextChange(e){
    setNewTodoText(e.target.value);
  }

  function handleAddTodo(e){
    e.preventDefault();

    if(newTodoText.trim() === "") return

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      done: false
    };

    setTodos([...todos, newTodo]);
    setNewTodoText("");

  }

  function handleCheckBox(id){
    setTodos(todos.map(t => t.id === id ? {...t, done: !t.done} : t))
  }

  return(
    <div>
      <input value={newTodoText} type = "text" onChange={handleTodoTextChange}/>
      <button type="submit" onClick={handleAddTodo}>Add</button>
      <div>
        <ul>
          {todos.map(todo => (
              <li
                key={todo.id}>{todo.text}
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleCheckBox(todo.id)}
                />
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;