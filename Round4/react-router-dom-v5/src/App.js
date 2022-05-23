import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import BusinessArea from "./pages/BusinessArea";
import Contect from "./pages/Contect";
import Home from "./pages/Home";
import MemberDetail from "./pages/MemberDetail";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Layout>
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
        <Members />
        <>
        </>
        <></>
        
      </Route>
      <Route path="/members/:memberId">
        <MemberDetail/>
      </Route>
      <Route path="/area">
        <BusinessArea/>
      </Route>
      <Route path="/help"></Route>
      <Route path="/login"></Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
