import classes from "./CartItem.module.css";

const CartItem = ({ item, setQuantities, quantities }) => {
  const { title, quantity, total, price } = item;

  const quantityDown = () => {
    if (quantity > 0) {
      setQuantities((prev) => (prev -= 1));
    }
  };
  const quantityUp = () => {
    setQuantities((prev) => (prev += 1));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(quantity * price).toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={quantityDown}>-</button>
          <button onClick={quantityUp}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
