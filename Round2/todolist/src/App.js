import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";



function App() {
  const nextId = useRef(1);
  const [todos, setTodos] = useState([]);

  const onInsert = text => {
    const todo = {
      id: nextId.current,
      text,
      checked:false,
    };
    setTodos(prev => [...prev,todo])
    nextId.current += 1;
  }

  const onRemoveItem = id =>{
    setTodos(prev => prev.filter(todo => todo?.id !== id))
  }

  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo?.id === id ? {...todo, checked: !todo.checked} : todo)
    )
  }

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemoveItem={onRemoveItem} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
