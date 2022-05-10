import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Validation from './components/Validation';

const App = () => {
  const [todos,setTodos] = useState([])

  //고유값으로 사용될 id
  //ref를 사용하여 변수담기
  const nextId = useRef(4); //불필요한 렌더링 x
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,       
        text,
        checked: false,
      };

      if (Validation(todo.text)) {
        setTodos([...todos, todo]); 
      
        nextId.current += 1;
      }

    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id? { ...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [todos],
  );


  

  

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> 
    </TodoTemplate>                           // onToggled로 오타...     // 삽입5. TodoList에 렌더링 할 것들을 전달함
  );                                                                    // App은 TodoListItem과는 직접적인 연결 X
};

export default App;
