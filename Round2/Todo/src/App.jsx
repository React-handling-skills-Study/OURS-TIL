import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import Validation from './components/Validation';
import axios from 'axios';
const App = () => {
  const [todos, setTodos] = useState([]);

  //고유값으로 사용될 id
  //ref를 사용하여 변수담기
  const nextId = useRef(4); //불필요한 렌더링 x

  const onInsert = useCallback(
    (text) => {
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
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  // AXIOS TEST CODE
  const url = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos';
  const apiKey = 'FcKdtJs202204';
  const uesrName = 'KDT2_ParkJiHoon';

  // GET 해보기
  const onClickGet = async () => {
    const axiosGet = await axios({
      url,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        apikey: apiKey,
        username: uesrName,
      },
    });
    console.log(axiosGet.data);
  };

  //POST 해보기

  async function onClickPost() {
    const axiosPost = await axios({
      url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey: apiKey,
        username: uesrName,
      },
      data: {
        title: '박지훈',
        order: 2,
      },
    });
    console.log(axiosPost.data);
  }

  // DELETE 해보기

  const onClickDelete = async () => {
    const axiosDelete = await axios({
      url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/aPYPBkuf83wPjtRR541U',
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        apikey: apiKey,
        username: uesrName,
      },
    });
    console.log(axiosDelete.data);
  };

  // 명성님 파이어베이스 연습
  const onClickFirebase = async () => {
    const get = await axios({
      url: 'https://wecart-ca053-default-rtdb.firebaseio.com/myungseong.json',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    console.log(get.data);
  };

  return (
    <TodoTemplate>
      <button onClick={onClickGet}>과제API 데이터 GET</button>
      <button onClick={onClickPost}>과제API 데이터 POST</button>
      <button onClick={onClickDelete}>과제API 데이터 DELETE</button>
      <button onClick={onClickFirebase}>파이어베이스 AXIOS 데이터 GET</button>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate> // onToggled로 오타...     // 삽입5. TodoList에 렌더링 할 것들을 전달함
  ); // App은 TodoListItem과는 직접적인 연결 X
};

export default App;
