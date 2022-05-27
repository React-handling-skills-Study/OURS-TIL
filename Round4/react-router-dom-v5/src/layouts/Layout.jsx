import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

const MainLayout = styled.div` 
  margin: 3rem auto;
  width: 90%;
  max-width: 40rem;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  h1{
    width:100%;
  }
  h1 a{
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #ccc;
    color:white;
  }
  a{
    margin-right: 1rem;
    color:#ccc;
  }
  ul{
    display:flex;
    li{
      padding: .5rem 0;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
    color:#ccc;
    transition : .2;
  &.${props => props.activeClassName}{
    border-bottom: 3px solid #fff;
    color:white;
  }
`
const Layout = ({children,isLogged}) => {
  return (
    <MainLayout>
      <h1><Link to='/'>Material Industry</Link></h1>
      <ul>
      <li><StyledNavLink activeClassName="any" to='/contect'>Contect</StyledNavLink></li>
      <li><StyledNavLink activeClassName="any" to='/about'>About</StyledNavLink></li>
      <li><StyledNavLink activeClassName="any" to='/members'>Members</StyledNavLink></li>
      <li><StyledNavLink activeClassName="any" to='/area'>Business Area</StyledNavLink></li>
      <li><StyledNavLink activeClassName="any" to='/newmember'>New Members</StyledNavLink></li>
      </ul>
      <ul>
      <li><StyledNavLink activeClassName="any" to='/help'>Help</StyledNavLink></li>
      <li><StyledNavLink activeClassName="any" to='/login'>{isLogged ? "Log-Out" : "Log-In"}</StyledNavLink></li>
      </ul>
      {children}
    </MainLayout>
  );
};

export default Layout;