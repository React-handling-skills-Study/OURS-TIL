import styled from '@emotion/styled';

import {

  MdRemoveCircleOutline,
  MdOutlineSouth,
} from 'react-icons/md';



const ListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  

  
    
    svg {
      font-size: 1.5rem;
  
    }

    .text {
      margin-left: 0.5rem;
      flex: 1;
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

const Content = styled.textarea` 
  background-color: #f6f5ef;
  width: 100%;
  box-sizing: border-box;
  display: ${(props) => props.opened? 'block' : 'none'};
`
const Unfold = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: black;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`

const DiaryListItem = ({diary, onRemove, handleOpen}) => {
  const { id, text, opened } = diary;

  const today = new Date();
  
  const fullDate = today.toLocaleDateString();

  const day = today.getDay();

  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']





  return (
    <div>
      <ListItem>
        
        <Unfold onClick={() => handleOpen(id)}><MdOutlineSouth/></Unfold>
        <div className="text">{fullDate + week[day] + ": " + text}</div>
        <Remove onClick={() => onRemove(id)}><MdRemoveCircleOutline/></Remove>
      </ListItem>
      <Content placeholder="일기를 작성하세요" rows="7" cols="33" opened={opened}></Content>
    </div>

  );
};

export default DiaryListItem;