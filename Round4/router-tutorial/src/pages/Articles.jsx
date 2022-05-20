import { NavLink, Outlet } from "react-router-dom";

import React from 'react';

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  }
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <NavLink 
            to="/articles/1"
            style={({isActive}) => (isActive? activeStyle: undefined)}
            >게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({isActive}) => (isActive? activeStyle: undefined)}
            >게시글 2
          </NavLink>
            
        </li>
        <li>
          <NavLink 
            to="/articles/3"
            style={({isActive}) => (isActive? activeStyle: undefined)}
            >게시글 3
          </NavLink>
        </li>
      </ul>
    </div>
    
  );
};

const ArticleItem = ({id}) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <li>
      
    </li>
  )
}

export default Articles;