import classes from "./CartButton.module.css";

const CartButton = ({ setDisplay }) => {
  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <button className={classes.button} onClick={handleDisplay}>
      <span>My Cart</span>
      <span className={classes.badge}>상품 개수</span>
    </button>
  );
};

export default CartButton;
