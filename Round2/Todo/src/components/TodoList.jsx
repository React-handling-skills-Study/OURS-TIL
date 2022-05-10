import TodoListItem from "./TodoListItem";
import styled from '@emotion/styled';

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`


const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <List>
      {todos.map(todo => (              
        <TodoListItem               
          todo={todo}
          key={todo.id}            // key값의 의미...  고유, index 지양하는 이유
          onRemove={onRemove}
          onToggle={onToggle}        
        />
      ))}
    </List>
  );
};



export default TodoList;