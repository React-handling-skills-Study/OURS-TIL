import styled from '@emotion/styled/';
import React from 'react';
import {MdCheckBox,MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md'

const ListItem = styled.div`
  padding:1rem;
  display:flex;
  align-items:center;
  &:nth-of-type(even){
    background: #f8f9fa;
  }
`

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg{
    font-size: 1.5rem;
  }
  &:checked{
    svg{
      color: #22b8cf;
    }
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  text-decoration: ${(props) => props.checked && "line-through"};
`
const Remove = styled.div`
cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  &:hover{
    color: #ff8787;
  }
`

const TodoListItem = ({todo,onRemoveItem,onToggle}) => {
  const {id,text,checked} = todo;
  return (
    <ListItem>
      <CheckBox onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}
        <Text checked={checked}>{text || ''}</Text>
      </CheckBox>
      <Remove onClick={()=> onRemoveItem(id)}>
        <MdRemoveCircleOutline/>
      </Remove>
    </ListItem>
  );
};

export default TodoListItem;