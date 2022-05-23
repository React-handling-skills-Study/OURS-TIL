import styled from '@emotion/styled';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Contect from './Contect';


const Banner = styled.div`
  margin: 2rem 0;
  padding:5rem;
  border: 1px solid #fff;
  font-size: 22px;
  
`
const ButtonWrapper = styled.div`

display:flex;
justify-content:flex-end;
align-items:center;
padding: 2rem;
gap:20px;
a{
  text-decoration:none;
  text-align:center;
  color:#ddd;
  font-size: 16px;
  border:0;
  background-color: rgba(17, 68, 255,0.8);
  cursor: pointer;
    padding: 1rem;
    flex-grow:0.5;
    &:last-of-type{
      flex-grow:0.5;
    }
    &:hover{
      background-color: #fff;
      color: rgba(17, 68, 255,0.8);
    }
  }
  
`
const Home = () => {
  return (
    <>
    <h1>Material Industry</h1>
      <Banner><h2>Sustainable growth engine and ESG leading company</h2>
      <ButtonWrapper>
      <Link to="/contect">Contect</Link>
      <Link to="/about">About Us</Link>
      </ButtonWrapper>
      </Banner>  
      
    
      </>
  );
};

export default Home;