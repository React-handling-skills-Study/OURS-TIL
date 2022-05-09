import styled from '@emotion/styled/';
import React from 'react';
import TodoListItem from './TodoListItem';

const List = styled.div`
  min-height: 320px;
  max-height:513px;
  overflow-y:auto;
`

const TodoList = ({todos, onRemoveItem, onToggle}) => {
  return (
    <List>
      {todos?.map(todo => (<TodoListItem todo={todo} key = {todo.id} onRemoveItem={onRemoveItem} onToggle={onToggle} />))}
    </List>
  );
};

export default TodoList;