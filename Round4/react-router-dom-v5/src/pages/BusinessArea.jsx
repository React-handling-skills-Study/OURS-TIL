import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import AreaDetail from '../components/AreaDetail';
import useHttp from '../hooks/use-http';
import { getAllMembers } from '../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import { SpinnerWrapper } from './Members';

const Wrapper = styled.div`
  position:absolute;
  top:25%;
  left:50%;
  transform:translate(-50%,-50%);
  h1{
    text-align:center;
    padding: 1rem 0;
  }
`

const AreaNavigation = styled.nav`
  display:flex;
  justify-content:center;
  align-items:center;
  width:1200px;
  li{
    min-width:300px;
  }
`
const StyledLink = styled(NavLink)`
  &.${props => props.activeClassName}{
    color: #95bcf0;
  padding-bottom:  0.25rem;
  border-bottom:  4px solid #95bcf0;
  }
`

const BusinessArea = () => {
	const {sendRequest, status, error, data:loadedMembers} = useHttp(getAllMembers);

	useEffect(()=>{
		sendRequest()
	},[sendRequest])

  const filteredArea = loadedMembers?.reduce((acc,cur) => {
  if(acc.findIndex(({country}) => country === cur.country) === -1 ){
     acc.push(cur)
    }
  return acc;
  },[])

  return (
    <>
    <Wrapper>
      <h1>:: Our company's business areas ::</h1>
      <AreaNavigation>
      {filteredArea?.map((area) =>
      <div key={area.normaldist}><StyledLink activeClassName='area' to={`/area/${area.country}`}>{area.country}</StyledLink></div>
      )
    }
    </AreaNavigation>
    </Wrapper>
    {status === 'pending' && <SpinnerWrapper><LoadingSpinner /></SpinnerWrapper>}
    <Route path={'/area/:memberarea'} exact>
      <AreaDetail filteredArea={filteredArea} loadedMembers={loadedMembers} />
			</Route>
		
    </>
  );
};

export default BusinessArea;