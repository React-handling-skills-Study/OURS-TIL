import styled from '@emotion/styled';
import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Wrapper = styled.div`
  position:absolute;
  top:70%;
  left:50%;
  transform:translate(-50%,-50%);
  h1{
    text-align:left;
    padding: 1rem 0;
  }
  h2{
    width:512px;
    padding-top: 2rem;
  }
`
const BranchInfo = styled.div`
  font-size:18px;
`

const Member = styled.div`
  padding: .2rem;
  border-bottom: 1px solid white;
  
  a{
    color: #fff;
  }
  &:hover{
  
  padding-bottom:  0.25rem;
  border-bottom:  1px solid #95bcf0;
  }
  a:hover{
    color:#a14a14;
  }
`


const AreaDetail = ({filteredArea,dummy}) => {
  const params = useParams();
  console.log(params);
  const branchInfo = filteredArea.find((item) => item.country === params.memberarea)
  const branchMembers = dummy.filter((dummy) => dummy.country === params.memberarea);
  console.log(params.memberarea)
  console.log(branchInfo)
  console.log(branchMembers)
  return (
    <>   
    <Wrapper>
      <h1>M.I {params.memberArea} Branch</h1>
      <BranchInfo>Branch number: {branchInfo.phone}</BranchInfo>
      <BranchInfo>Branch Address: {branchInfo.address}</BranchInfo>
      <BranchInfo>Branch email: {branchInfo.email}</BranchInfo>
      <BranchInfo>NPD:(net profit for the day) :{branchInfo.currency}</BranchInfo>
      <BranchInfo>Weekly Report Submission: {branchInfo.isSales ? "Summission" : "Not yet"}</BranchInfo>
      <div>
        <h2>{params.memberArea} Branch Employee</h2>
      {branchMembers.map(member =>
        <Member key={member.normaldist}><Link to={`/members/${member.id}`}>{member.title} ({member.phone})</Link></Member>)}
    </div>
    </Wrapper>
    
    </>
  );
};

export default AreaDetail;