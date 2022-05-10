import styled from '@emotion/styled';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import cn from 'classnames';


const ListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  .checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    
    svg {
      font-size: 1.5rem;
  
    }

    .text {
      margin-left: 0.5rem;
      flex: 1;
    }
  
    &.checked {
      svg {
        color: #00483a;
      }
      
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
      
  
  
    
  }
  }

  & + & {
    border-top: 1px solid red;
  }
`




const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`


const TodoListItem = ({todo, onRemove, onToggle}) => {
  const { id, text, checked } = todo;
  
    return (
      
      <ListItem>
        <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
      

        <Remove onClick={() => onRemove(id)}>   
          <MdRemoveCircleOutline/>          
        </Remove>
      </ListItem>
      
      
    );
  


  
  
  
};

export default TodoListItem;