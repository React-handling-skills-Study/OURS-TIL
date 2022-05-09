import styled from '@emotion/styled';
import React from 'react';
import DiaryListItem from './DiaryListItem';

const List = styled.div`
max-width:512px;
height:212px;
overflow-y:scroll;
`

const DiaryList = ({diary,onRemoveDiary,setDiary}) => {
  return (
    <List>
      {diary?.map(daily =>( <DiaryListItem daily = {daily} key = {daily.id} onRemoveDiary={onRemoveDiary} setDiary={setDiary} />))}
    </List>
  );
};

export default DiaryList;