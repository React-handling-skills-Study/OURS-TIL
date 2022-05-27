import React, { useEffect } from 'react';
import MembersList from '../components/MembersList'
import styled from '@emotion/styled';
import { Link, Route, useHistory, useLocation, useParams } from 'react-router-dom';
import { getAllMembers } from '../lib/api';
import useHttp from '../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';

const Wrapper = styled.div`
	position:relative;
	display:flex;
	justify-content:space-between;
	align-items:center;
	gap:10px;
	margin-top:2rem;
	div{
		position:absolute;
		right: -278px;
		display:flex;
		justify-content:center;
		align-items:center;
		gap:20px;
		button{
		padding: 0 .5rem;
		min-width:100px;
		min-height:34px;
		border: 1px solid white;
		background-color:transparent;
		color:white;
		cursor: pointer;
		transition:.2s;
		
	}
	button:first-of-type:hover{
			color:#112491;
			background-color:#ffe;
		}
	a{
		display:flex;
		align-items:center;
		justify-content:center;
		border: 1px solid #f14;
		color: orangered;
		text-align:center;
		min-width:100px;
		min-height:34px;
		background-color:transparent;
		font-size:14px;
		transition:.2s;
	}
	a:hover{
		color:#fff;
		border:1px solid #f14;
		background-color:#f14;
	}
	}
	
`

export const SpinnerWrapper = styled.div`
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
`

const sortMembers = (member, isSortByName) => {
	return member?.sort((memberA,memberB) => {
		if(isSortByName){
			return memberA.title > memberB.title ? 1 : -1;
		} else{
			return memberA.title < memberB.title ? 1 : -1;
		}
	})
}

const Members = () => {
		const {sendRequest, status, data:loadedMembers, error} = useHttp(getAllMembers);
		const location = useLocation();
		const history = useHistory();
		const queryParams = new URLSearchParams(location.search);
		const isSortByName = queryParams.get('sort') === 'byname';
		

		useEffect(()=>{
			sendRequest();
		},[sendRequest])

		const onChangeSortData = () => {
			history.push({
				pathname: location.pathname,
				search: `?sort=${(isSortByName ? 'reversebyname' : 'byname' )}`
			})
		}
		const sortedMembers = sortMembers(loadedMembers,isSortByName) || [];

		if(status === 'pending'){
			return <SpinnerWrapper>
				<LoadingSpinner />
			</SpinnerWrapper>
		}
  return (
    <>
		
		<Wrapper>
    <h1>Material Industry Members</h1>
		<div>
		<button onClick={onChangeSortData}>{isSortByName ?'Reverse by name' : 'Sort by name'}</button>
		<Link to='/addmember'>Admin</Link>
		</div>
		</Wrapper>
   <MembersList dummydata={sortedMembers} />
     
    </>
  );
};

export default Members;