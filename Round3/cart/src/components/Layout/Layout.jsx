import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = ({ setDisplay, children }) => {
  return (
    <Fragment>
      <MainHeader setDisplay={setDisplay} />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
