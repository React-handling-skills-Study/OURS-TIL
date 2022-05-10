import DiaryListItem from "./DiaryListItem";
import styled from '@emotion/styled';

const List = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`


const DiaryList = ({ diaries, onRemove, handleOpen }) => {
  return (
    <List>
      {diaries.map(diary => (              
        <DiaryListItem               
          diary={diary}
          key={diary.id}
          onRemove={onRemove}            // key값의 의미...  고유, index 지양하는 이유
          handleOpen={handleOpen}
          set       
        />
      ))}
    </List>
  );
};



export default DiaryList;