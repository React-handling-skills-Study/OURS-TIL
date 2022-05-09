import styled from '@emotion/styled';
import React from 'react';


const DiaryLayout = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  padding: 1rem;

`

const MyDiary = ({children}) => {
  return (
    <DiaryLayout>
      <div>{children}</div>
    </DiaryLayout>
  );
};

export default MyDiary;