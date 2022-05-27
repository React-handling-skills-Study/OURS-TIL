import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import AddMember from "./pages/AddMember";
import BusinessArea from "./pages/BusinessArea";
import Contect from "./pages/Contect";
import Help from "./pages/Help";
import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import MemberDetail from "./pages/MemberDetail";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";
import NotLogin from "./pages/NotLogin";
import NewMember from './pages/NewMember'

function App() {

  const [isLogged,setIsLogged] = useState(false)

  const onLogin = () =>{
    setIsLogged(true);
  }
  const onLogout = () =>{
    setIsLogged(false);
  }
  if(!isLogged){
    
  }
  return (
    <Layout isLogged={isLogged}>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path='/contect' exact>
      <Contect />
      </Route>

      <Route path='/about' exact>
      <About />
      </Route>

      <Route path="/members" exact>
      {isLogged && <Members /> }
      {!isLogged &&<Redirect to='/login' />}
      </Route>
      <Route path='/addmember' exact>
			<AddMember />
		 </Route>

      <Route path="/members/:memberId">
        <MemberDetail/>
      </Route>

      <Route path="/area">
      {isLogged && <BusinessArea/>}
      {!isLogged &&<Redirect to='/login' />}
      </Route>

      <Route path='/newmember'>
      {!isLogged &&<Redirect to='/login' />}
      {isLogged && <NewMember />}
      </Route>

      <Route path="/help" exact >
        <Help />
      </Route>

      <Route path="/login" exact >
        {!isLogged && <LoginPage onLogin={onLogin} />}
        {isLogged && <LogoutPage onLogout={onLogout} />}
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
