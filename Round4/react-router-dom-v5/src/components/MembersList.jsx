import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import MemberDescription from './MemberDescription';
import { useParams } from 'react-router-dom';

const MembersProfile = styled.ul`
margin-top: 2rem;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  gap:50px;
`




const MembersList = ({dummydata}) => {
  
  
  return (
    <>
     <MembersProfile>
      {dummydata.map((dummy) =>
      <MemberDescription key={dummy.normaldist} dummy={dummy} />
      )}
     </MembersProfile>
  
    </>
  );
};

export default MembersList;