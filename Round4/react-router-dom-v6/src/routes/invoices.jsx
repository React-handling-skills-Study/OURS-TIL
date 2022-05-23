import React from 'react';
import { getInvoices } from '../data';
import {NavLink,Outlet,useSearchParams} from 'react-router-dom'





export default function Invoices() {
  let invoices = getInvoices()
  // 매개변수를 검색하게 해주는 useSearchParams
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <div styled={{display:"flex"}}>
    <nav style={{borderRight: "solid 1px", padding: '1rem'}}>
      <input
      value={searchParams.get("filter") || ""}
      onChange={(event) => {
        let filter = event.target.value;
        if(filter){
          // setSearchParams. setState와 비슷한 개념으로 filter값(e.target.value)을 searchParams에 입력한다.
          // 필터 검색 매개변변수를 기반으로 인보이스 목록을 필터링한다.
          setSearchParams({ filter })
        } else {
          setSearchParams( { } );
        }
      }} />
     
    {invoices.filter((invoice) => {
      let filter = searchParams.get("filter");
      if(!filter){
        return true;
        
      }
      let name = invoice.name.toLowerCase();
      return name.startsWith(filter.toLowerCase());
    })
    .map((invoice) =>

    //  NavLink와 Link의 공통점과 차이점
    //   공통점: to 속성에 정의해 둔 url로 이동한다.
    //   차이점: NavLink는 현재 Url과 이동할 URL이 같은 경우 style 속성을 추가해주는 기능을 갖고 있다. 
    <NavLink
    style={({isActive}) => {
      return {
        display: 'block',
        margin: '1rem 0',
        // isActive라면 color가 동적으로 변경되게끔 만들어준다.
        color: isActive ? 'royalblue' : '',
      }
    }}
    to={`/invoices/${invoice.number}`}
    key={invoice.number}
    >
      {invoice.name}
    </NavLink>
    
    
    )}
    </nav>
    <Outlet />
    </div>
  );
};
