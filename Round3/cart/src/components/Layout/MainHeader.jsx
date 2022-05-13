import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader = ({ setDisplay }) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton setDisplay={setDisplay} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
