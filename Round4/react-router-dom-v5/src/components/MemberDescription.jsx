import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';




const MemberCard = styled.li`
   position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:520px;
    height:150px;
    
    border: 1px solid #eee;
    p{
      margin-left:1.5rem;
    }
    p:first-of-type{
      font-size:22px;
      font-weight:bold;
      span{
        font-weight:normal;
        font-size:12px;
      }
    }
`;

const StyledLink = styled(Link)`
  
  position:absolute;
  right:0;
  bottom:10px;
  border: 1px solid #fff;
  padding: .4rem;
  transition: .2s;
  span{
    color:white;
  }
  &:hover{
    
    background-color:#fff;
    border:1px solid #112469;
    span{
      color: #112469;
    }
  }
`
// <p>Place of birth {dummy.country}</p>

const MemberDescription = ({dummy}) => {
  
  const comnum = Math.floor(((Math.random() * 30 + 20) * 10000).toFixed(5))
  return (
    <>
      <MemberCard>
        <p> {dummy.title} <span>Employee Number: {dummy.normaldist * comnum}</span></p>
        <p>Subsidiary: {dummy.company}</p>
        <StyledLink to={`/members/${dummy.id}`}><span>More Details...</span></StyledLink>
        
       </MemberCard>
      
    </>
  );
};

export default MemberDescription;