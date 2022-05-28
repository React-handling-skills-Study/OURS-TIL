import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import OrangeHawksMemberList from '../components/OrangeHawksMemberList';

const Wrapper = styled.div`
  margin: 1rem 0;
`
const LinkWrapper = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  a{
    padding: 1rem;
    color:white;
    border: 1px solid white;
  }
`



const NewMember = () => {
  const [showingMember,setShowingMember] = useState(false)
  const handleShowingNewMembers = (bool) => {
    setShowingMember(bool);
  }
  return (
    <>
    <Wrapper>
    <h3>We made a good deal!</h3>
     <p>In 2022, Materials Industry and Orange Hawks Inc. has murged. </p> 
     </Wrapper>
    <LinkWrapper>
    {!showingMember &&<Link onClick={(e)=>handleShowingNewMembers(true)} to="/newmember/orangehawks">See new members</Link>}
    </LinkWrapper>
    {showingMember && <Route path="/newmember/orangehawks">
    
      <OrangeHawksMemberList handleShowingNewMembers={handleShowingNewMembers} />
    
    </Route>}
    
    </>
  );
};

export default NewMember;