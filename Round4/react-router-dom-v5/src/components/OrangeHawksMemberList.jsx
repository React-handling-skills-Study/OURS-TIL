import styled from '@emotion/styled';
import { Box, Stack, Skeleton, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getAllNewMembers } from '../lib/api';
import NewMemberMessage from '../pages/NewMemberMessage';
import BasicCard from '../UI/BasicCard';
import LoadingSpinner from '../UI/LoadingSpinner';
import useSort from '../hooks/use-sort';




const Wrapper = styled.div`
position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const SortButton = styled(Button)`
  position:absolute;
  top: -64px;
  right:0;
  width:150px;
  height: 56px;
  color:#119;
  border: 1px solid rgba(200,200,200,0.3);
  &:hover{
   background-color: rgba(200,200,200,0.3);
  }
`


const sortMembers = (member, isSortByName,) => {
	return member?.sort((memberA,memberB) => {
		if(isSortByName){
			return memberA.name > memberB.name ? 1 : -1;
		} else{
			return memberA.name < memberB.name ? 1 : -1;
		}
	})
}
// call useHttp for newmembers
const OrangeHawksMemberList = ({handleShowingNewMembers}) => {
  const {status,data: loadedNewMember,sendRequest} = useHttp(getAllNewMembers);
  const [isShow,setIsShow] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const isSortByName = queryParams.get('sort') === 'byname'
  const sortedMembers = sortMembers(loadedNewMember,isSortByName) || [];
  
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return Array.from(new Array(9)).map((item, index) => (
      <Box key={index} sx={{ width: 200, marginRight: 0.5, my: 2 }}>
        <Stack spacing={10}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={150} height={118} />
        </Stack>
      </Box>
    ));
  }

  const showMessage = () => {
    setIsShow(prev => !prev)
    handleShowingNewMembers(true)
  }
  const onChangeSortData = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortByName ? 'reversebyname' : 'byname'}`
    })
  }
  return (
    <>
    
    {!isShow && <Wrapper>
      
      <SortButton onClick={onChangeSortData}>{isSortByName ? 'Reverse By Name' : 'Sort by name'}</SortButton>
      {sortedMembers?.map((member) => (
        <BasicCard
          key={member.id}
          id={member.id}
          address={member.address}
          branch={member.branch}
          description={member.description}
          email={member.email}
          entertingDate={member['entering-date']}
          name={member.name}
          phone={member.phone}
          showMessage={showMessage}
         
        />
      ))}
    </Wrapper>}
    {isShow && <Route path={`/newMember/orangehawks/:newmemberId`}>
    <NewMemberMessage loadedNewMember={loadedNewMember} showMessage={showMessage}  />
  </Route>}
    </>
  );
};

export default OrangeHawksMemberList;
