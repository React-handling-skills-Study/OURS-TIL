import { useReducer,useCallback } from "react";

import React from 'react';
import { useHistory, useLocation } from "react-router-dom";







const sortMembers = (member, isSortByName) => {
  return member?.sort((memberA,memberB) => {
    if(isSortByName){
      return memberA.title > memberB.title ? 1 : -1;
    } else{
      return memberA.title < memberB.title ? 1 : -1;
    }
  })
}  
// call useHttp for newmembers
const useSort = (array) => {

  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const isSortByName = queryParams.get('sort') === 'byname'
  const sortedMembers = sortMembers(array,isSortByName) || [];
  const onChangeSortData = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortByName ? 'reversebyname' : 'byname'}`
    })
  }
  return ({
    sortedMembers,
    onChangeSortData,
    isSortByName
  })
}

  export default useSort;

